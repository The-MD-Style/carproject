import React from 'react';

import PreventativeMaintenance from './ServicesInfoPage/PreventativeMaintenance/PreventativeMaintenance';
import BrakeRepairServices from './ServicesInfoPage/BrakeRepairServices/BrakeRepairServices';

import { IServiceItems } from 'models/services.model';
import { IContact } from 'models/contacts.model';

export const fillServicesData: IServiceItems[] = [
  {
    icon: 'search',
    name: 'Preventative Maintenance',
    content: <PreventativeMaintenance></PreventativeMaintenance>,
  },
  {
    icon: 'search',
    name: 'Brake Repair & Services',
    content: <BrakeRepairServices></BrakeRepairServices>,
  },
];

export const contactsFill: IContact[] = [
  {
    icon: 'location',
    title: 'Post Address',
    text: (
      <React.Fragment>
        8494 Signal Hill Road
        <br />
        Manassas,VA, 20110
      </React.Fragment>
    ),
  },
  {
    icon: 'phone',
    title: 'Contact Phone ',
    text: '1-800-123-4567',
  },
  {
    icon: 'mail',
    title: 'E-mail Address ',
    text: 'officeone@youremail.com',
  },
  {
    icon: 'clock',
    title: 'Opening Hours ',
    text: (
      <React.Fragment>
        Mon-Fri 08:00 AM - 05:00 PM,
        <br />
        Sat-Sun
      </React.Fragment>
    ),
  },
];
