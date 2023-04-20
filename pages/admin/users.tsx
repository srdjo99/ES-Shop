import { PeopleOutline } from '@mui/icons-material';
import { AdminLayout } from '../../components/layout';
import { Grid, MenuItem, Select } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import useSWR from 'swr';
import { IUser } from '../../interfaces';
import { shopApi } from '../../api';

const UsersPage = () => {
  const { data, error } = useSWR<IUser[]>('/api/admin/users');

  if (!data && !error) return <></>;

  const onRoleUpdated = async (userId: string, newRole: string) => {
    try {
      await shopApi.put('/admin/users', { userId, role: newRole });
    } catch (error) {
      console.log(error);
      alert('Failed to update user role');
    }
  };

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'name', headerName: 'Full name', width: 300 },
    {
      field: 'role',
      headerName: 'Role',
      width: 300,
      renderCell: ({ row }: GridRenderCellParams) => {
        return (
          <Select
            value={row.role}
            label='Role'
            onChange={(e) => onRoleUpdated(row.id, e.target.value)}
            sx={{ width: '300px' }}
          >
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='client'>Client</MenuItem>
            <MenuItem value='super-user'>Super user</MenuItem>
          </Select>
        );
      },
    },
  ];

  const rows = data!.map((user) => ({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  }));

  return (
    <AdminLayout
      title='Users'
      subTitle='User management'
      icon={<PeopleOutline />}
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

export default UsersPage;
