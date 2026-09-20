import { ArrowUpRight } from 'lucide-react'
import { Servicecard } from './ui/Servicecard'
import FadeIn from './animation/FadeIn'

const services = [
  { number: '01', imageSrc: '/images/serviceone.png', title: 'Manned Guarding', description: 'A security presence for homes, workplaces, and other properties.' },
  { number: '02', imageSrc: '/images/servicetwo.png', title: 'Mobile Patrol', description: 'Patrol services that help maintain a visible presence across a site.' },
  { number: '03', imageSrc: '/images/servicethree.png', title: 'Event Security', description: 'Security support for gatherings and special occasions.' },
  { number: '04', imageSrc: '/images/servicefour.png', title: 'Surveillance', description: 'Monitoring and reporting as part of a considered security plan.' },
]

export function Services() {
  return (
    <section id='services' aria-labelledby='services-heading' className='bg-[#f8f5ed] px-5 py-20 sm:px-8 lg:px-14 lg:py-28'>
      <div className='mx-auto max-w-[1328px]'>
        <FadeIn className='grid gap-7 border-b border-[#d5cdbc] pb-10 lg:grid-cols-[1fr_0.75fr] lg:items-end'>
          <div>
            <p className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#927139]'>What we do</p>
            <h2 id='services-heading' className='max-w-2xl text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.05]'>Security services for real-world needs.</h2>
          </div>
          <p className='max-w-xl text-base leading-7 text-[#5d6259] lg:pb-2'>From a steady on-site presence to support for a single event, explore the services Lion of Judah Security offers and speak with us about your setting.</p>
        </FadeIn>
        <div className='mt-7 grid gap-4 md:grid-cols-2'>
          {services.map((service, index) => <FadeIn key={service.number} delay={(index % 2) * 0.06}><Servicecard {...service} /></FadeIn>)}
        </div>
        <a href='tel:+2349031340508' className='mt-8 inline-flex items-center gap-2 border-b border-[#927139] pb-1 text-sm font-semibold text-[#252923] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa8748]'>Discuss a security assessment <ArrowUpRight size={16} aria-hidden='true' /></a>
      </div>
    </section>
  )
}
