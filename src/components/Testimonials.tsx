import FadeIn from "./animation/FadeIn";

export default function Testimonials() {
  return (
    <FadeIn>
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Protection That Speaks for Itself
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Real feedback from clients who trust us with their safety and assets.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 24/7 Card */}
          <div className="bg-[#FFF5E5] rounded-2xl p-10 text-left flex flex-col justify-between min-h-[300px] lg:h-153.5">
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="font-semibold mb-4">Coverage</p>
              <p className="text-gray-700">
                Reliable protection day and night. Lion of Judah Security has
                been consistent, professional, and dependable. Their guards are
                disciplined and always alert.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <div>
                <p className="font-semibold text-sm">A.I. Anyanwu</p>
                {/* <p className="text-xs text-gray-600">
                  Security Officer, Payout Nigeria
                </p> */}
              </div>
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-[#FFF5E5] rounded-2xl p-10 text-left min-h-[300px] lg:h-90.25">
            <h3 className="font-semibold mb-2">
              <span className="font-bold">QUICK</span> Response
            </h3>
            <p className="text-gray-700 mb-6">
              Their response time is impressive. Anytime there’s an issue, their
              team handles it swiftly and professionally.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div>
                <p className="font-semibold text-sm">Ebuka</p>
                {/* <p className="text-xs text-gray-600">
                  Security Officer, Payout Nigeria
                </p> */}
              </div>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-50 min-h-[120px] lg:h-62.7">
              <div className="border rounded-xl p-4 text-sm">
                “Their patrol team is proactive and well trained. We’ve had zero
                incidents since engaging them.”
              </div>

              <div className="bg-[#2AA44F] text-white rounded-xl p-4 text-sm">
                “Their patrol team is proactive and well trained. We’ve had zero
                incidents since engaging them.”
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="mx-auto bg-[#EAD7B7] text-sm px-6 py-3 rounded-full hover:opacity-80 transition mt-10">
            View all reviews →
          </button>
        </div>
      </div>
    </section>

    </FadeIn>
  );
}
