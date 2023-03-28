import React from 'react';

import ShowcaseSlideView from './ShowcaseSlide.view';

type Props = {
  isLeft?: boolean;
  title: string;
  showcase: string;
  text: string;
  className?: string;
  back?: string | ImageData;
};

const ShowcaseSlide: React.FC<Props> = (props: Props) => {
  return (
    <ShowcaseSlideView
      isLeft={props.isLeft}
      title={props.title}
      showcase={props.showcase}
      text={props.text}
      back={props.back}
      className={props.className}
    ></ShowcaseSlideView>
  );
};

export default ShowcaseSlide;
