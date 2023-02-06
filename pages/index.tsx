import type { NextPage } from 'next';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';

import { ShopLayout } from '../components/layout/ShopLayout';
// temporarly
import { initialData } from '../database/products';

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

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item key={product.slug} xs={6} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={`products/${product.images[0]}`}
                  alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default Home;
