import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground">
              Powered by AI · Built for scale
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Create Viral Videos{' '}
              <span className="text-primary">In Minutes</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HeyGen turns your text and data into professional AI videos with realistic avatars.
              No camera, no crew — just results.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start for free <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">
                  <Play className="mr-2 size-4" /> Watch demo
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required · Free tier available
            </p>
          </div>

          {/* Right: graphic */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Gradient card mockup */}
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border shadow-2xl overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Play className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="h-3 w-28 rounded bg-foreground/20" />
                      <div className="mt-1 h-2 w-16 rounded bg-foreground/10" />
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center">
                    <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center ring-4 ring-primary/10">
                      <Play className="size-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded bg-foreground/10" />
                    <div className="h-2.5 w-4/5 rounded bg-foreground/10" />
                    <div className="h-2.5 w-3/5 rounded bg-foreground/10" />
                  </div>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-8 -right-8 size-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-primary/5 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
