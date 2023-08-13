import { Carousel as AntCarousel, CarouselProps } from "antd";
import './carousel.css'

export const Carousel = ({ children, ...props }: CarouselProps) => {
  return <AntCarousel {...props}>{children}</AntCarousel>;
};
