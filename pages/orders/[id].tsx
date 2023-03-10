import NextLink from 'next/link';
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

const OrderPage = () => {
  return (
    <ShopLayout title='Order summary ABC123' pageDescription='Order summary'>
      <Typography variant='h1' component='h1'>
        Order: ABC123
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label='Pending payment'
        variant='outlined'
        color='error'
        icon={<CreditCardOutlined />}
      /> */}

      <Chip
        sx={{ my: 2 }}
        label='Order has already been paid'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Summary (3 products)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Delivery address</Typography>
                {/* <NextLink href='/checkout/address' passHref> */}
                <Link
                  href='/checkout/address'
                  component={NextLink}
                  underline='always'
                >
                  Edit
                </Link>
                {/* </NextLink> */}
              </Box>

              <Typography>Srdjan Coralic</Typography>
              <Typography>Svetosavska bb</Typography>
              <Typography>Laktasi, 78252</Typography>
              <Typography>BiH</Typography>
              <Typography>+387 12 123 123</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                {/* <NextLink href='/cart' passHref> */}
                <Link href='/cart' component={NextLink} underline='always'>
                  Edit
                </Link>
                {/* </NextLink> */}
              </Box>

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

export default OrderPage;
