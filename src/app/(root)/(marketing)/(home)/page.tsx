import { HeroSection } from './components/hero'
import { PlanSection } from './components/plan'
import { HowItWorks } from './components/howItWorks'
import { SearchSection } from './components/search'
import { ApplySection } from './components/apply'
import { LoadPageData } from './components/load'
import { TestimonialsSection } from './components/testimonials'
import { BecomeClientProvider } from './components/becomeClients/becomeClientContext'
import { BecomeClientSection } from './components/becomeClients'
import { AboutUs } from './components/about'


export default async function LandingPage() {
  return (
    <LoadPageData>
      <HeroSection />
      <HowItWorks />
      <SearchSection />
      <ApplySection />
      <BecomeClientProvider>
        <PlanSection />
        <AboutUs />
     
    
        <BecomeClientSection />
          <TestimonialsSection />
        
      </BecomeClientProvider>
    </LoadPageData>
  )
}
