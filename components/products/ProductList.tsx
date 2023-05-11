import { FC } from 'react';
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';

import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';
import { shopApi } from '../../shopApi';

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products?.map((product: any) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
