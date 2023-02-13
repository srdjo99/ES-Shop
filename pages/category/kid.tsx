import { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const KidCategoryPage: NextPage = () => {
  const { products, isLoading, isError } = useProducts('/products?gender=kid');

  return (
    <ShopLayout
      title='ES-Shop - Kid products '
      pageDescription='Find products suitable just for you'
    >
      <Typography variant='h1' component='h1'>
        Kid
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        All the products in kid category
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidCategoryPage;
