import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import FadeIn from './animation/FadeIn'

export function HeroSection() {
  return (
    <section id='home' aria-labelledby='hero-heading' className='relative overflow-hidden bg-[#202820] text-[#f8f5ed]'>
      <div className='mx-auto grid min-h-[620px] max-w-[1440px] lg:grid-cols-[1.1fr_0.9fr]'>
        <FadeIn className='relative z-10 flex flex-col justify-center px-5 pb-14 pt-20 sm:px-8 lg:px-14 lg:py-24'>
          <div className='mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b877]'>
            Physical security services</div>
          <h1 id='hero-heading' className='max-w-[760px] text-[clamp(2.8rem,6vw,5.9rem)] leading-[1.03]'>Security for the places and people that matter.</h1>
          <p className='mt-7 max-w-xl text-base leading-7 text-[#d7d8ce] sm:text-lg'>Lion of Judah Security provides guarding, patrol, event security, and surveillance services for homes, businesses, and gatherings.</p>
          <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a href='tel:+2349031340508' className='inline-flex min-h-13 items-center justify-center gap-3 bg-[#c4a160] px-7 py-4 text-sm font-bold text-[#202820] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4a160]'>Call to discuss your needs <ArrowUpRight size={17} aria-hidden='true' /></a>
            <Link href='#services' className='inline-flex min-h-13 items-center justify-center gap-3 border border-[#8e998a] px-7 py-4 text-sm font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4a160]'>Explore services <ArrowDownRight size={17} aria-hidden='true' /></Link>
          </div>
          <p className='mt-9 text-sm text-[#aeb7a9]'>Speak with us directly: <a className='font-semibold text-[#f8f5ed] underline decoration-[#c4a160] underline-offset-4' href='tel:+2349031340508'>+234 903 134 0508</a></p>
        </FadeIn>
        <div className='relative min-h-[390px] overflow-hidden bg-[#b8ad92] lg:min-h-full'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,#d2c9b5_0%,#a99b7c_63%,#82775f_100%)]' />
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#202820]/50 to-transparent' />
          <Image src='/images/security.png' alt='Illustrative photograph of security personnel with radios' width={875} height={772} priority className='absolute bottom-0 left-1/2 h-[95%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom sm:h-full' />
          <div className='absolute bottom-5 left-5 right-5 border border-white/30 bg-[#202820]/85 px-5 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#f8f5ed] backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-auto'>A visible presence. A considered approach.</div>
        </div>
      </div>
    </section>
  )
}
