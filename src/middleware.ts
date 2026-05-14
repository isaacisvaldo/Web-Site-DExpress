import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { D_EXPRESS } from './constants'
import { links } from './config/links'

const PUBLIC_REGEX = [
  /^\/$/,
  /^\/login$/,
  /^\/cadastrar$/,
  /^\/profissional(\/.*)?$/,
  /^\/pergunta-frequente$/,
  /^\/politica-de-privacidade$/,
  /^\/verificar-profissional$/,
  /^\/termos-de-uso$/,
  /^\/recuperar-senha$/,
  /^\/recuperar-senha\/redefinir$/,
]

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_REGEX.some((regex) => regex.test(pathname))
}

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get(D_EXPRESS.refreshToken)?.value
  const accessToken = req.cookies.get(D_EXPRESS.accessToken)?.value
  const { pathname } = req.nextUrl

  function buildPublicUrl(path: string) {
    return new URL(path, req.nextUrl)
  }

  if (
    refreshToken &&
    accessToken &&
    (pathname === buildPublicUrl(links.login).pathname ||
      pathname === buildPublicUrl(links.cadastrar).pathname)
  ) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!refreshToken && !accessToken && !isPublicRoute(pathname)) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)'],
}
