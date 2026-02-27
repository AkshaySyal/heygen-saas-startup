import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for exploring AI video creation.',
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
    features: [
      '5 videos per month',
      'Up to 1 minute per video',
      '3 AI avatars',
      'Standard quality export',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For creators and small teams who need more.',
    cta: 'Start Pro trial',
    href: '/signup',
    highlighted: true,
    features: [
      'Unlimited videos',
      'Up to 30 minutes per video',
      '100+ AI avatars',
      '4K quality export',
      'Voice cloning (5 voices)',
      'Instant translation (30 languages)',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Tailored solutions for large organizations.',
    cta: 'Contact sales',
    href: 'mailto:sales@heygen.com',
    highlighted: false,
    features: [
      'Everything in Pro',
      'Unlimited voice cloning',
      '100+ languages',
      'Private cloud deployment',
      'SSO & SAML',
      'SLA guarantee',
      'Dedicated account manager',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                'flex flex-col',
                tier.highlighted && 'border-primary shadow-lg ring-1 ring-primary'
              )}
            >
              {tier.highlighted && (
                <div className="rounded-t-xl bg-primary px-6 py-1.5 text-center text-xs font-semibold text-primary-foreground">
                  Most popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/ {tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
