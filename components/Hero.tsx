import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">Revolutionize your workflow with our cutting-edge solution. Boost productivity and streamline your processes today!</p>
      <div className="space-x-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}