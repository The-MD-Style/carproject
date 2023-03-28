import type { NextPage } from 'next';

import HomeView from 'view/pages/Home/Home.view';

import { cards, animationCards } from 'view/pages/Home/Home.map';

const Home: NextPage = () => {
  return <HomeView cards={cards} animatedCards={animationCards}></HomeView>;
};

export default Home;
