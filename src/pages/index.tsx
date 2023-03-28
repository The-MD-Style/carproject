import type { NextPage } from 'next';

import HomeView from 'view/pages/Home/Home.view';

import {
  carsFillData,
  counterMap,
  serviceMap,
  widgetMap,
  homePageTabs,
  FeaturedData,
  homeTabs,
  reviewsData,
} from 'view/pages/Home/Home.map';
import { showcaseSlides, HomeOurPriceSlide, customerReviews } from 'components/VSwiper/VSlider.map';

const Home: NextPage = () => {
  return (
    <HomeView
      showcaseSlides={showcaseSlides}
      serviceMap={serviceMap}
      widgetMap={widgetMap}
      counterMap={counterMap}
      ourPriceSlide={HomeOurPriceSlide}
      carsFillData={carsFillData}
      homePageTabs={homePageTabs}
      FeaturedData={FeaturedData}
      homeTabs={homeTabs}
      reviewsData={reviewsData}
      customerReviews={customerReviews}
    ></HomeView>
  );
};

export default Home;
