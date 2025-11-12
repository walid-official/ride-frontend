import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Bike, MapPinned, Repeat2, ShieldCheck, Users, Zap } from "lucide-react"

const features = [
  {
    icon: MapPinned,
    title: "Set Your Route",
    description: "Enter your pickup and destination to find available rides or passengers nearby.",
    image: "/images/route.jpg",
    alt: "set your route image",
  },
  {
    icon: Bike,
    title: "Match Instantly",
    description: "Our smart algorithm instantly pairs drivers and riders heading the same way.",
    image: "/images/driver.jpg",
    alt: "driver matching image",
  },
  {
    icon: Users,
    title: "Connect & Ride",
    description: "Communicate securely within the app, plan your ride, and travel together safely.",
    image: "/images/connect-rider.jpg",
    alt: "connect and ride image",
  },
  {
    icon: ShieldCheck,
    title: "Ride With Confidence",
    description: "All profiles are verified and rated by the community for a safe and trusted experience.",
    image: "/images/ride.jpg",
    alt: "ride with confidence image",
  },
  {
    icon: Repeat2,
    title: "Split Costs",
    description: "Easily share ride costs through secure payments — making travel affordable for everyone.",
    image: "/images/cost.jpg",
    alt: "cost splitting image",
  },
  {
    icon: Zap,
    title: "Save Time & Emissions",
    description: "Get where you're going faster while reducing carbon emissions. Smart mobility for all.",
    image: "/images/save.jpg",
    alt: "save time and emissions image",
  },
]

const Overview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <div className="w-full lg:py-36 sm:py-24 pt-10 pb-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="text-sm font-semibold text-primary">How It Works</span>
          </div>
          <h2 className="sm:text-6xl text-5xl md:leading-[1.1] font-bold tracking-[-0.02em] sm:max-w-2xl text-pretty mb-4">
            Experience Smarter Travel
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed sm:max-w-2xl">
            Discover a seamless, connected way to commute. Velocia connects riders and drivers for efficient,
            eco-friendly journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="group flex flex-col border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm pb-0 h-full"
            >
              <CardHeader className="relative pb-6 pt-8 px-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary/60 bg-primary/5 px-2.5 py-1 rounded-lg">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-foreground mb-3">{feature.title}</h4>
                <p className="text-base text-muted-foreground/80 leading-relaxed">{feature.description}</p>
              </CardHeader>

              {/* <CardContent className="mt-auto px-0 pb-0 overflow-hidden">
                <div className="relative h-56 bg-gradient-to-br from-primary/5 to-primary/10">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.alt || feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent> */}
            </Card>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">Ready to transform your commute?</h3>
            <p className="text-muted-foreground/80">
              Join thousands of riders and drivers already saving time and money with Velocia.
            </p>
          </div>
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overview
