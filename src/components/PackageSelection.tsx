import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Camera } from 'lucide-react';
import type { PhotographyPackage } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PackageSelectionProps {
  onSelectPackage: (pkg: PhotographyPackage) => void;
}

export function PackageSelection({ onSelectPackage }: PackageSelectionProps) {
  const packages: PhotographyPackage[] = [
    {
      id: '1',
      name: 'Paket Basic Portrait',
      price: 1500000,
      duration: '2 jam',
      photos: 50,
      image: 'https://images.unsplash.com/photo-1649107835391-07d0b93a409d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MzAyNDEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '2 jam pemotretan',
        '50+ foto edited berkualitas tinggi',
        '1 fotografer profesional',
        'Studio indoor',
        'Akses download online',
        'Revisi minor'
      ]
    },
    {
      id: '2',
      name: 'Paket Premium Portrait',
      price: 2500000,
      duration: '4 jam',
      photos: 100,
      image: 'https://images.unsplash.com/photo-1649107835391-07d0b93a409d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MzAyNDEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '4 jam pemotretan',
        '100+ foto edited berkualitas tinggi',
        '1 fotografer profesional',
        'Studio indoor & outdoor',
        'Akses download online',
        'Free cetakan 10 foto',
        'Revisi unlimited'
      ]
    },
    {
      id: '3',
      name: 'Paket Event Corporate',
      price: 3000000,
      duration: '4 jam',
      photos: 200,
      image: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzAzNjk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '4 jam pemotretan',
        '200+ foto edited berkualitas tinggi',
        '1 fotografer profesional',
        'Liputan event perusahaan',
        'Akses download online',
        'Free cetakan 20 foto',
        'Album digital',
        'Video highlight 1 menit'
      ]
    },
    {
      id: '4',
      name: 'Paket Premium Event',
      price: 4500000,
      duration: '6 jam',
      photos: 300,
      image: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzAzNjk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '6 jam pemotretan',
        '300+ foto edited berkualitas tinggi',
        '2 fotografer profesional',
        'Liputan event lengkap',
        'Akses download online',
        'Free cetakan 30 foto',
        'Album digital premium',
        'Video highlight 3 menit'
      ]
    },
    {
      id: '5',
      name: 'Paket Wedding Silver',
      price: 5000000,
      duration: '6 jam',
      photos: 300,
      image: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMDM3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '6 jam pemotretan',
        '300+ foto edited berkualitas tinggi',
        '2 fotografer profesional',
        'Liputan akad & resepsi',
        'Akses download online',
        'Free cetakan 50 foto',
        'Album digital',
        'Video cinematic 5 menit'
      ]
    },
    {
      id: '6',
      name: 'Paket Wedding Gold',
      price: 8000000,
      duration: '8 jam',
      photos: 500,
      image: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMDM3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '8 jam pemotretan (full day)',
        '500+ foto edited berkualitas tinggi',
        '3 fotografer profesional',
        '1 videografer',
        'Liputan lengkap dari persiapan',
        'Akses download online',
        'Album cetak premium',
        'Free cetakan 100 foto',
        'Video cinematic 10 menit',
        'Drone footage'
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-gray-900">
            Pilih Paket Fotografi
          </h1>
          <p className="text-xl text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <ImageWithFallback
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-blue-600" />
                  {pkg.name}
                </CardTitle>
                <CardDescription>
                  <span className="text-2xl text-blue-600">
                    Rp {pkg.price.toLocaleString('id-ID')}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div>
                      <span>Durasi: </span>
                      <span>{pkg.duration}</span>
                    </div>
                    <div>
                      <span>Foto: </span>
                      <span>{pkg.photos}+</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => onSelectPackage(pkg)} 
                    className="w-full"
                  >
                    Pilih Paket
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
