import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../components/layout/ShopLayout';

const Home: NextPage = () => {
  return (
    <ShopLayout
      title='ES-Shop - Home '
      pageDescription='Find products suitable just for you'
    >
      <Typography variant='h1' component='h1'>
        Home
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        All the products
      </Typography>
    </ShopLayout>
  );
};

export default Home;
