import { FC, useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { CartContext } from '../../context';
import { currency } from '../../utils';

interface Props {
  summaryValues?: {
    tax: number;
    total: number;
    subTotal: number;
    numberOfItems: number;
  };
}

export const OrderSummary: FC<Props> = ({ summaryValues }) => {
  const contextValues = useContext(CartContext);

  const { tax, total, subTotal, numberOfItems } = summaryValues
    ? summaryValues
    : contextValues;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Products</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>
          {numberOfItems} {numberOfItems > 1 ? 'products' : 'product'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{currency.format(subTotal)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>
          Discount ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100})%
        </Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{currency.format(tax)}</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 2 }}>
        <Typography>{currency.format(total)}</Typography>
      </Grid>
    </Grid>
  );
};
