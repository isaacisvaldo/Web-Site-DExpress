'use server'

import { listProfessionalByCodeService } from '@/services/professionals/get-profissional-by-code'
import { listPaginatedProfessionalService } from '@/services/professionals/listPaginatedProfessionalsService'
import { FiltersProfessional } from '@/types/professional'

export async function listPaginatedProfessionalAction(filters?: FiltersProfessional) {
  return listPaginatedProfessionalService(filters)
}
export async function buscarProfissionalAction(code: string) {
  return await listProfessionalByCodeService(code)
}