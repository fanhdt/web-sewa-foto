import { Camera, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Camera,
      title: 'Fotografer Profesional',
      description: 'Tim fotografer berpengalaman dan tersertifikasi'
    },
    {
      icon: Award,
      title: 'Kualitas Terbaik',
      description: 'Peralatan kamera profesional dengan hasil maksimal'
    },
    {
      icon: Clock,
      title: 'Layanan Cepat',
      description: 'Hasil foto siap dalam 7 hari kerja'
    },
    {
      icon: Users,
      title: 'Fleksibel',
      description: 'Berbagai paket sesuai kebutuhan Anda'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      rating: 5,
      comment: 'Pelayanan sangat memuaskan! Hasil foto pernikahan kami luar biasa indah.',
      role: 'Klien Paket Wedding'
    },
    {
      name: 'Budi Santoso',
      rating: 5,
      comment: 'Profesional dan tepat waktu. Sangat recommended untuk acara perusahaan.',
      role: 'Klien Paket Event'
    },
    {
      name: 'Rina Kartika',
      rating: 5,
      comment: 'Fotografer sangat sabar dan hasil foto keluarga kami sempurna!',
      role: 'Klien Paket Portrait'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYzMDYzMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional Photography"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl mb-6">
              Abadikan Momen Berharga Anda
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Jasa fotografi profesional untuk setiap momen spesial Anda. 
              Dari wedding, portrait, hingga event perusahaan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => onNavigate('packages')}>
                Lihat Paket Foto
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" onClick={() => onNavigate('auth')}>
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600">
              Kami berkomitmen memberikan layanan terbaik untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Paket Fotografi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMDM3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding Photography"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2 text-gray-900">Paket Wedding</h3>
                <p className="text-gray-600 mb-4">Mulai dari Rp 5.000.000</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    6 jam pemotretan
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    300+ foto edited
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    2 fotografer
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649107835391-07d0b93a409d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MzAyNDEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portrait Photography"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2 text-gray-900">Paket Portrait</h3>
                <p className="text-gray-600 mb-4">Mulai dari Rp 1.500.000</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    2 jam pemotretan
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    50+ foto edited
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Studio indoor
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzAzNjk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event Photography"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2 text-gray-900">Paket Event</h3>
                <p className="text-gray-600 mb-4">Mulai dari Rp 3.000.000</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    4 jam pemotretan
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    200+ foto edited
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    1 fotografer
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => onNavigate('packages')}>
              Lihat Semua Paket
            </Button>
          </div>
        </div>
      </section>

      {/* Photographers Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Tim Fotografer Kami
            </h2>
            <p className="text-xl text-gray-600">
              Bertemu dengan fotografer profesional yang siap membantu Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              { name: 'Budi Santoso', specialty: 'Wedding & Portrait', rating: 4.9, image: 'https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Sarah Wijaya', specialty: 'Fashion & Portrait', rating: 4.8, image: 'https://images.unsplash.com/photo-1618876561985-ff3a14af4cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Ahmad Fauzi', specialty: 'Event & Corporate', rating: 5.0, image: 'https://images.unsplash.com/photo-1608682285597-156feb50eb4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Rina Kartika', specialty: 'Wedding & Family', rating: 4.9, image: 'https://images.unsplash.com/photo-1600366249664-acd65e33e5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
            ].map((photographer, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <ImageWithFallback
                    src={photographer.image}
                    alt={photographer.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                  />
                  <h3 className="text-lg mb-1 text-gray-900">
                    {photographer.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{photographer.specialty}</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-700">{photographer.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" onClick={() => onNavigate('portfolio')}>
              Lihat Portofolio Lengkap
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Testimoni Klien
            </h2>
            <p className="text-xl text-gray-600">
              Apa kata mereka tentang layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4 text-white">
            Siap Memulai?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Daftar sekarang dan dapatkan diskon 10% untuk pemesanan pertama Anda
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => onNavigate('auth')}>
            Daftar Gratis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera className="h-8 w-8 text-blue-400" />
                <span className="text-xl">FotoKita</span>
              </div>
              <p className="text-gray-400">
                Jasa fotografi profesional untuk setiap momen spesial Anda.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Kontak</h3>
              <p className="text-gray-400">Email: info@fotokita.com</p>
              <p className="text-gray-400">Telp: +62 812-3456-7890</p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Alamat</h3>
              <p className="text-gray-400">
                Jl. Fotografi No. 123<br />
                Jakarta Selatan, 12345
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FotoKita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
