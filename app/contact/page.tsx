import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </main>
  );
}