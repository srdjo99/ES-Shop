import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layout/ShopLayout';
import { ProductList } from '../components/products';
import { dbProducts } from '../database';
import { IProduct } from '../interfaces';

interface Props {
  products: IProduct[];
}

export const getServerSideProps = async () => {
  const products = await dbProducts.getAllProducts();
  return {
    props: { products },
  };
};

const Home: NextPage<Props> = ({ products }) => {
  return (
    <ShopLayout
      title='S Shop - Home'
      pageDescription='Find products suitable just for you'
    >
      <Typography variant='h1' component='h1'>
        Home
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        All the products
      </Typography>

      <ProductList products={products} />
    </ShopLayout>
  );
};

export default Home;
