'use client'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { useNavItem } from '../navbar/useNavItem'
import { Logo } from '../logo'

import { Newsletter } from './newsletter'

import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/useScrollTo'
import { links } from '@/config/links'
import { contacts } from '@/config/contacts'

export function Footer() {
  const pathname = usePathname()
  const navItems = useNavItem()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent border-t">
      <div className="max-w-[120rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Conectando empregadores a profissionais domésticas qualificadas, com segurança e
              eficiência.
            </p>
            <div className="flex space-x-2">
              <Button
                disabled
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                disabled
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                disabled
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                disabled
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Navegação</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <React.Fragment key={`MenuItem-${item.href}-${item.label}`}>
                  {pathname === '/' ? (
                    <ButtonNavigation key={item.label} href={item.href} label={item.label} />
                  ) : (
                    <CustomLink key={item.label} href={item.href} label={item.label} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Suporte</h3>
            <div className="space-y-3">
              {/* <Link
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                href={links.buscar}
              >
                Central de Ajuda
              </Link> */}
              <Link
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                href={links.faq}
              >
                Perguntas Frequentes
              </Link>
              <Link
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                href={links.termosUso}
              >
                Termos de Uso
              </Link>
              <Link
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                href={links.politicaPrivacidade}
              >
                Política de Privacidade
              </Link>
                <Link
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                href={links.verificar}
              >
                Verificar Profissional
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 break-all"
                  href={`mailto:${contacts.geralEmail}`}
                >
                  {contacts.geralEmail}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  href={`tel:${contacts.geralPhoneNumber.number}`}
                >
                  {contacts.geralPhoneNumber.label}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Luanda, Angola</span>
              </div>
              <Newsletter />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} D-Express. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="text-center sm:text-right">
                Feito com <span className="text-red-500 animate-pulse">❤️</span> para conectar
                pessoas
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

type NavigationProps = {
  label: string
  href: string
}
function ButtonNavigation({ href, label }: NavigationProps) {
  const scrollToSection = useScrollTo()

  return (
    <button
      className="block text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200 text-left"
      onClick={() => scrollToSection(href)}
    >
      {label}
    </button>
  )
}

function CustomLink({ href, label }: NavigationProps) {
  const scrollToSection = useScrollTo()

  return (
    <Link
      className="block text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200 text-left"
      href={`/#${href}`}
      onClick={() => scrollToSection(href)}
    >
      {label}
    </Link>
  )
}
