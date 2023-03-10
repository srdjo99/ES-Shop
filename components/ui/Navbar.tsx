import { useContext, useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  Box,
  Badge,
  Button,
  AppBar,
  Toolbar,
  Link,
  Typography,
  IconButton,
  Input,
  InputAdornment,
} from '@mui/material';
import {
  SearchOutlined,
  ShoppingCartOutlined,
  ClearOutlined,
} from '@mui/icons-material';

import { UiContext } from '../../context';
import { CartContext } from '../../context/cart/CartContext';

export const Navbar = () => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        {/* <NextLink href='/' passHref legacyBehavior> */}
        <Link href='/' display='flex' alignItems='center' component={NextLink}>
          <Typography variant='h6'>ES |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </Link>
        {/* </NextLink> */}

        <Box flex={1} />

        <Box
          sx={{
            display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' },
          }}
          className='fadeIn'
        >
          {/* <NextLink href='/category/men' passHref> */}
          <Link href='/category/men' component={NextLink}>
            <Button color={asPath === '/category/men' ? 'primary' : 'info'}>
              Men
            </Button>
          </Link>
          {/* </NextLink> */}

          {/* <NextLink href='/category/women' passHref> */}
          <Link href='/category/women' component={NextLink}>
            <Button color={asPath === '/category/women' ? 'primary' : 'info'}>
              Women
            </Button>
          </Link>
          {/* </NextLink> */}

          {/* <NextLink href='/category/kid' passHref> */}
          <Link href='/category/kid' component={NextLink}>
            <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>
              Kids
            </Button>
          </Link>
          {/* </NextLink> */}
        </Box>

        <Box flex={1} />

        {/* large screen */}

        {isSearchVisible ? (
          <Input
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
            className='fadeIn'
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
            type='text'
            placeholder='Search...'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            className='fadeIn'
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* small screen */}
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlined />
        </IconButton>

        {/* <NextLink href='/cart' passHref> */}
        <Link href='/cart' component={NextLink}>
          <IconButton>
            <Badge
              badgeContent={numberOfItems > 9 ? '+9' : numberOfItems}
              color='secondary'
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Link>
        {/* </NextLink> */}

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
