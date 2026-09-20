import { ArrowUpRight, Eye, MapPin, Shield } from 'lucide-react'
import FadeIn from './animation/FadeIn'

const points = [
  { icon: Shield, title: 'A physical presence', description: 'Guarding and patrol services help put security where it is needed.' },
  { icon: Eye, title: 'Awareness and monitoring', description: 'Surveillance supports visibility and reporting across a site.' },
  { icon: MapPin, title: 'The right setting', description: 'Discuss the property, event, or organisation you need to protect.' },
]

export function Why() {
  return (
    <section id='about' aria-labelledby='about-heading' className='bg-[#eae4d7] px-5 py-20 sm:px-8 lg:px-14 lg:py-28'>
      <div className='mx-auto grid max-w-[1328px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
        <FadeIn>
          <p className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#927139]'>About Lion of Judah Security</p>
          <h2 id='about-heading' className='max-w-lg text-[clamp(2.5rem,4.5vw,4.6rem)] leading-[1.07]'>Protection starts with understanding your needs.</h2>
          <p className='mt-7 max-w-lg text-base leading-7 text-[#52594f]'>Lion of Judah Security provides physical-security services for places where people live, work, and gather. Tell us what you need to protect so we can discuss an appropriate service.</p>
          <a href='tel:+2349031340508' className='mt-8 inline-flex items-center gap-2 border-b border-[#927139] pb-1 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa8748]'>Talk with us <ArrowUpRight size={16} aria-hidden='true' /></a>
        </FadeIn>
        <FadeIn className='border-t border-[#c5bca9]' delay={0.06}>
          {points.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className='grid grid-cols-[48px_1fr] gap-5 border-b border-[#c5bca9] py-7 sm:grid-cols-[64px_1fr] sm:gap-7'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full border border-[#ab8c56] text-[#927139] sm:h-14 sm:w-14'><Icon size={23} strokeWidth={1.6} aria-hidden='true' /></div>
              <div><span className='text-xs font-semibold tracking-[0.14em] text-[#927139]'>0{index + 1}</span><h3 className='mt-1 text-xl'>{title}</h3><p className='mt-2 max-w-md text-sm leading-6 text-[#5d6259]'>{description}</p></div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
