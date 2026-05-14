import { CardSupportContact } from '../components'

import { contacts } from '@/config/contacts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
  {
    question: 'Como posso contratar um(a) profissional doméstico(a)?',
    answer: `Você pode contratar diretamente pela plataforma. Basta navegar pelas categorias de serviços, selecionar o perfil desejado e preencher o formulário de contratação. Ou ligando diretamente para a nossa equipa de suporte ${contacts.geralPhoneNumber.label}.`,
  },
  {
    question: 'Como faço o meu cadastro como cliente?',
    answer:
      'Clique em "Criar Conta" no canto superior direito, selecione "Sou Cliente" e preencha os dados solicitados. Após o cadastro, você poderá aceder à plataforma e contratar serviços.',
  },
  {
    question: 'Como posso me cadastrar como profissional?',
    answer:
      'Vá até "Trabalhe Conosco", escolha sua área de atuação e preencha o formulário com seus dados pessoais, experiência e referências. A nossa equipa entrará em contacto.',
  },
  {
    question: 'Os profissionais são verificados?',
    answer:
      'Sim, todos os profissionais passam por um processo de verificação e entrevistas antes de serem aprovados na plataforma.',
  },
  {
    question: 'Posso agendar uma entrevista com o profissional antes de contratar?',
    answer:
      'Sim. Oferecemos a opção de agendamento prévio de entrevista virtual ou presencial, conforme disponibilidade.',
  },
  {
    question: 'A D Express dá algum tipo de garantia?',
    answer:
      'Sim. Oferecemos garantia de substituição do profissional em caso de desistência ou incompatibilidade, dentro do prazo acordado.',
  },
  {
    question: 'Quais tipos de serviços posso contratar?',
    answer:
      'Domésticas internas/externas, diaristas, babás internas/ externas, lavadeiras, cozinheiras, cuidadoras de idosos e crianças especiais.',
  },
  {
    question: 'Como posso entrar em contacto com o suporte?',
    answer: `Através do nosso WhatsApp ${contacts.geralPhoneNumber.label}, chat da plataforma ou e-mail de atendimento: ${contacts.geralEmail}`,
  },
]

export default function FAQPage() {
  return (
    <main className="flex flex-col max-w-[120rem] w-full mx-auto px-4 py-32">
      <section className="py-16 bg-background">
        <div className="max-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion collapsible className="w-full space-y-4" type="single">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  className="bg-card border border-border rounded-lg px-4 py-2"
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="text-left hover:text-primary text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <CardSupportContact />
        </div>
      </section>
    </main>
  )
}
