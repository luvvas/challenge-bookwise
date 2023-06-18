import { NextPageWithLayout } from './_app';

import { DefaultLayout } from '@/Layout/DefaultLayout';
import { LatestRatings } from '@/components/LatestRatings';
import { HomeContainer } from '@/styles/pages/home';

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export default HomePage