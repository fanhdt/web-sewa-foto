import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Package, Image, Calendar, CreditCard } from 'lucide-react';
import type { User, Booking, Page } from '../App';
import { Badge } from './ui/badge';

interface DashboardProps {
  user: User;
  booking: Booking | null;
  onNavigate: (page: Page) => void;
}

export function Dashboard({ user, booking, onNavigate }: DashboardProps) {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Selamat datang kembali, {user.name}!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Pemesanan</p>
                  <p className="text-2xl text-gray-900">
                    {booking ? '1' : '0'}
                  </p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Foto Tersedia</p>
                  <p className="text-2xl text-gray-900">
                    {booking?.photos ? booking.photos.length : '0'}
                  </p>
                </div>
                <Image className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Foto Terpilih</p>
                  <p className="text-2xl text-gray-900">
                    {booking?.photos ? booking.photos.filter(p => p.selected).length : '0'}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Status Pembayaran</p>
                  <p className="text-2xl text-gray-900">
                    {booking ? 'Lunas' : 'Belum Ada'}
                  </p>
                </div>
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Pesan Paket Baru</CardTitle>
              <CardDescription>
                Pilih paket fotografi yang sesuai dengan kebutuhan Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => onNavigate('packages')} className="w-full">
                Lihat Paket Fotografi
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Galeri Foto</CardTitle>
              <CardDescription>
                Lihat, pilih, dan download foto hasil pemotretan Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => onNavigate('gallery')} 
                className="w-full"
                disabled={!booking}
                variant={booking ? 'default' : 'secondary'}
              >
                {booking ? 'Buka Galeri' : 'Belum Ada Foto'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Booking History */}
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Pemesanan</CardTitle>
            <CardDescription>
              Lihat semua pemesanan Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            {booking ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-gray-900">
                        Pemesanan #{booking.id}
                      </h3>
                      <Badge variant={booking.status === 'paid' ? 'default' : 'secondary'}>
                        {booking.status === 'paid' ? 'Lunas' : booking.status === 'completed' ? 'Selesai' : 'Pending'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Tanggal: {booking.date ? new Date(booking.date).toLocaleDateString('id-ID') : '-'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Foto tersedia: {booking.photos ? booking.photos.length : 0}
                    </p>
                  </div>
                  <Button onClick={() => onNavigate('gallery')} variant="outline">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Belum ada pemesanan</p>
                <Button onClick={() => onNavigate('packages')}>
                  Pesan Sekarang
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
