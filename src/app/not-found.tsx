import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-yellow">
      {/* Decorative animals */}
      <div className="pointer-events-none absolute top-12 right-8 md:right-16" aria-hidden="true">
        <Image
          src="/images/decorations/toucan.png"
          alt=""
          width={140}
          height={140}
          className="h-24 w-24 object-contain md:h-36 md:w-36"
        />
      </div>
      <div className="pointer-events-none absolute bottom-12 left-8 md:left-16" aria-hidden="true">
        <Image
          src="/images/decorations/koala.png"
          alt=""
          width={140}
          height={140}
          className="h-24 w-24 object-contain md:h-36 md:w-36"
        />
      </div>

      <div className="mx-auto max-w-lg px-4 text-center">
        <h1
          className="mb-2 font-heading text-brand-blue"
          style={{
            fontSize: "clamp(100px, 20vw, 180px)",
            textShadow: "6px 6px 0 rgba(26, 26, 26, 0.1)",
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2 className="mb-4 font-heading text-2xl font-bold text-brand-black md:text-3xl">
          Page not found
        </h2>
        <p className="mb-8 text-brand-black/70" style={{ fontWeight: 700 }}>
          Looks like this page wandered off into the bush. Let&apos;s get you back on track.
        </p>
        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    </section>
  );
}
