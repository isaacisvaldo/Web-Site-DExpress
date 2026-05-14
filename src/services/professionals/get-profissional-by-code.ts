import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { type Profissional } from '@/types/professional'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listProfessionalByCodeService(
    code: string,
): Promise<ServiceResponse<Profissional>> {
    try {
        const response = await api(`professionals/public/by-code/${code}`)
        const result = await response.json<Profissional>()

        return {
            success: true,
            data: result,
        }
    } catch (error) {
        return {
            success: false,
            error: handleApiError(error),
        }
    }
}