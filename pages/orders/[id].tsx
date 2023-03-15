import { GetServerSideProps, NextPage } from 'next';
import NextLink from 'next/link';
import { getSession } from 'next-auth/react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { CreditCardOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layout';
import { dbOrders } from '../../database';
import { IOrder } from '../../interfaces';

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {
  const { shippingAddress } = order;

  return (
    <ShopLayout title='Order summary' pageDescription='Order summary'>
      <Typography variant='h1' component='h1'>
        {order._id}
      </Typography>
      {order.isPaid ? (
        <Chip
          sx={{ my: 2 }}
          label='Order has already been paid'
          variant='outlined'
          color='success'
          icon={<CreditScoreOutlined />}
        />
      ) : (
        <Chip
          sx={{ my: 2 }}
          label='Pending payment'
          variant='outlined'
          color='error'
          icon={<CreditCardOutlined />}
        />
      )}

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>
                Summary ({order.numberOfItems}{' '}
                {order.numberOfItems > 1 ? 'products' : 'product'})
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Delivery address</Typography>
                <Link
                  href='/checkout/address'
                  component={NextLink}
                  underline='always'
                >
                  Edit
                </Link>
              </Box>

              <Typography>
                {shippingAddress.firstName} {shippingAddress.lastName}
              </Typography>
              <Typography>
                {shippingAddress.address}
                {shippingAddress.address2
                  ? `, ${shippingAddress.address2}`
                  : ''}
              </Typography>
              <Typography>
                {shippingAddress.city}, {shippingAddress.zip}
              </Typography>
              <Typography>{shippingAddress.country}</Typography>
              <Typography>{shippingAddress.phone}</Typography>

              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <h1>Pay</h1>
                <Chip
                  sx={{ my: 2 }}
                  label='Order has already been paid'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { id = '' } = query;
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: `/auth/login?p=/orders/${id}`,
        permanent: false,
      },
    };
  }

  const order = await dbOrders.getOrderById(id.toString());

  if (!order) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      },
    };
  }

  if (order.user !== session.user._id) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      },
    };
  }

  return {
    props: {
      order,
    },
  };
};

export default OrderPage;
