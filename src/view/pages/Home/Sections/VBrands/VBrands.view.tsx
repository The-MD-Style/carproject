import React from 'react';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VAutoSection from 'components/VAutoSection/VAutoSection';
import VButton from 'components/VButton/VButton';
import VTitle from 'components/VTitle/VTitle';

import classes from './VBrands.module.scss';
import { ICars } from 'models/home.model';

type Props = {
  carsFillData: ICars[];
  value: boolean;
  handleState: () => void;
};

const VBrandsView: React.FC<Props> = (props: Props) => {
  return (
    <SectionContainer className={classes['autoSection']}>
      <VTitle title={'We Repair All Makes of Automobiles'}>We work with all makes and models of vehicles</VTitle>
      <div className={classes['content']}>
        {props.carsFillData.slice(0, 7).map((item: ICars) => (
          <VAutoSection key={item.photo} image={item.photo}></VAutoSection>
        ))}
        {props.value ? (
          <div className={classes['content']}>
            {props.carsFillData.slice(7, props.carsFillData.length).map((item: ICars) => (
              <VAutoSection key={item.photo} image={item.photo}></VAutoSection>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
      <VButton type={'button'} onClick={props.handleState} className={classes['button']}>
        {!props.value ? '+ View All Makes' : ' - Show Less Makes'}
      </VButton>
    </SectionContainer>
  );
};

export default VBrandsView;
