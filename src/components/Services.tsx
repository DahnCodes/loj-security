import Button from "./ui/Button"
import { Servicecard } from "./ui/Servicecard"

export function Services() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[100px] py-16">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <span className="bg-[#27A651] w-fit rounded-full px-6 py-2 text-white text-sm">
            • Our Services
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[60px] leading-tight font-semibold">
            Services we provide
          </h1>

          <p className="text-gray-600 leading-relaxed">
            At Lion of Judah Security Company, we deliver professional security
            solutions for homes, businesses, and events. Our trained personnel
            and modern surveillance tools ensure reliable protection, peace of
            mind, and safety around the clock. Keeping what matters most safe
            with vigilance and integrity.
          </p>

          <div>
            <Button variant="outline" className="w-full sm:w-auto">
              Book a Security Assessment
            </Button>
          </div>
        </div>

        {/* RIGHT SERVICES */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-6">
          <Servicecard
            imageSrc="/images/serviceone.png"
            title="Manned Guarding"
            description="Professional, well-trained security personnel providing 24/7 protection for homes, offices, churches, and commercial properties."
          />

          <Servicecard
            imageSrc="/images/servicetwo.png"
            title="Mobile Patrol"
            description="Routine patrols to deter threats, detect suspicious activity, and respond quickly to incidents."
          />

          <Servicecard
            imageSrc="/images/servicethree.png"
            title="Event Security"
            description="Crowd control and safety for events, gatherings, and special occasions."
          />

          <Servicecard
            imageSrc="/images/servicefour.png"
            title="Surveillance"
            description="Monitoring and reporting through advanced surveillance and security systems."
          />
        </div>

      </div>
    </section>
  )
}
