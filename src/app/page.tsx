import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center bg-zinc-950">
      <div className="flex w-full max-w-lg flex-col gap-5 text-center">
        <h1 className="text-4xl font-semibold text-stone-50">The best journal app, period.</h1>
        <p className="text-white/80">
          This is the best app for tracking your journal entries, All you have to be honest
        </p>

        <Link
          href="/journal"
          className="mx-auto w-fit"
        >
          <Button className="bg-blue-700 hover:bg-blue-800">Get Started</Button>
        </Link>
      </div>
    </div>
  )
}
