import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layout/ShopLayout';
// temporarly
import { ProductList } from '../components/products';

import useSWR from 'swr';
const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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

      <ProductList products={data} />
    </ShopLayout>
  );
};

export default Home;
