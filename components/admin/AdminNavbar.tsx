import { useContext } from 'react';
import NextLink from 'next/link';
import { Box, Button, AppBar, Toolbar, Link, Typography } from '@mui/material';

import { UiContext } from '../../context';

export const AdminNavbar = () => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar>
      <Toolbar>
        <Link href='/' display='flex' alignItems='center' component={NextLink}>
          <Typography variant='h6'>ES |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </Link>

        <Box flex={1} />

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
