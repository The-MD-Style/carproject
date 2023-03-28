import { IContactInfo, IFooterMapIcons } from 'models/footer.model';

export const footerMapIcon: IFooterMapIcons[] = [
  {
    name: 'facebook',
  },
  {
    name: 'twitter',
  },
  {
    name: 'insta',
  },
  {
    name: 'google',
  },
];

export const contactInfo: IContactInfo[] = [
  {
    name: 'location',
    text: '2605 Caton Hill Road, Woodbridge, VA 22192',
  },
  {
    name: 'phone',
    text: '1-800-1234567',
  },
  {
    name: 'mail',
    text: 'officeone@youremail.com',
  },
];

export const oppeningHours: IContactInfo[] = [
  {
    text: 'Mon-Fri',
    span: '7:00 AM - 6:00 PM',
  },
  {
    text: 'Saturday',
    span: '9:00 AM - 5:00 PM',
  },
  {
    text: 'Sunday',
    span: 'Closed',
  },
];
