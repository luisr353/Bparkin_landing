import Header from '@/shared/components/layout/Header'
import Footer from '@/shared/components/layout/Footer'
import HeroSection from '@/features/hero/components/HeroSection'
import AdvertisingServices from '@/features/advertising/components/AdvertisingServices'
import ParkingServices from '@/features/parking/components/ParkingServices'
import ContactSection from '@/features/contact/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AdvertisingServices />
      <ParkingServices />
      <ContactSection />
      <Footer />
    </main>
  )
}