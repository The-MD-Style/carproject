import React from 'react';
import Image from 'next/image';
import photo from '../../../../../assets/images/backgrounds/sliderBackground1.jpg';
import photo2 from '../../../../../assets/images/backgrounds/services-item-img02.jpg';
import classes from './BrakeRepairServices.module.scss';
import { elements } from './BrakeRepairServices.map';
import VIcon from 'components/VIcon/VIcon';

type Props = {};

const BrakeRepairServicesView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['container']}>
      <Image src={photo} alt={''} />
      <p className={classes['title']}>Brake Repair & Services</p>

      <p className={classes['text']}>
        An oil change can really change your mood. And it will definitely change your oil. One of the simplest, most effective and
        inexpensive ways to help protect the life of your car, especially its engine, is to change the oil and the oil filter regularly.
        <br />
        <br />
        Oil is the lifeblood of your engine. It reduces friction, lessens wear, provides lubrication, forms a seal between the pistons,
        rings and cylinder walls while helping to cool engine parts. Without the cleaning action of new oil, carbon and varnish buildup
        would be toxic to the engine. And engine oil even dampens the shock and noise of moving parts.
        <br />
        <br />
        With a Car Repair Service oil change, or any other service, you’ll receive a Touch® Courtesy Check. We’ll look inside, outside,
        under the hood and underneath the car, then explain the findings and give you a written report.
        <br />
        <br />
        While you’re there, let us perform a Touch® Courtesy Check, which includes a visual check of the following items:
      </p>
      <ul className={classes['listElements']}>
        {elements.map((item: string) => (
          <li key={item} className={classes['item']}>
            <VIcon name={'sqareCheck'} className={classes['icon']} width={19} height={19}></VIcon>
            {item}
          </li>
        ))}
      </ul>
      <p className={classes['text']}>
        Oil change near me? The next time you ask this question, just look for your neighborhood Car Repair Service.
      </p>
      <div className={classes['content']}>
        <div className={classes['photo']}>
          <Image className={classes['img']} alt={''} src={photo2} width={350} height={348}></Image>
        </div>
        <div className={classes['textSection']}>
          <p className={classes['elementTitle']}>Trust Our Products</p>
          <p className={classes['text']}>
            For over 60 years, Car Repair Service has been helping drivers across North America maintain their vehicles. With ASE-certified
            mechanics in all of our stores, we can take care of all of your auto repair and maintenance needs.
            <br />
            <br />
            From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair, tires,
            and wheel alignment, weve got you covered. Use the quick links in the gold bar to book an appointment at your Car Repair Service
            store today!
          </p>
        </div>
      </div>
      <p className={classes['text']}>
        Oil is the lifeblood of your engine. It reduces friction, lessens wear, provides lubrication, forms a seal between the pistons,
        rings and cylinder walls while helping to cool engine parts. Without the cleaning action of new oil, carbon and varnish buildup
        would be toxic to the engine. And engine oil even dampens the shock and noise of moving parts.
      </p>
    </div>
  );
};

export default BrakeRepairServicesView;
