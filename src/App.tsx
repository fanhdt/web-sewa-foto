import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { AuthPage } from "./components/AuthPage";
import { Dashboard } from "./components/Dashboard";
import { PackageSelection } from "./components/PackageSelection";
import { PaymentPage } from "./components/PaymentPage";
import { PhotoGallery } from "./components/PhotoGallery";
import { PhotographerPortfolio } from "./components/PhotographerPortfolio";
import { Toaster } from "./components/ui/sonner";

export type Page =
  | "home"
  | "auth"
  | "dashboard"
  | "packages"
  | "payment"
  | "gallery"
  | "portfolio";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface PhotographyPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  photos: number;
  features: string[];
  image: string;
}

export interface Booking {
  id: string;
  packageId: string;
  status: "pending" | "paid" | "completed";
  date?: string;
  photos?: Photo[];
}

export interface Photo {
  id: string;
  url: string;
  selected: boolean;
  edited: boolean;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [user, setUser] = useState<User | null>(null);
  const [selectedPackage, setSelectedPackage] =
    useState<PhotographyPackage | null>(null);
  const [currentBooking, setCurrentBooking] =
    useState<Booking | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock login
    const mockUser = {
      id: "1",
      name: email.split("@")[0],
      email: email,
    };
    setUser(mockUser);
    setCurrentPage("dashboard");
  };

  const handleRegister = (
    name: string,
    email: string,
    password: string,
  ) => {
    // Mock registration
    const mockUser = {
      id: "1",
      name: name,
      email: email,
    };
    setUser(mockUser);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("home");
    setSelectedPackage(null);
    setCurrentBooking(null);
  };

  const handlePackageSelect = (pkg: PhotographyPackage) => {
    setSelectedPackage(pkg);
    setCurrentPage("payment");
  };

  const handlePaymentComplete = () => {
    if (selectedPackage) {
      const booking: Booking = {
        id: Date.now().toString(),
        packageId: selectedPackage.id,
        status: "paid",
        date: new Date().toISOString(),
      };
      setCurrentBooking(booking);
      setCurrentPage("dashboard");
    }
  };

  const navigateTo = (page: Page) => {
    if (
      page === "packages" ||
      page === "gallery" ||
      page === "dashboard"
    ) {
      if (!user) {
        setCurrentPage("auth");
        return;
      }
    }
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        user={user}
        onNavigate={navigateTo}
        onLogout={handleLogout}
        currentPage={currentPage}
      />

      {currentPage === "home" && (
        <LandingPage onNavigate={navigateTo} />
      )}

      {currentPage === "auth" && (
        <AuthPage
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
      )}

      {currentPage === "dashboard" && user && (
        <Dashboard
          user={user}
          booking={currentBooking}
          onNavigate={navigateTo}
        />
      )}

      {currentPage === "packages" && user && (
        <PackageSelection
          onSelectPackage={handlePackageSelect}
        />
      )}

      {currentPage === "payment" && user && selectedPackage && (
        <PaymentPage
          package={selectedPackage}
          onPaymentComplete={handlePaymentComplete}
          onBack={() => setCurrentPage("packages")}
        />
      )}

      {currentPage === "gallery" && user && (
        <PhotoGallery
          booking={currentBooking}
          onBack={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "portfolio" && <PhotographerPortfolio />}

      <Toaster />
    </div>
  );
}