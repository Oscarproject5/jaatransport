import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AuctionTransportSection from '@/components/AuctionTransportSection'
import FleetSection from '@/components/FleetSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import QuoteSection from '@/components/QuoteSection'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import FloatingPhoneButton from '@/components/FloatingPhoneButton'
// import LiveChat from '@/components/LiveChat'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16 md:pb-0">
        <HeroSection />
        <ServicesSection />
        <AuctionTransportSection />
        <FleetSection />
        <WhyChooseUsSection />
        <AboutSection />
        <TestimonialsSection />
        <QuoteSection />
        <Footer />
      </main>
      <BottomNav />
      <FloatingPhoneButton />
      {/* <LiveChat /> */}
    </>
  )
}
