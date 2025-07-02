import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <Container className="relative flex w-full flex-col items-center">
          <p className="mt-4 text-lg tracking-tight text-blue-900">
            <code>const is404 = true;</code>
          </p>
          <h1 className="font-display mt-4 text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Page introuvable
          </h1>
          <Button href="/" className="mt-8">
            Retourner au meetup
          </Button>
        </Container>
      </div>
    </Layout>
  );
}
