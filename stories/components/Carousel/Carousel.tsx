import { Carousel as AntCarousel, CarouselProps } from "antd";
import './carousel.css'
import { Ref, forwardRef } from "react";
import { CarouselRef } from "antd/es/carousel";

export const Carousel = forwardRef(({ children, ...props }: CarouselProps, ref: any) => {
  return <AntCarousel {...props} ref={ref}>{children}</AntCarousel>;
});

Carousel.displayName = 'Carousel'