import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"

export function PlaceholderHeroSection() {
  return (
    <section className="site-container grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
      <div>
        <PlaceholderBlock className="h-7 w-44 rounded-full" />
        <div className="mt-5 space-y-4">
          <PlaceholderBlock className="h-14 w-full max-w-xl" />
          <PlaceholderBlock className="h-14 w-full max-w-lg" />
        </div>
        <div className="mt-6 space-y-3">
          <PlaceholderBlock className="h-4 w-full max-w-lg rounded-full" />
          <PlaceholderBlock className="h-4 w-full max-w-md rounded-full" />
        </div>
        <div className="mt-8 flex gap-4">
          <PlaceholderBlock className="h-11 w-40" />
          <PlaceholderBlock className="h-11 w-32" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="grid place-items-center gap-3">
              <PlaceholderBlock className="size-10 rounded-full" />
              <PlaceholderBlock className="h-3 w-24 rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[430px]">
        <PlaceholderBlock className="absolute inset-6 rounded-[45%]" />
        <PlaceholderBlock className="relative z-10 mx-auto mt-14 h-72 w-full max-w-xl rounded-[45%]" />
        <SiteCard className="absolute bottom-10 left-4 z-20 w-48 p-4">
          <PlaceholderBlock className="h-4 w-32 rounded-full" />
          <PlaceholderBlock className="mt-3 h-3 w-full rounded-full" />
          <PlaceholderBlock className="mt-2 h-3 w-28 rounded-full" />
        </SiteCard>
      </div>
    </section>
  )
}
