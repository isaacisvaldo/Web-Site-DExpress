import { links } from '@/config/links'
import { MarqueeDemoVertical } from '@/components/mvpblocks/testimonials-marquee'
import { Award, BadgeCheck, CheckCircle, Heart, MapPin, Shield, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { CertificationsMarquee } from '../certifications'


export function AboutUs() {


  return (
    <section className="py-20 bg-muted/30" id={links.sobre}>
      {/* Sobre Nós Section */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        {/* Decorative backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Quem Somos</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sobre a <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">D Express</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções práticas e seguras para a contratação de profissionais domésticos em Angola
            </p>
          </div>

          {/* Main story block */}
          <div className="grid lg:grid-cols-5 gap-8 mb-16 items-stretch">
            {/* Left: big intro card */}
            <Card className="lg:col-span-3 p-8 md:p-10 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/15">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Quem somos</h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                A <span className="text-foreground font-semibold">DExpress</span> é uma empresa que traz soluções
                práticas e seguras para a contratação de profissionais domésticos, facilitando todo o processo
                para as famílias. Trabalhamos com uma seleção criteriosa, garantindo profissionais
                <span className="text-primary font-semibold"> verificadas, capacitadas e prontas</span> para
                oferecer um serviço de qualidade.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Além disso, procuramos disponibilizar profissionais que residam nas
                <span className="text-foreground font-semibold"> proximidades do cliente</span>, o que contribui
                diretamente para maior pontualidade, disponibilidade e adaptação à rotina da família.
              </p>
            </Card>

            {/* Right: INAPEM highlight + proximity */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="flex-1 p-8 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-primary/40 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-primary/20 mb-4">
                    <BadgeCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Certificada</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">INAPEM</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Somos uma empresa <span className="text-foreground font-semibold">certificada pelo INAPEM</span>,
                    o que reforça a nossa credibilidade, organização e compromisso com padrões formais de
                    prestação de serviços.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Profissionais perto de si</h4>
                    <p className="text-sm text-muted-foreground">Mais pontualidade e adaptação à sua rotina</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Valores Cards */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Nossos <span className="text-primary">Valores</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group text-center p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Confiança</h4>
                <p className="text-muted-foreground">
                  Verificamos todas as profissionais e garantimos referências confiáveis para sua total segurança
                </p>
              </Card>

              <Card className="group text-center p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Qualidade</h4>
                <p className="text-muted-foreground">
                  Selecionamos apenas profissionais experientes e altamente qualificadas para servir sua família
                </p>
              </Card>

              <Card className="group text-center p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Transparência</h4>
                <p className="text-muted-foreground">
                  Processo claro e honesto em todas as nossas relações, do cadastro à contratação
                </p>
              </Card>
            </div>
          </div>

          {/* CTA 
          <div className="text-center">
            <Link to="/sobre">
              <Button size="lg" className="px-8 hover:scale-105 transition-transform">
                Saiba Mais Sobre Nós
              </Button>
            </Link>
          </div>
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
  <div className="text-center">
    <div className="text-3xl font-bold text-primary mb-2">2.500+</div>
    <div className="text-sm text-muted-foreground">Profissionais</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
    <div className="text-sm text-muted-foreground">Conexões</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-primary mb-2">98%</div>
    <div className="text-sm text-muted-foreground">Satisfação</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-primary mb-2">24h</div>
    <div className="text-sm text-muted-foreground">Suporte</div>
  </div>
</div>
        </div>
      </section>

     <CertificationsMarquee />


    </section>
  )
}
