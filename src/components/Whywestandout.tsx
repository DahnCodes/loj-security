import Image from "next/image";
import FadeIn from "./animation/FadeIn";

export function Why() {
  return (
    <FadeIn>
    <section className="relative py-16 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-medium mb-6">
            Why We Stand Out
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Reliable, professional, and trusted security solutions designed to
            put your safety first. We deliver round-the-clock protection with
            trained personnel, proven systems, and unwavering vigilance.
          </p>

          <ul className="space-y-3">
            {[
              "24/7 Protection",
              "Integrity & Trust",
              "Advanced Surveillance",
              "Experienced Personnel",
              "Tailored Solutions",
            ].map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 bg-[#fff3e0] px-4 py-2 rounded-full font-bold max-w-[400px]"
              >
                <span className="w-2 h-2 bg-black rounded-full" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative w-full">
          <Image
            src="/images/security.png"
            alt="security"
            width={875}
            height={772}
            className="w-full h-auto object-contain"
          />

          {/* Decorative Line */}
          <div className="absolute bottom-0 right-0 w-full lg:w-auto">
            <Image
              src="/images/LINE.png"
              height={772}
              width={1482}
              alt="line"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}
