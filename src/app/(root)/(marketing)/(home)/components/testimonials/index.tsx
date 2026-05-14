import { links } from '@/config/links'
import { MarqueeDemoVertical } from '@/components/mvpblocks/testimonials-marquee'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empregadora',
      image: '',
      content:
        'Encontrei uma profissional incrível através da D-Express. O processo foi simples e seguro. Nossa casa nunca esteve tão bem cuidada!',
      rating: 5,
    },
    {
      name: 'Ana Santos',
      role: 'Profissional Doméstica',
      image: '',
      content:
        'A plataforma me ajudou a encontrar várias oportunidades de trabalho. Os empregadores são sérios e o pagamento é sempre em dia.',
      rating: 5,
    },
    {
      name: 'João Oliveira',
      role: 'Empregador',
      image: '',
      content:
        'Precisava de alguém para cuidar da casa enquanto viajo a trabalho. A profissional que encontrei é de total confiança.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30" >
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Depoimentos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos usuários têm a dizer sobre a experiência na D-Express.
          </p>
        </div>

        <MarqueeDemoVertical />

        {/* Trust Indicators */}
 
      </div>
    </section>
  )
}
