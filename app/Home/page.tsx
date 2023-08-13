import { Carousel } from "@components/Carousel/Carousel";
import { CarouselDefault } from "@components/Carousel/Carousel.stories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopit",
  description: "Ecommerce website",
};

const home = () => {
  return (
    <>
      <Carousel {...CarouselDefault.args}/>
      <p>Best Selling Row</p>
      <p>New Items Row</p>
      <footer>Footer</footer>
    </>
  );
};

export default home;
