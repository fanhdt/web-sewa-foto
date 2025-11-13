import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Camera, Award, Star, MapPin, Instagram, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Photographer {
  id: string;
  name: string;
  photo: string;
  specialty: string[];
  experience: number;
  description: string;
  rating: number;
  totalProjects: number;
  location: string;
  portfolio: {
    url: string;
    category: string;
  }[];
  contact: {
    email: string;
    phone: string;
    instagram: string;
  };
  achievements: string[];
}

export function PhotographerPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const photographers: Photographer[] = [
    {
      id: '1',
      name: 'Budi Santoso',
      photo: 'https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5ODE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialty: ['Wedding', 'Portrait', 'Event'],
      experience: 8,
      description: 'Fotografer profesional dengan spesialisasi wedding dan portrait. Berpengalaman lebih dari 8 tahun dalam mengabadikan momen-momen berharga dengan sentuhan artistik.',
      rating: 4.9,
      totalProjects: 250,
      location: 'Jakarta',
      portfolio: [
        { url: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?w=400', category: 'wedding' },
        { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400', category: 'wedding' },
        { url: 'https://images.unsplash.com/photo-1600366249664-acd65e33e5d2?w=400', category: 'portrait' },
        { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', category: 'portrait' },
        { url: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?w=400', category: 'event' },
        { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400', category: 'event' },
      ],
      contact: {
        email: 'budi.santoso@fotokita.com',
        phone: '+62 812-3456-7890',
        instagram: '@budiphoto'
      },
      achievements: [
        'Juara 1 Wedding Photography Awards 2023',
        'Featured in Photography Magazine Indonesia',
        'Certified Professional Photographer (CPP)'
      ]
    },
    {
      id: '2',
      name: 'Sarah Wijaya',
      photo: 'https://images.unsplash.com/photo-1618876561985-ff3a14af4cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBob3RvZ3JhcGhlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI5OTQ1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialty: ['Portrait', 'Fashion', 'Product'],
      experience: 6,
      description: 'Spesialis portrait dan fashion photography dengan gaya yang elegant dan modern. Ahli dalam lighting dan post-processing untuk hasil yang memukau.',
      rating: 4.8,
      totalProjects: 180,
      location: 'Bandung',
      portfolio: [
        { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', category: 'portrait' },
        { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400', category: 'portrait' },
        { url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400', category: 'fashion' },
        { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', category: 'fashion' },
        { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', category: 'product' },
        { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', category: 'product' },
      ],
      contact: {
        email: 'sarah.wijaya@fotokita.com',
        phone: '+62 813-4567-8901',
        instagram: '@sarahphoto'
      },
      achievements: [
        'Fashion Photography Excellence Award 2022',
        'Published in Vogue Indonesia',
        'Adobe Certified Expert in Photoshop'
      ]
    },
    {
      id: '3',
      name: 'Ahmad Fauzi',
      photo: 'https://images.unsplash.com/photo-1608682285597-156feb50eb4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMDM3MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialty: ['Event', 'Corporate', 'Documentary'],
      experience: 10,
      description: 'Fotografer event dan corporate dengan pengalaman menangani berbagai acara besar. Mampu menangkap momen-momen penting dengan profesional dan efisien.',
      rating: 5.0,
      totalProjects: 320,
      location: 'Surabaya',
      portfolio: [
        { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', category: 'event' },
        { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400', category: 'event' },
        { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400', category: 'corporate' },
        { url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400', category: 'corporate' },
        { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400', category: 'corporate' },
        { url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', category: 'event' },
      ],
      contact: {
        email: 'ahmad.fauzi@fotokita.com',
        phone: '+62 814-5678-9012',
        instagram: '@ahmadevents'
      },
      achievements: [
        'Best Event Photographer 2021 & 2023',
        'Official Photographer for Fortune 500 Companies',
        'International Photography Award Winner'
      ]
    },
    {
      id: '4',
      name: 'Rina Kartika',
      photo: 'https://images.unsplash.com/photo-1600366249664-acd65e33e5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzA2NjMwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialty: ['Wedding', 'Prewedding', 'Family'],
      experience: 7,
      description: 'Spesialis wedding dan family photography dengan pendekatan yang warm dan natural. Ahli dalam menciptakan suasana yang nyaman untuk hasil foto yang autentik.',
      rating: 4.9,
      totalProjects: 200,
      location: 'Yogyakarta',
      portfolio: [
        { url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400', category: 'wedding' },
        { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400', category: 'wedding' },
        { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400', category: 'prewedding' },
        { url: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d0ac0?w=400', category: 'prewedding' },
        { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400', category: 'family' },
        { url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400', category: 'family' },
      ],
      contact: {
        email: 'rina.kartika@fotokita.com',
        phone: '+62 815-6789-0123',
        instagram: '@rinaphotography'
      },
      achievements: [
        'Best Wedding Photographer Yogyakarta 2022',
        'Featured in Brides Indonesia',
        'Master of Photography Certification'
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'Semua' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'portrait', label: 'Portrait' },
    { value: 'event', label: 'Event' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'product', label: 'Product' },
  ];

  const filterPortfolio = (portfolio: Photographer['portfolio']) => {
    if (selectedCategory === 'all') return portfolio;
    return portfolio.filter(item => item.category === selectedCategory);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-gray-900">
            Tim Fotografer Profesional Kami
          </h1>
          <p className="text-xl text-gray-600">
            Kenali fotografer berbakat yang siap mengabadikan momen spesial Anda
          </p>
        </div>

        {/* Photographers Grid */}
        <div className="space-y-12">
          {photographers.map((photographer) => (
            <Card key={photographer.id} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Photographer Info */}
                <div className="lg:col-span-1 p-6">
                  <div className="text-center mb-6">
                    <ImageWithFallback
                      src={photographer.photo}
                      alt={photographer.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                    />
                    <h2 className="text-2xl mb-2 text-gray-900">
                      {photographer.name}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-900">{photographer.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {photographer.totalProjects}+ projects
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-4">
                      <MapPin className="h-4 w-4" />
                      {photographer.location}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-900 mb-2">
                        Spesialisasi:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {photographer.specialty.map((spec) => (
                          <Badge key={spec} variant="secondary">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm text-gray-900 mb-2">
                        Pengalaman:
                      </h3>
                      <p className="text-sm text-gray-600">
                        {photographer.experience} tahun
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">
                        {photographer.description}
                      </p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          Lihat Detail Lengkap
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{photographer.name}</DialogTitle>
                          <DialogDescription>
                            Profil dan pencapaian lengkap
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <ImageWithFallback
                              src={photographer.photo}
                              alt={photographer.name}
                              className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="text-lg">{photographer.rating}/5.0</span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {photographer.totalProjects}+ proyek selesai
                              </p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg mb-2 text-gray-900">
                              Tentang
                            </h3>
                            <p className="text-gray-700">{photographer.description}</p>
                          </div>

                          <div>
                            <h3 className="text-lg mb-3 text-gray-900">
                              Pencapaian & Sertifikasi
                            </h3>
                            <ul className="space-y-2">
                              {photographer.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-700">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg mb-3 text-gray-900">
                              Kontak
                            </h3>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-gray-600" />
                                <a href={`mailto:${photographer.contact.email}`} className="text-blue-600 hover:underline">
                                  {photographer.contact.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-gray-600" />
                                <span className="text-gray-700">{photographer.contact.phone}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Instagram className="h-4 w-4 text-gray-600" />
                                <span className="text-gray-700">{photographer.contact.instagram}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Portfolio Gallery */}
                <div className="lg:col-span-2 p-6 bg-gray-50">
                  <div className="mb-4">
                    <h3 className="text-lg mb-3 text-gray-900">
                      Portofolio
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.value}
                          variant={selectedCategory === category.value ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedCategory(category.value)}
                        >
                          {category.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filterPortfolio(photographer.portfolio).map((item, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                        <ImageWithFallback
                          src={item.url}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>

                  {filterPortfolio(photographer.portfolio).length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                      <p>Tidak ada foto dalam kategori ini</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl mb-4">
              Siap Bekerja Sama?
            </h2>
            <p className="text-xl mb-6 text-gray-100">
              Hubungi kami untuk konsultasi gratis dan diskusikan kebutuhan fotografi Anda
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Hubungi Kami
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                <Mail className="h-5 w-5 mr-2" />
                Email Kami
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
