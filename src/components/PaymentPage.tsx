import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, CreditCard, Smartphone, Building2 } from 'lucide-react';
import type { PhotographyPackage } from '../App';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PaymentPageProps {
  package: PhotographyPackage;
  onPaymentComplete: () => void;
  onBack: () => void;
}

export function PaymentPage({ package: pkg, onPaymentComplete, onBack }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
      toast.error('Mohon lengkapi semua field pembayaran');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Pembayaran berhasil! Terima kasih atas pemesanan Anda.');
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
                <CardDescription>Detail paket yang Anda pilih</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Durasi: {pkg.duration}</p>
                    <p>Jumlah Foto: {pkg.photos}+ foto edited</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">Rp {pkg.price.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pajak (10%)</span>
                    <span className="text-gray-900">Rp {(pkg.price * 0.1).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-lg text-gray-900">Total</span>
                    <span className="text-xl text-blue-600">
                      Rp {(pkg.price * 1.1).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Metode Pembayaran</CardTitle>
                <CardDescription>Pilih metode pembayaran Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                        <span>Kartu Kredit / Debit</span>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="e-wallet" id="e-wallet" />
                      <Label htmlFor="e-wallet" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Smartphone className="h-5 w-5 text-green-600" />
                        <span>E-Wallet (GoPay, OVO, Dana)</span>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                      <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Building2 className="h-5 w-5 text-purple-600" />
                        <span>Transfer Bank</span>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'credit-card' && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Nomor Kartu</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          maxLength={19}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-name">Nama di Kartu</Label>
                        <Input
                          id="card-name"
                          placeholder="NAMA LENGKAP"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value.toUpperCase())}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-expiry">Berlaku Hingga</Label>
                          <Input
                            id="card-expiry"
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            maxLength={5}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="card-cvv">CVV</Label>
                          <Input
                            id="card-cvv"
                            type="password"
                            placeholder="123"
                            value={cardCVV}
                            onChange={(e) => setCardCVV(e.target.value)}
                            maxLength={3}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'e-wallet' && (
                    <div className="space-y-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        Anda akan diarahkan ke aplikasi e-wallet untuk menyelesaikan pembayaran.
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'bank-transfer' && (
                    <div className="space-y-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        Instruksi transfer bank akan dikirim ke email Anda setelah konfirmasi pesanan.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm">
                          <span className="text-gray-900">Bank BCA</span><br />
                          <span className="text-gray-600">No. Rekening: 1234567890</span><br />
                          <span className="text-gray-600">A.n. PT FotoKita Indonesia</span>
                        </p>
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Memproses...' : `Bayar Rp ${(pkg.price * 1.1).toLocaleString('id-ID')}`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Dengan melakukan pembayaran, Anda menyetujui syarat dan ketentuan kami
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
