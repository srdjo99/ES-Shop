import type { GetServerSideProps, NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout/ShopLayout';
import { ProductList } from '../../components/products';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
  products: IProduct[];
}

const SearchPage: NextPage<Props> = ({ products }) => {
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

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);

  return {
    props: { products },
  };
};

export default SearchPage;
