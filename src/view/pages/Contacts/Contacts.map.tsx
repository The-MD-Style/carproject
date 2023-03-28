import React from 'react';

import { IContact } from 'models/contacts.model';

export const contactsFill: IContact[] = [
  {
    icon: 'location',
    title: 'Post Address',
    text: (
      <React.Fragment>
        2605 Caton Hill Road, Woodbridge,
        <br /> VA 22192
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
        Mon-Fri: 7:00 AM - 6:00 PM
        <br />
        Saturday: 9:00 AM - 5:00 PM
        <br />
        Sunday: Closed
      </React.Fragment>
    ),
  },
];
