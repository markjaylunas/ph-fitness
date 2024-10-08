"use client";

import { BENTO_LIST } from "@/lib/constants";
import { BentoCard } from "@/lib/types";
import {
  Card,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { SectionTitle } from "./ui/section-title";

export default function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [card, setCard] = useState<BentoCard | null>(null);

  const handleOpenCard = (item: BentoCard) => {
    setCard(item);
    onOpen();
  };

  return (
    <section className="flex flex-col justify-center items-center gap-8">
      <SectionTitle>Our Gallery</SectionTitle>

      <div className="max-w-screen-xl gap-2 sm:gap-4 grid grid-cols-12 px-8">
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onClick={() => handleOpenCard(BENTO_LIST[0])}
        >
          <CustomCardHeader
            title={BENTO_LIST[0].title}
            description={BENTO_LIST[0].description}
          />

          <Image
            alt={BENTO_LIST[0].title}
            src={BENTO_LIST[0].image}
            classNames={{
              wrapper: "z-0 flex items-center",
              img: "h-auto -mt-24 max-w-full object-cover brightness-75",
            }}
            isZoomed
          />
        </Card>

        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onClick={() => handleOpenCard(BENTO_LIST[1])}
        >
          <CustomCardHeader
            title={BENTO_LIST[1].title}
            description={BENTO_LIST[1].description}
          />

          <Image
            alt={BENTO_LIST[1].title}
            src={BENTO_LIST[1].image}
            classNames={{
              wrapper: "z-0 flex items-center",
              img: "h-auto -mt-24 max-w-full object-cover brightness-75",
            }}
            isZoomed
          />
        </Card>

        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable={true}
          onClick={() => handleOpenCard(BENTO_LIST[2])}
        >
          <CustomCardHeader
            title={BENTO_LIST[2].title}
            description={BENTO_LIST[2].description}
          />

          <Image
            alt={BENTO_LIST[2].title}
            src={BENTO_LIST[2].image}
            classNames={{
              wrapper: "z-0 flex items-center",
              img: "h-auto -mt-32 max-w-full object-cover brightness-75",
            }}
            isZoomed
          />
        </Card>

        <Card
          className="w-full h-[300px] col-span-12 sm:col-span-5"
          isPressable
          onClick={() => handleOpenCard(BENTO_LIST[3])}
        >
          <CustomCardHeader
            title={BENTO_LIST[3].title}
            description={BENTO_LIST[3].description}
          />

          <Image
            alt={BENTO_LIST[3].title}
            src={BENTO_LIST[3].image}
            classNames={{
              wrapper: "z-0 flex items-center",
              img: "max-w-full object-cover brightness-75",
            }}
            isZoomed
          />
        </Card>

        <Card
          className="w-full h-[300px] col-span-12 sm:col-span-7"
          isPressable
          onClick={() => handleOpenCard(BENTO_LIST[4])}
        >
          <CustomCardHeader
            title={BENTO_LIST[4].title}
            description={BENTO_LIST[4].description}
          />

          <Image
            alt={BENTO_LIST[4].title}
            src={BENTO_LIST[4].image}
            classNames={{
              wrapper: "z-0 flex items-center",
              img: "max-w-full object-cover brightness-75",
            }}
            isZoomed
          />
        </Card>

        <Card
          className="w-full h-[300px] col-span-12"
          isPressable
          onClick={() => handleOpenCard(BENTO_LIST[5])}
        >
          <CustomCardHeader
            title={BENTO_LIST[5].title}
            description={BENTO_LIST[5].description}
          />

          <Image
            alt={BENTO_LIST[5].title}
            src={BENTO_LIST[5].image}
            classNames={{
              wrapper: "z-0 flex items-center",
              img: "h-auto -mt-72 max-w-full object-cover brightness-75",
            }}
            isZoomed
          />
        </Card>

        <Modal size="full" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {card?.title}
              </p>
              <h4 className="text-white font-medium text-large">
                {card?.description}
              </h4>
            </ModalHeader>
            <ModalBody className="max-h-[90vh]">
              <div className="overflow-auto">
                <Image
                  alt={card?.title}
                  className="w-full h-full object-contain brightness-75"
                  src={card?.image || ""}
                />
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
}

const CustomCardHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
      <h4 className="text-white font-medium text-large text-left">
        {description}
      </h4>
    </CardHeader>
  );
};
