"use client";

import { PACKAGE_LIST } from "@/lib/constants";
import { Package } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { SectionTitle } from "./ui/section-title";

export default function Pricing() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 py-8">
      <SectionTitle>Pricing</SectionTitle>

      <p className="text-lg text-foreground-400 mt-4">Our Packages List</p>

      <div className="flex w-full flex-col justify-center items-center max-w-screen-xl">
        <Tabs
          aria-label="Packages"
          color="primary"
          variant="bordered"
          defaultSelectedKey="monthly"
        >
          <Tab key="monthly" title="Monthly" className="w-full">
            <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-4 px-4">
              {PACKAGE_LIST.map((item) => (
                <li className="w-full sm:w-fit" key={item.name}>
                  <PackageCard item={item} pricing="monthly" />
                </li>
              ))}
            </ul>
          </Tab>
          <Tab key="yearly" title="Yearly" className="w-full">
            <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-4 px-4">
              {PACKAGE_LIST.map((item) => (
                <li className="w-full sm:w-fit" key={item.name}>
                  <PackageCard item={item} pricing="yearly" />
                </li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

const PackageCard = ({
  item,
  pricing,
}: {
  item: Package;
  pricing: "monthly" | "yearly";
}) => {
  const monthly = item.pricing.monthly;
  const yearly = item.pricing.yearly;

  return (
    <Card
      classNames={{
        base: item.bestOffer ? "px-4 py-8 bg-primary-600 w-full" : "p-4 w-full",
      }}
    >
      <CardHeader className="flex flex-col items-start gap-2">
        <p className={cn(!item.bestOffer && "text-primary-300")}>{item.name}</p>
        {pricing === "monthly" && (
          <p className="text-4xl">
            {monthly.currency}
            {monthly.price}
          </p>
        )}
        {pricing === "yearly" && (
          <p className="text-4xl">
            {yearly.currency}
            {yearly.price}
          </p>
        )}
        <p
          className={cn(
            item.bestOffer ? "text-foreground-300" : "text-foreground-500"
          )}
        >
          {pricing === "monthly" ? monthly.description : yearly.description}
        </p>
      </CardHeader>

      <CardBody>
        <ul className="flex flex-col gap-4">
          {item.features.map((feature) => (
            <li className="flex gap-3" key={feature}>
              <IconCircleCheckFilled />
              {feature}
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter>
        <Button
          color={!item.bestOffer ? "primary" : undefined}
          variant={item.bestOffer ? "shadow" : undefined}
          fullWidth
        >
          Register now
        </Button>
      </CardFooter>
      {item.bestOffer && (
        <div className="absolute top-3/1 left-1/3 rotate-45  bg-white w-full h-8 flex items-center justify-center shadow-lg">
          <p className="text-black font-bold text-center">Best Offer</p>
        </div>
      )}
    </Card>
  );
};
