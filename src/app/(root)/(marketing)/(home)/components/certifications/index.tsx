import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    logo: "/cert-inapem.png",
    name: "INAPEM",
    description: "Instituto Nacional de Apoio às Micro, Pequenas e Médias Empresas",
  },
  {
    logo: "cert-certified.png",
    name: "Empresa Certificada",
    description: "Registo formal e legalizado em Angola",
  },
  {
    logo:"/cert-quality.png" ,
    name: "Qualidade Garantida",
    description: "Padrões de excelência reconhecidos no setor",
  },
  {
    logo: "/cert-iso.png",
    name: "Padrões Formais",
    description: "Conformidade com regulamentos e normas do setor",
  },
  {
    logo: "/cert-trusted.png",
    name: "Parceiro de Confiança",
    description: "Reconhecida pelo compromisso e credibilidade",
  },
];

// Replica até ter no mínimo `minCount` itens
function fillItems<T>(arr: T[], minCount: number): T[] {
  const result: T[] = [];
  while (result.length < minCount) result.push(...arr);
  return result;
}

export function CertificationsMarquee() {

  const items = fillItems(certifications, 20);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Reconhecimento e Credibilidade</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas <span className="text-primary">Certificações</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresa certificada e reconhecida pelos principais órgãos do setor em Angola
          </p>
        </div>
      </div>

      {/* First row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee hover:[animation-play-state:paused]"
          style={{
            width: "max-content",
            gap: "1.5rem",
            "--duration": `${certifications.length * 6}s`,
            "--gap": "1.5rem",
          } as React.CSSProperties}
        >
          {items.map((cert, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 group">
              <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                    <div className="relative w-20 h-20 rounded-xl bg-white p-2 border border-primary/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.logo as any}
                        alt={`Logo ${cert.name}`}
                        width={512}
                        height={512}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-foreground leading-tight">{cert.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - reverse */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center animate-marquee hover:[animation-play-state:paused]"
          style={{
            width: "max-content",
            gap: "2rem",
            animationDirection: "reverse",
            "--duration": `${certifications.length * 8}s`,
            "--gap": "2rem",
          } as React.CSSProperties}
        >
          {items.map((cert, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-primary/20 hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0">
                <img
                  src={cert.logo as any}
                  alt={`Logo ${cert.name}`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap pr-2">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}