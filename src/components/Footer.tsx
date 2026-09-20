import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import FadeIn from './animation/FadeIn'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About us', href: '#about' },
]

export default function Footer() {
  return (
    <footer id='contact' className='bg-[#202820] text-[#f8f5ed]'>
      <div className='mx-auto max-w-[1440px] px-5 pt-20 sm:px-8 lg:px-14 lg:pt-28'>
        <div className='grid gap-10 border-b border-white/20 pb-20 lg:grid-cols-[1fr_auto] lg:items-end'>
          <FadeIn>
            <p className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#c4a160]'>Contact</p>
            <h2 className='max-w-3xl text-[clamp(2.5rem,5vw,5rem)] leading-[1.07]'>Let’s talk about what you need to protect.</h2>
          </FadeIn>
          <a href='tel:+2349031340508' className='inline-flex min-h-14 items-center justify-center gap-3 bg-[#c4a160] px-7 py-4 text-sm font-bold text-[#202820] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4a160]'><Phone size={17} aria-hidden='true' /> Call +234 903 134 0508 <ArrowUpRight size={17} aria-hidden='true' /></a>
        </div>
        <div className='grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto]'>
          <div><Link href='#home' aria-label='Lion of Judah Security, back to top' className='inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4a160]'><Image src='/images/lojlogo.png' alt='Lion of Judah Security' width={160} height={54} className='h-auto w-40 brightness-0 invert' /></Link><p className='mt-4 max-w-sm text-sm leading-6 text-[#bec8bb]'>Guarding, patrol, event security, and surveillance services.</p></div>
          <nav aria-label='Footer navigation' className='flex flex-wrap items-start gap-x-8 gap-y-4 text-sm font-medium'>{links.map((link) => <Link key={link.href} href={link.href} className='hover:text-[#c4a160] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4a160]'>{link.label}</Link>)}</nav>
        </div>
        <div className='flex items-center justify-between gap-2 border-t border-white/20 py-6 text-[10px] sm:text-xs text-[#aeb7a9]'><p>© {new Date().getFullYear()} Lion of Judah Security.</p><p>Vikstanli Multimedia</p></div>
      </div>
    </footer>
  )
}
