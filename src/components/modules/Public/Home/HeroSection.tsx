// import { useState } from "react"
// import { Play, Zap } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const HeroSection = () => {
//    const [isHovering, setIsHovering] = useState(false);

//  return (
//    <section className="relative min-h-screen w-full overflow-hidden bg-primary">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url(/images/drive.jpg)",
//             backgroundAttachment: "fixed",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-transparent" />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
//         <div className="flex min-h-screen items-center">
//           {/* Left Content - Full Width */}
//           <div className="flex flex-col justify-center space-y-8 py-20 lg:py-0 max-w-2xl">
//             {/* Badge */}
//             <div className="inline-flex tracking-tight tight w-fit items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
//               <Zap className="h-4 w-4 text-accent" />
//               <span className="text-sm font-semibold text-accent">Premium Ride Experience</span>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-4">
//               <h1 className="text-5xl tracking-tight tight w-fit font-bold leading-tight text-accent sm:text-6xl lg:text-7xl">
//                 Your Journey,
//                 <span className="block text-accent">Our Priority</span>
//               </h1>
//               <p className="max-w-lg text-lg tracking-tight tight  text-accent">
//                 Experience the future of urban mobility with our premium ride-sharing service. Safe, reliable, and
//                 always on time.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//               <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold">
//                 Get Started Now
//               </Button>
//               <button
//                 className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-6 py-3 text-white transition-all hover:border-accent hover:bg-accent/10"
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
//                   <Play className="h-5 w-5 text-accent fill-accent" />
//                 </div>
//                 <span className="font-semibold tracking-tight tight  text-accent">Watch Demo</span>
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 pt-8">
//               <div className="space-y-2">
//                 <p className="text-3xl font-bold text-accent">50K+</p>
//                 <p className="text-sm  tracking-tight tight  text-accent">Active Riders</p>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-3xl font-bold text-accent">4.9★</p>
//                 <p className="text-sm  tracking-tight tight  text-accent">Rating</p>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-3xl font-bold text-accent">24/7</p>
//                 <p className="text-sm tracking-tight tight  text-accent">Support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
//       <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
//     </section>
//  )
// };

// export default HeroSection;


"use client";

import useTheme from "@/hooks/useTheme";
import { useMemo } from "react";

export default function HeroSection() {
  const { theme } = useTheme();

  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      <div className="relative isolate overflow-hidden pt-14">
        {/* 🖼️ Background image */}
        <img
          alt="Ride background"
          src="/images/drive.jpg"
          className={`absolute inset-0 -z-10 w-full h-full object-cover ${
            isDark ? "opacity-40" : "opacity-20"
          }`}
        />

        {/* 🌓 Lighter background overlay */}
        <div
          className={`absolute inset-0 -z-10 transition-colors duration-500 ${
            isDark ? "bg-black/40" : "bg-white/40"
          }`}
        />

        {/* ✨ Hero Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-32">
            <div className="text-center">
              <h1
                className={`text-5xl font-semibold tracking-tight sm:text-7xl ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Smarter Rides, Better Journeys
              </h1>
              <p
                className={`mt-8 text-lg font-medium sm:text-xl leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Experience effortless commuting — flexible rides, real-time tracking,
                and reliable connections for every traveler.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 ${
                    isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className={`text-sm font-semibold ${
                    isDark ? "text-gray-200 hover:text-white" : "text-gray-900"
                  }`}
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 🌫 Optional blurred shapes (lighter tone) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className={`relative left-[calc(50%+3rem)] w-[36rem] -translate-x-1/2 aspect-[1155/678] ${
              isDark
                ? "bg-gradient-to-tr from-gray-800 to-gray-700 opacity-15"
                : "bg-gradient-to-tr from-gray-200 to-gray-100 opacity-15"
            } sm:left-[calc(50%+36rem)] sm:w-[72rem]`}
          />
        </div>
      </div>
    </div>
  );
}
