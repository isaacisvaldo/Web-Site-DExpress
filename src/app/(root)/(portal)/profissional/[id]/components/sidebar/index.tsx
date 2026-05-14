import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, HeartPulse } from 'lucide-react'
import { Profissional } from '@/types/professional'

type ProfessionalSidebarProps = {
  professional: Profissional
}

export function ProfessionalSidebar({
  professional,
}: ProfessionalSidebarProps) {
  const hasAdditionalInfo =
    professional.maritalStatus ||
    professional.hasChildren !== undefined ||
    professional.knownDiseases !== undefined

  if (!hasAdditionalInfo) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Informações Adicionais</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Estado Civil */}
        {professional.maritalStatus && (
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Estado Civil
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {professional.maritalStatus.label}
              </p>
            </div>
          </div>
        )}

        {/* Filhos */}
        {professional.hasChildren !== undefined && (
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Filhos</p>
              <p className="text-sm text-muted-foreground mt-1">
                {professional.hasChildren ? 'Sim' : 'Não'}
              </p>
            </div>
          </div>
        )}

        {/* Doenças Conhecidas */}
        {professional.knownDiseases !== undefined && (
          <div className="flex items-start gap-3">
            <HeartPulse className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Doenças Conhecidas
              </p>
              {professional.knownDiseases ? (
                <Badge variant="outline" className="mt-2">
                  Possui condições declaradas
                </Badge>
              ) : (
                <p className="text-sm text-muted-foreground mt-1">
                  Nenhuma condição declarada
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
