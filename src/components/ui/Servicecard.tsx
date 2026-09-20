import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

type ServicecardProps = {
  number: string
  imageSrc: string
  title: string
  description: string
}

export function Servicecard({ number, imageSrc, title, description }: ServicecardProps) {
  return (
    <article className='group flex min-h-[235px] flex-col justify-between border border-[#ded7c8] bg-white p-6 sm:p-8'>
      <div className='flex items-start justify-between gap-4'>
        <span className='text-xs font-semibold tracking-[0.16em] text-[#927139]'>{number} / SERVICE</span>
        <Image src={imageSrc} alt='' width={66} height={66} className='h-[66px] w-[66px]' />
      </div>
      <div className='mt-8'>
        <h3 className='text-2xl tracking-[-0.025em]'>{title}</h3>
        <div className='mt-3 flex items-end justify-between gap-4'>
          <p className='max-w-sm text-sm leading-6 text-[#5d6259]'>{description}</p>
          <ArrowUpRight size={19} aria-hidden='true' className='shrink-0 text-[#927139]' />
        </div>
      </div>
    </article>
  )
}
