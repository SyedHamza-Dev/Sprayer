import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const navigate = useNavigate();
  const { count } = useCart();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #EDE7E0',
        color: '#1a1a1a',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography
          component={Link}
          to="/"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            letterSpacing: '0.08em',
            fontSize: { xs: '22px', sm: '28px' },
            color: '#1a1a1a',
            textDecoration: 'none',
          }}
        >
          SPRAYER
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {NAV_LINKS.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.to}
              sx={{
                fontSize: '15px',
                color: '#4a4a4a',
                fontWeight: 500,
                '&:hover': { color: '#A87B56', backgroundColor: 'transparent' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => navigate('/cart')} aria-label="Cart">
            <Badge
              badgeContent={count}
              showZero
              sx={{ '& .MuiBadge-badge': { backgroundColor: '#A87B56', color: '#fff' } }}
            >
              <ShoppingBagOutlinedIcon sx={{ color: '#1a1a1a' }} />
            </Badge>
          </IconButton>
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={openMenu}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        {NAV_LINKS.map((item) => (
          <MenuItem key={item.label} component={Link} to={item.to} onClick={closeMenu}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
