import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  ToggleButtonGroup,
  ToggleButton,
  Snackbar,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useMemo, useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const SORT_OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

const Shop = () => {
  const { addItem } = useCart();
  const [sort, setSort] = useState('default');
  const [snackOpen, setSnackOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState('');

  const handleAddToCart = (product) => {
    addItem(product);
    setLastAdded(product.title);
    setSnackOpen(true);
  };

  const sortedProducts = useMemo(() => {
    const list = [...products];
    if (sort === 'price-asc') return list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return list.sort((a, b) => b.price - a.price);
    return list;
  }, [sort]);

  return (
    <Box sx={{ backgroundColor: '#FBF9F6', minHeight: '70vh' }}>
      <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 3, md: 8 }, textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 700,
            mb: 1,
          }}
        >
          Shop the Collection
        </Typography>
        <Typography sx={{ color: '#777' }}>{products.length} fragrances, each with its own character</Typography>
      </Box>

      <Box sx={{ px: { xs: 3, md: 8 }, display: 'flex', justifyContent: 'center', mb: 5 }}>
        <ToggleButtonGroup
          value={sort}
          exclusive
          onChange={(_, value) => value && setSort(value)}
          size="small"
          sx={{
            '& .MuiToggleButton-root': {
              textTransform: 'none',
              px: 2.5,
              borderColor: '#E5DDD2',
              color: '#666',
              '&.Mui-selected': {
                backgroundColor: '#1a1a1a',
                color: '#fff',
                '&:hover': { backgroundColor: '#1a1a1a' },
              },
            },
          }}
        >
          {SORT_OPTIONS.map((opt) => (
            <ToggleButton key={opt.value} value={opt.value}>
              {opt.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ px: { xs: 3, md: 8 }, pb: 10 }}>
        <Grid container spacing={3} justifyContent="center">
          {sortedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  borderRadius: '10px',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 220, objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '17px', mb: 0.5 }}>{product.title}</Typography>
                  <Typography sx={{ color: '#999', fontSize: '12px', mb: 1 }}>{product.notes}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
                    <Rating value={product.rating} precision={0.5} size="small" readOnly />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                    <Typography sx={{ textDecoration: 'line-through', color: '#bbb', fontSize: '13px' }}>
                      ${product.originalPrice}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, color: '#1a1a1a' }}>${product.price}</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<ShoppingBagOutlinedIcon />}
                      onClick={() => handleAddToCart(product)}
                      sx={{
                        borderColor: '#A87B56',
                        color: '#A87B56',
                        borderRadius: '6px',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#A87B56', color: '#fff', borderColor: '#A87B56' },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={snackOpen}
        autoHideDuration={2200}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={`${lastAdded} added to cart`}
      />
    </Box>
  );
};

export default Shop;
