export type IShowcaseSlide = {
  back: string | ImageData;
  title: string;
  showcase: string;
  text: string;
};

export type IFeetbackSlides = {
  text: string;
  image: string;
  name: string;
};

export type ICoupon = {
  value_off: number;
  type: string;
  title: string;
  description: string;
  monocrome: boolean;
};
