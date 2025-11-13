import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Download, Check, Image as ImageIcon, Edit } from 'lucide-react';
import type { Booking, Photo } from '../App';
import { toast } from 'sonner@2.0.3';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoGalleryProps {
  booking: Booking | null;
  onBack: () => void;
}

export function PhotoGallery({ booking, onBack }: PhotoGalleryProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());

  // Generate mock photos
  useEffect(() => {
    if (!booking?.photos) {
      const mockPhotos: Photo[] = Array.from({ length: 24 }, (_, i) => ({
        id: `photo-${i + 1}`,
        url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&h=600&fit=crop`,
        selected: false,
        edited: i % 3 === 0 // Some photos are already edited
      }));
      setPhotos(mockPhotos);
    } else {
      setPhotos(booking.photos);
    }
  }, [booking]);

  const handlePhotoToggle = (photoId: string) => {
    const newSelected = new Set(selectedPhotos);
    if (newSelected.has(photoId)) {
      newSelected.delete(photoId);
    } else {
      newSelected.add(photoId);
    }
    setSelectedPhotos(newSelected);

    // Update photo selection
    setPhotos(photos.map(photo => 
      photo.id === photoId 
        ? { ...photo, selected: !photo.selected }
        : photo
    ));
  };

  const handleSelectAll = () => {
    if (selectedPhotos.size === photos.length) {
      setSelectedPhotos(new Set());
      setPhotos(photos.map(photo => ({ ...photo, selected: false })));
    } else {
      const allIds = new Set(photos.map(p => p.id));
      setSelectedPhotos(allIds);
      setPhotos(photos.map(photo => ({ ...photo, selected: true })));
    }
  };

  const handleRequestEdit = () => {
    if (selectedPhotos.size === 0) {
      toast.error('Pilih foto yang ingin diedit terlebih dahulu');
      return;
    }
    toast.success(`${selectedPhotos.size} foto dipilih untuk diedit. Tim kami akan segera memprosesnya.`);
  };

  const handleDownloadSelected = () => {
    if (selectedPhotos.size === 0) {
      toast.error('Pilih foto yang ingin didownload terlebih dahulu');
      return;
    }
    toast.success(`Mendownload ${selectedPhotos.size} foto...`);
    // In real implementation, this would trigger actual downloads
  };

  const handleDownloadAll = () => {
    toast.success('Mendownload semua foto...');
    // In real implementation, this would trigger actual downloads
  };

  const handleRequestPrint = () => {
    if (selectedPhotos.size === 0) {
      toast.error('Pilih foto yang ingin dicetak terlebih dahulu');
      return;
    }
    toast.success(`${selectedPhotos.size} foto dipilih untuk dicetak. Kami akan menghubungi Anda segera.`);
  };

  if (!booking && photos.length === 0) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>

          <Card>
            <CardContent className="p-12 text-center">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-gray-900">
                Belum Ada Foto
              </h3>
              <p className="text-gray-600 mb-6">
                Foto Anda akan tersedia setelah sesi pemotretan selesai
              </p>
              <Button onClick={onBack}>
                Kembali ke Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-gray-900">
            Galeri Foto Anda
          </h1>
          <p className="text-xl text-gray-600">
            Pilih foto untuk diedit, didownload, atau dicetak
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">Total Foto</p>
              <p className="text-2xl text-gray-900">
                {photos.length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">Foto Dipilih</p>
              <p className="text-2xl text-blue-600">
                {selectedPhotos.size}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">Sudah Diedit</p>
              <p className="text-2xl text-green-600">
                {photos.filter(p => p.edited).length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">Belum Diedit</p>
              <p className="text-2xl text-orange-600">
                {photos.filter(p => !p.edited).length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Aksi</CardTitle>
            <CardDescription>
              Pilih foto terlebih dahulu untuk melakukan aksi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleSelectAll} variant="outline">
                <Check className="h-4 w-4 mr-2" />
                {selectedPhotos.size === photos.length ? 'Batalkan Semua' : 'Pilih Semua'}
              </Button>
              
              <Button onClick={handleRequestEdit} variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Minta Edit ({selectedPhotos.size})
              </Button>

              <Button onClick={handleDownloadSelected} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Terpilih ({selectedPhotos.size})
              </Button>

              <Button onClick={handleDownloadAll}>
                <Download className="h-4 w-4 mr-2" />
                Download Semua
              </Button>

              <Button onClick={handleRequestPrint} variant="outline">
                Cetak Foto ({selectedPhotos.size})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                selectedPhotos.has(photo.id)
                  ? 'border-blue-600 shadow-lg'
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => handlePhotoToggle(photo.id)}
            >
              <ImageWithFallback
                src={photo.url}
                alt={`Photo ${photo.id}`}
                className="w-full aspect-[3/4] object-cover"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity ${
                selectedPhotos.has(photo.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    selectedPhotos.has(photo.id)
                      ? 'bg-blue-600 border-blue-600'
                      : 'bg-transparent border-white'
                  }`}>
                    {selectedPhotos.has(photo.id) && (
                      <Check className="h-5 w-5 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              {photo.edited && (
                <div className="absolute top-2 right-2">
                  <Badge variant="default" className="bg-green-600">
                    Edited
                  </Badge>
                </div>
              )}

              {/* Checkbox for selection */}
              <div className="absolute top-2 left-2">
                <Checkbox
                  checked={selectedPhotos.has(photo.id)}
                  onCheckedChange={() => handlePhotoToggle(photo.id)}
                  className="bg-white"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg mb-2 text-gray-900">
              Informasi Penting
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Pilih foto yang Anda inginkan untuk diedit dengan kualitas terbaik</li>
              <li>• Foto yang sudah diedit dapat langsung didownload</li>
              <li>• Untuk mencetak foto, pilih foto yang diinginkan dan klik tombol "Cetak Foto"</li>
              <li>• Foto tersedia untuk didownload hingga 30 hari setelah sesi pemotretan</li>
              <li>• Untuk pertanyaan, hubungi kami di info@fotokita.com</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
