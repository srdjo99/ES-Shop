import { Grid } from '@mui/material';
import { CategoryOutlined } from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import useSWR from 'swr';

import { AdminLayout } from '../../components/layout';
import { IProduct } from '../../interfaces';

const columns: GridColDef[] = [
  { field: 'img', headerName: 'Image' },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'gender', headerName: 'Gender' },
  { field: 'type', headerName: 'Type' },
  { field: 'inStock', headerName: 'Inventory' },
  { field: 'price', headerName: 'Price' },
  { field: 'sizes', headerName: 'Sizes', width: 250 },
];

const ProductsPage = () => {
  const { data, error } = useSWR<IProduct[]>('/api/admin/products');

  if (!data && !error) return <></>;

  const rows = data!.map((product) => ({
    id: product._id,
    img: product.images[0],
    title: product.title,
    gender: product.gender,
    type: product.type,
    inStock: product.inStock,
    price: product.price,
    sizes: product.sizes,
  }));

  return (
    <AdminLayout
      title={`Products (${data?.length})`}
      subTitle='Products management'
      icon={<CategoryOutlined />}
    >
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
    </AdminLayout>
  );
};

export default ProductsPage;
