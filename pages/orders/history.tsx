import NextLink from 'next/link';

import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layout';

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
          href={`/orders/${params.row.id}`}
          component={NextLink}
          underline='always'
        >
          See order
        </Link>
      );
    },
  },
];

const rows = [{ id: 1, paid: true, fullname: 'Srdjan Coralic' }];

const HistoryPage = () => {
  return (
    <ShopLayout
      title='History of orders'
      pageDescription="History of client\'s orders"
    >
      <Typography variant='h1' component='h1'>
        History of orders
      </Typography>

      <Grid container>
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

export default HistoryPage;
