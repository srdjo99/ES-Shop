import { useContext, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';
import {
  ProductSizeSelector,
  ProductSlideshow,
} from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { ICartProduct, IProduct, ISize } from '../../interfaces';
import { dbProducts } from '../../database';
import { CartContext } from '../../context';

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const selectedSize = (size: ISize) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };

  const onUpdateQuantity = (newQuantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity: newQuantity,
    }));
  };

  const onAddProduct = () => {
    if (!tempCartProduct.size) return;

    addProductToCart(tempCartProduct);
    router.push('/cart');
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>
              {product.title}
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              {`$${product.price}`}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                maxValue={product.inStock}
                updatedQuantity={onUpdateQuantity}
              />
              <ProductSizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={selectedSize}
              />
            </Box>

            {product.inStock > 0 ? (
              <Button
                color='secondary'
                className='circular-btn'
                onClick={onAddProduct}
              >
                {tempCartProduct.size ? 'Add to cart' : 'Select a size'}
              </Button>
            ) : (
              <Chip label='Not available' color='error' variant='outlined' />
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = await dbProducts.getAllProductSlugs();
  const paths = productSlugs.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
