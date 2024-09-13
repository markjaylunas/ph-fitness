import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

export default async function Providers({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
