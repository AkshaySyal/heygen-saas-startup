import { Video, Mic, Globe, Zap, BarChart3, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    icon: Video,
    title: 'AI Video Generation',
    description: 'Turn scripts into professional videos with hyper-realistic AI avatars in over 100 languages.',
  },
  {
    icon: Mic,
    title: 'Voice Cloning',
    description: 'Clone any voice in seconds. Maintain your brand voice across every piece of content.',
  },
  {
    icon: Globe,
    title: 'Instant Translation',
    description: 'Translate and localize videos automatically. Reach global audiences without reshooting.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    description: 'Generate a full video in under 2 minutes. Iterate and publish at the speed of thought.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Track engagement, drop-off rates, and performance across all your video content.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with role-based access, SSO, and private cloud deployment options.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to scale video content
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From creation to distribution, HeyGen handles every step of the AI video workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
