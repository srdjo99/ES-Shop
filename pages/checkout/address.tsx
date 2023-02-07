import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { ShopLayout } from '../../components/layout';

const AddressPage = () => {
  return (
    <ShopLayout
      title='Destination'
      pageDescription='Confirm destination address'
    >
      <Typography variant='h1' component='h1'>
        Destination
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label='Name' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Last name' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Destination' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Destination 2 ( optional )'
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Postal code' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='City' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant='filled' label='Country' value={1}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Spain</MenuItem>
              <MenuItem value={3}>Mexico</MenuItem>
              <MenuItem value={4}>Serbia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Phone' variant='filled' fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
        <Button color='secondary' className='circular-btn' size='large'>
          Check order
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
