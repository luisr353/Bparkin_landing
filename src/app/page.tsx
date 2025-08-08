import Header from '@/shared/components/layout/Header'
import Footer from '@/shared/components/layout/Footer'
import HeroSection from '@/features/hero/components/HeroSection'
import ParkingServices from '@/features/parking/components/ParkingServices'
import AdvertisingServices from '@/features/advertising/components/AdvertisingServices'
import ContactSection from '@/features/contact/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ParkingServices />
      <AdvertisingServices />
      <ContactSection />
      <Footer />
    </main>
  )
}