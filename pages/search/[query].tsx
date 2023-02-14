import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout/ShopLayout';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

const SearchPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout
      title='ES-Shop - Search '
      pageDescription='Find products suitable just for you'
    >
      <Typography variant='h1' component='h1'>
        Search product
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        ABC --- 123
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default SearchPage;
