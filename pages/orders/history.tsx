import { GetServerSideProps, NextPage } from 'next';
import NextLink from 'next/link';
import { getSession } from 'next-auth/react';

import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layout';
import { dbOrders } from '../../database';
import { IOrder } from '../../interfaces';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full Name', width: 300 },
  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Shows an information if the order is paid or not',
    width: 200,
    renderCell: (params) => {
      return params.row.paid ? (
        <Chip color='success' label='Paid' variant='outlined' />
      ) : (
        <Chip color='error' label='Not paid' variant='outlined' />
      );
    },
  },
  {
    field: 'order',
    headerName: 'See order',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <Link
          href={`/orders/${params.row.orderId}`}
          component={NextLink}
          underline='always'
        >
          See order
        </Link>
      );
    },
  },
];

interface Props {
  orders: IOrder[];
}

const HistoryPage: NextPage<Props> = ({ orders }) => {
  const rows = orders.map((order, i) => ({
    id: i + 1,
    paid: order.isPaid,
    fullname:
      order.shippingAddress.firstName + ' ' + order.shippingAddress.lastName,
    orderId: order._id,
  }));

  console.log(rows);

  return (
    <ShopLayout
      title='History of orders'
      pageDescription="History of client\'s orders"
    >
      <Typography variant='h1' component='h1'>
        History of orders
      </Typography>

      <Grid container className='fadeIn'>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login?p=/orders/history',
        permanent: false,
      },
    };
  }

  const orders = await dbOrders.getOrderByUserId(session.user._id);

  return {
    props: {
      orders,
    },
  };
};

export default HistoryPage;
