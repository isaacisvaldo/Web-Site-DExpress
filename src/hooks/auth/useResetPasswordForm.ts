
'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ResetPasswordRequest } from '@/services/auth/resetPasswordService'
import { resetPasswordAction } from '@/actions/auth'

export function useResetPassword() {
  const mutation = useMutation({
    mutationFn: async (data: ResetPasswordRequest) => {
      const result = await resetPasswordAction(data)

      if (!result.success) {
        toast.error(result.error?.message ?? 'Erro ao redefinir senha')
        return result
      }

      toast.success(result.data.message ?? 'Senha redefinida com sucesso')
      return result
    },
  })

  return {
    resetPassword: mutation.mutate,
    resetPasswordAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
