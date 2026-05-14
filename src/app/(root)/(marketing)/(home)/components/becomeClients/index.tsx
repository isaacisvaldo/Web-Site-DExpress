import { Building2, Phone, MapPin, Send, FileText } from 'lucide-react'

import { BecomeClientForm } from './becomeClientForm'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { links } from '@/config/links'
import { contacts } from '@/config/contacts'

export function BecomeClientSection() {
  const infoBlocks = [
    {
      icon: Building2,
      title: 'Seja nosso parceiro',
      content: 'Envie seus dados para avaliação',
      description: 'Após análise, retornaremos com as próximas etapas',
    },
    {
      icon: Phone,
      title: 'Suporte ao Cliente',
      content: contacts.geralPhoneNumber.label,
      description: 'Seg-Sex: 8h às 18h',
    },
    {
      icon: MapPin,
      title: 'Cobertura',
      content: 'Atendemos em toda Luanda',
      description: 'Presença em vários pontos de Luanda',
    },
  ]

  return (
    <section className="py-20 bg-background" id={links.paraEmpresas}>
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cadastre a Sua Empresa
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte sua empresa às oportunidades da nossa plataforma. Preencha seus dados básicos e
            dê o primeiro passo para se tornar nosso cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Como funciona?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Preencha o formulário com as informações solicitadas. Nossa equipe analisará sua
                solicitação e entrará em contacto para dar continuidade ao processo de integração.
              </p>
            </div>

            <div className="space-y-6">
              {infoBlocks.map((info, index) => {
                const Icon = info.icon

                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-lg text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* FAQ */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Dúvidas sobre o cadastro</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Consulte nossa FAQ para entender como funciona o processo de aprovação e quais são
                  os benefícios para clientes da plataforma.
                </p>
              </CardContent>
            </Card>

            {/* Imagem ilustrativa */}
            <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-md">
              <img
                src="/info.png"
                alt="Empresa parceira D Express"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Formulário */}
          <Card className="shadow-elegant border-0 overflow-hidden">
            <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Send className="w-5 h-5 text-primary" />
                Solicitação de Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <BecomeClientForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}