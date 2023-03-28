import type { NextPage } from 'next';

import ContactsView from 'view/pages/Contacts/Contacts.view';

import { contactsFill } from 'view/pages/Contacts/Contacts.map';

const Contacts: NextPage = () => {
  return <ContactsView contactsFill={contactsFill}></ContactsView>;
};
Contacts.displayName = 'Contacts';

export default Contacts;
