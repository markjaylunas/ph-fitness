"use client";

import { Button } from "@nextui-org/react";
import { IconArrowBack } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function BackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <Button
      onClick={onBack}
      className="flex gap-1"
      startContent={<IconArrowBack className="size-4" />}
    >
      {children}
    </Button>
  );
}
