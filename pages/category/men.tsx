import { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const MenCategoryPage: NextPage = () => {
  const { products, isLoading, isError } = useProducts('/products?gender=men');

  return (
    <ShopLayout
      title='ES-Shop - Men products '
      pageDescription='Find products suitable just for you'
    >
      <Typography variant='h1' component='h1'>
        Men
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        All the products in men category
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenCategoryPage;
