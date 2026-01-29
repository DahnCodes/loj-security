// import FadeIn from './animation/FadeIn'
"use client"
import Button from './ui/Button'

export function HeroSection() {
  const phonenumber = '+2349031340508'

  const handleCall = () => {
    window.location.href = `tel:${phonenumber}`
  }
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-4 py-20 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="border border-b-[#998259] rounded-[100px] lg:p-2.5 text-center mb-2 backdrop-blur-3xl">
          Nigeria&apos;s number one security agency
        </span>
        <h1 className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Dependable Security For Places & People That Matter.
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Delivering dependable security services through disciplined personnel,
          proven systems, and a commitment to protecting what matters most—every
          day, around the clock.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-6">
          <Button
            variant="primary"
            className="w-full sm:w-50"
            onClickAction={handleCall}
          >
            Get a Quote
          </Button>

          <Button variant="outline" className="w-full sm:w-50">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
