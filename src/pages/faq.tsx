import React from 'react';

import FAQView from 'view/pages/FAQ/FAQ.view';

import { queFill } from 'view/pages/FAQ/FAQ.map';
import { NextPage } from 'next';

type Props = {};

const FAQ: NextPage = (props: Props) => {
  return <FAQView queFill={queFill}></FAQView>;
};
FAQ.displayName = 'FAQ';

export default FAQ;
