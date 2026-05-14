import { Badge } from '@/components/ui/badge'
import { Skill } from '@/types/skill'

type ProfessionalSkillsProps = {
  skills: { skill: Skill }[]
}

export function ProfessionalSkills({ skills }: ProfessionalSkillsProps) {
  if (skills.length === 0) return null

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground mb-4">Habilidades</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((item, index) => (
          <Badge key={index} variant="outline">
            {item.skill.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
