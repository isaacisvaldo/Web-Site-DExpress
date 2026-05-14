'use client'

import React from 'react'

import { links } from '@/config/links'

export function useNavItem() {
  const navItems = React.useMemo(
    () => [
      { label: 'Como Funciona', href: links.comoFunciona },
      { label: 'Contratar', href: links.buscar },
      { label: 'Trabalhe Connosco', href: links.trabalheConosco },
      { label: 'Planos', href: links.planos },
      { label: 'Sobre Nós', href: links.sobre },
      { label: 'Cadastra a Sua Empresa', href: links.paraEmpresas },
    ],
    [],
  )

  return navItems
}
