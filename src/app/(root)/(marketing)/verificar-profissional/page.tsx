"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ShieldCheck,
  ShieldAlert,
  MapPin,
  Briefcase,
  Calendar,
  Phone,
  Languages,
  Star,
  BadgeCheck,
  UserX,
  Sparkles,
  Loader2,
  GraduationCap,
  Heart,
} from "lucide-react";

import { type Profissional } from "@/types/professional";
import { listProfessionalByCodeService } from "@/services/professionals/get-profissional-by-code";
import { buscarProfissionalAction } from "@/actions/professional";

export default function VerificarProfissional() {
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<Profissional | null>(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);
  const [pesquisou, setPesquisou] = useState(false);

  const buscar = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const codigoTrimmed = codigo.trim();
    if (!codigoTrimmed) return;

    setLoading(true);
    setResultado(null);
    setNaoEncontrado(false);
    setPesquisou(false);

    const response = await buscarProfissionalAction(codigoTrimmed);

    if (response.success && response.data) {
      setResultado(response.data);
      setNaoEncontrado(false);
    } else {
      setResultado(null);
      setNaoEncontrado(true);
    }

    setPesquisou(true);
    setLoading(false);
  };

  // Helpers para extrair dados do modelo real
  const getNome = (p: Profissional) => p.fullName;
  const getIniciais = (p: Profissional) =>
    p.fullName
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  const getCargo = (p: Profissional) => p.desiredPosition?.label ?? "—";
  const getExperiencia = (p: Profissional) => p.experienceLevel?.label ?? "—";
  const getLocalizacao = (p: Profissional) => {
    const parts = [
      p.location?.district?.name,
      p.location?.city?.name,
    ].filter(Boolean);
    return parts.join(", ") || "—";
  };
  const getTelefone = (p: Profissional) => p.phoneNumber ?? "—";
  const getIdiomas = (p: Profissional) =>
    p.professionalLanguages?.map((pl) => pl.language?.label ?? pl.languageId) ?? [];
  const getCompetencias = (p: Profissional) =>
    p.professionalSkills?.map((ps) => ps.skill?.label ?? ps.skillId) ?? [];
  const getCursos = (p: Profissional) =>
    p.professionalCourses?.map((pc) => pc.course?.label ?? pc.courseId) ?? [];
  const getEscolaridade = (p: Profissional) => p.highestDegree?.label ?? "—";
  const getEstadoCivil = (p: Profissional) => p.maritalStatus?.label ?? "—";
  const getGenero = (p: Profissional) => p.gender?.label ?? "—";
  const getSalarioEsperado = (p: Profissional) =>
    p.expectedSalary
      ? new Intl.NumberFormat("pt-AO", {
        style: "currency",
        currency: "AOA",
        maximumFractionDigits: 0,
      }).format(p.expectedSalary)
      : "—";
  const isVerificado = (p: Profissional) =>
    p.hasMedicalCertificate || p.hasTrainingCertificate || !p.hasCriminalRecord;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Verificação Oficial D Express
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Verifique uma{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                profissional
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insira o código único da profissional para confirmar a sua
              identidade, certificação e dados básicos registados na D Express.
            </p>
          </div>

          {/* Search Card */}
          <Card className="max-w-2xl mx-auto p-6 md:p-8 bg-card/80 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/5">
            <form onSubmit={buscar} className="space-y-4">
              <label className="block text-sm font-semibold text-foreground">
                Código da profissional
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Ex: 0000"
                    className="pl-12 h-14 text-base bg-background/60 border-primary/20 focus-visible:ring-primary tracking-wider"
                    autoComplete="off"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 px-8 font-semibold"
                  disabled={loading || !codigo.trim()}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      A verificar...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Verificar
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Resultado */}
      <section className="pb-24 -mt-8">
        <div className="container mx-auto px-4">
          {/* Estado vazio inicial */}
          {!pesquisou && !loading && (
            <div className="max-w-2xl mx-auto text-center text-muted-foreground text-sm">
              <p>Os resultados da verificação aparecerão aqui.</p>
            </div>
          )}

          {/* Não encontrado */}
          {naoEncontrado && (
            <Card className="max-w-2xl mx-auto p-10 text-center bg-card/80 backdrop-blur-xl border-destructive/30 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center mx-auto mb-6">
                <UserX className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Profissional não encontrada
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Não encontrámos nenhuma profissional registada com o código{" "}
                <span className="font-mono font-semibold text-foreground">
                  {codigo}
                </span>
                . Verifique se o código foi digitado corretamente.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setCodigo("");
                  setNaoEncontrado(false);
                  setPesquisou(false);
                }}
              >
                Tentar novamente
              </Button>
            </Card>
          )}

          {/* Resultado encontrado */}
          {resultado && (
            <Card className="max-w-3xl mx-auto overflow-hidden bg-card/80 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/10 animate-fade-in">
              {/* Header com gradiente */}
              <div className="relative p-8 md:p-10 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-b border-primary/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    {resultado.profileImage ? (
                      <img
                        src={resultado.profileImage}
                        alt={getNome(resultado)}
                        className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-xl"
                      />
                    ) : (
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-4xl md:text-5xl font-bold shadow-xl shadow-primary/30">
                        {getIniciais(resultado)}
                      </div>
                    )}
                    {isVerificado(resultado) && (
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary border-4 border-card flex items-center justify-center shadow-lg">
                        <BadgeCheck className="w-5 h-5 text-primary-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Info principal */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/40 border border-primary/20 mb-3">
                      <span className="text-xs font-mono font-semibold text-primary">
                        #{resultado.codeIdentifier}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {getNome(resultado)}
                    </h2>
                    <p className="text-base text-muted-foreground mb-4">
                      {getCargo(resultado)}
                    </p>

                    {/* Status verificação */}
                    {isVerificado(resultado) ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-primary">
                          Profissional Verificada
                        </span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
                        <ShieldAlert className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-bold text-destructive">
                          Não Verificada
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Disponibilidade */}
                  <div className="flex md:flex-col items-center md:items-end gap-2 md:gap-1">
                    <Badge
                      variant={resultado.isAvailable ? "default" : "secondary"}
                      className="text-xs px-3 py-1"
                    >
                      {resultado.isAvailable ? "Disponível" : "Indisponível"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {getGenero(resultado)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detalhes */}
              <div className="p-8 md:p-10 space-y-8">
                {/* Grid de info básicas */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <InfoItem
                    icon={<Briefcase className="w-5 h-5" />}
                    label="Nível de Experiência"
                    value={getExperiencia(resultado)}
                  />
                  <InfoItem
                    icon={<MapPin className="w-5 h-5" />}
                    label="Localização"
                    value={getLocalizacao(resultado)}
                  />
                  <InfoItem
                    icon={<Phone className="w-5 h-5" />}
                    label="Contacto"
                    value={getTelefone(resultado)}
                  />
                  <InfoItem
                    icon={<GraduationCap className="w-5 h-5" />}
                    label="Escolaridade"
                    value={getEscolaridade(resultado)}
                  />
                  <InfoItem
                    icon={<Heart className="w-5 h-5" />}
                    label="Estado Civil"
                    value={getEstadoCivil(resultado)}
                  />

                </div>

                {/* Idiomas */}
                {getIdiomas(resultado).length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Languages className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Idiomas</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getIdiomas(resultado).map((idioma) => (
                        <Badge
                          key={idioma}
                          variant="secondary"
                          className="px-3 py-1 text-sm bg-secondary/60"
                        >
                          {idioma}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Competências */}
                {getCompetencias(resultado).length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        Competências
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getCompetencias(resultado).map((c) => (
                        <Badge
                          key={c}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                        >
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cursos */}
                {getCursos(resultado).length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        Formações
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getCursos(resultado).map((curso) => (
                        <Badge
                          key={curso}
                          variant="outline"
                          className="px-3 py-1 text-sm border-primary/30 text-primary"
                        >
                          {curso}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificados */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Documentação
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <CertItem
                      label="Cert. Médico"
                      ok={resultado.hasMedicalCertificate}
                    />
                    <CertItem
                      label="Cert. Formação"
                      ok={resultado.hasTrainingCertificate}
                    />
                    <CertItem
                      label="Sem Antecedentes"
                      ok={!resultado.hasCriminalRecord}
                    />
                  </div>
                </div>

                {/* Aviso de segurança */}
                {isVerificado(resultado) && (
                  <div className="flex gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Esta profissional passou pelo processo de seleção e
                      verificação da D Express, incluindo validação de
                      identidade, antecedentes e referências.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-background/40 border border-border/50 hover:border-primary/30 transition-colors">
      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-sm font-semibold text-foreground truncate">{value}</p>
      </div>
    </div>
  );
}

function CertItem({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 p-3 rounded-lg border text-sm font-medium ${ok
        ? "bg-primary/5 border-primary/20 text-primary"
        : "bg-muted/30 border-border/50 text-muted-foreground"
        }`}
    >
      {ok ? (
        <BadgeCheck className="w-4 h-4 shrink-0" />
      ) : (
        <ShieldAlert className="w-4 h-4 shrink-0" />
      )}
      {label}
    </div>
  );
}