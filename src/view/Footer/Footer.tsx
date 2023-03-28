import React, { useCallback, useMemo, useState } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';

import FooterView from './Footer.view';
import { contactInfo, footerMapIcon, oppeningHours } from './Footer.map';

type Props = {};

const Footer: React.FC<Props> = () => {
  return <FooterView footerMapIcon={footerMapIcon} contactInfo={contactInfo} oppeningHours={oppeningHours}></FooterView>;
};

export default Footer;
