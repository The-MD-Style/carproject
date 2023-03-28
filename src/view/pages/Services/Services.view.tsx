import React from 'react';

import VIcon from 'components/VIcon/VIcon';
import VAdvCard from 'components/VAdvCard/VAdvCard';

import classes from './Services.module.scss';
import { contactsFill, fillServicesData } from './Services.map';
import { IServiceItems } from 'models/services.model';
import { IContact } from 'models/contacts.model';

type Props = {
  value: string;
  handleSetState: (name: string) => void;
};

const ServicesView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['container']}>
      <div className={classes['content']}>
        {fillServicesData.find((item: IServiceItems) => item.name === props.value).content}
        <VAdvCard></VAdvCard>
      </div>
      <div className={classes['info']}>
        <ul className={classes['services']}>
          {fillServicesData.map((item: IServiceItems) => (
            <li
              key={item.name}
              className={`${classes['item']} ${item.name === props.value ? classes['item--active'] : ''}`}
              onClick={() => props.handleSetState(item.name)}
            >
              <VIcon name={item.icon} className={classes['icon']} width={19} height={19}></VIcon>
              {item.name}
            </li>
          ))}
        </ul>

        <ul className={classes['contacts']}>
          <p className={classes['blockTitle']}>Contacts Us</p>
          {contactsFill.map((item: IContact) => (
            <li className={classes['item']} key={item.title}>
              <VIcon className={classes['icon']} name={item.icon} width={20} height={20}></VIcon>
              <div className={classes['contactInfo']}>
                <p className={classes['title']}> {item.title} </p>
                <p className={classes['text']}> {item.text} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesView;
