import { useRouter } from 'next/router';
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
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';

import { ShopLayout } from '../../components/layout';
import { countries } from '../../utils';

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
};

const AddressPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      zip: '',
      city: '',
      country: countries[3].code,
      phone: '',
    },
  });

  const onSubmitAddress = (data: FormData) => {
    console.log(data);
    Cookies.set('firstName', data.firstName);
    Cookies.set('lastName', data.lastName);
    Cookies.set('address', data.address);
    Cookies.set('address2', data.address2 || '');
    Cookies.set('zip', data.zip);
    Cookies.set('city', data.city);
    Cookies.set('country', data.country);
    Cookies.set('phone', data.phone);

    router.push('/checkout/summary');
  };

  return (
    <ShopLayout
      title='Destination'
      pageDescription='Confirm destination address'
    >
      <form onSubmit={handleSubmit(onSubmitAddress)}>
        <Typography variant='h1' component='h1'>
          Destination
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Name'
              variant='filled'
              fullWidth
              {...register('firstName', {
                required: 'This field is required',
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Last name'
              variant='filled'
              fullWidth
              {...register('lastName', {
                required: 'This field is required',
              })}
              error={!!errors.lastName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Address'
              variant='filled'
              fullWidth
              {...register('address', {
                required: 'This field is required',
              })}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Address 2 ( optional )'
              variant='filled'
              fullWidth
              {...register('address2')}
              error={!!errors.address2}
              helperText={errors.address2?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Postal code'
              variant='filled'
              fullWidth
              {...register('zip', {
                required: 'This field is required',
              })}
              error={!!errors.zip}
              helperText={errors.zip?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='City'
              variant='filled'
              fullWidth
              {...register('city', {
                required: 'This field is required',
              })}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                select
                variant='filled'
                label='Country'
                defaultValue={countries[0].code}
                {...register('country', {
                  required: 'This field is required',
                })}
                error={!!errors.country}
                // helperText={errors.country?.message}
              >
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Phone'
              variant='filled'
              fullWidth
              {...register('phone', {
                required: 'This field is required',
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
          <Button
            type='submit'
            color='secondary'
            className='circular-btn'
            size='large'
          >
            Check order
          </Button>
        </Box>
      </form>
    </ShopLayout>
  );
};

export default AddressPage;
