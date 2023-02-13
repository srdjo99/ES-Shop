import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layout/ShopLayout';
import { ProductList } from '../components/products';
import { useProducts } from '../hooks';
import { FullScreenLoading } from '../components/ui';

const Home: NextPage = () => {
  const { products, isLoading, isError } = useProducts('/products');

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

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
