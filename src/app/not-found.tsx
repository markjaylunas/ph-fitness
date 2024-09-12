import BackButton from "@/components/ui/back-button";
import Link from "@/components/ui/link";
import { Button } from "@nextui-org/button";
import { IconHome } from "@tabler/icons-react";

export default async function NotFound() {
  return (
    <main className="container mx-auto max-w-lg min-h-screen space-y-8 p-8">
      <h1 className="mt-10 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        404 - Not Found
      </h1>
      <p>
        This page does not exist because it&apos;s part of a demo version of our
        website. Links to other pages are not yet active. If you have any
        questions or need further information, feel free to contact us.
      </p>

      <div className="flex justify-center gap-4 ">
        <BackButton>Get back</BackButton>
        <Link href="/">
          <Button
            color="primary"
            startContent={<IconHome className="size-4" />}
          >
            Get to home page
          </Button>
        </Link>
      </div>
    </main>
  );
}
