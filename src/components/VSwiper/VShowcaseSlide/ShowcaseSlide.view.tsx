import React from 'react';

import VButtonLink from 'components/VButtonLink/VButtonLink';
import SectionContainer from 'Containers/SectionContainer/SectionContainer';

import classes from './ShowcaseSlide.module.scss';

type Props = {
  isLeft?: boolean;
  title: string;
  showcase: string;
  text: string;
  className?: string;
  back?: string | ImageData;
};

const ShowcaseSlideView: React.FC<Props> = (props: Props) => {
  return (
    <SectionContainer style={{ backgroundImage: `url(${props.back})` }} className={`${classes['wrapper']} ${props.className ?? ''}`}>
      <div className={`${classes['inner']} ${props.isLeft ? classes['left'] : ''}`}>
        <h4 className={classes['title']}>{props.title}</h4>
        <h3 className={classes['showcase']}>{props.showcase}</h3>
        <p className={classes['text']}>{props.text}</p>
        <VButtonLink className={classes['button']} href="/services">
          SCHEDULE SERVICE
        </VButtonLink>
      </div>
    </SectionContainer>
  );
};

export default ShowcaseSlideView;
