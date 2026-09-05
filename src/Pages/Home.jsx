import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Chip,
  Rating,
  Snackbar,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useState } from 'react';
import { products, featuredProductIds } from '../data/products';
import { useCart } from '../context/CartContext';
import heroImage from '../assets/products/hero-editorial-rocks.jpg';

const Home = () => {
  const { addItem } = useCart();
  const [snackOpen, setSnackOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState('');

  const handleAddToCart = (product) => {
    addItem(product);
    setLastAdded(product.title);
    setSnackOpen(true);
  };

  const featured = products.filter((p) => featuredProductIds.includes(p.id));

  return (
    <Box sx={{ backgroundColor: '#FBF9F6' }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '80vh', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt=""
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.6) 40%, rgba(15,15,15,0.1) 75%)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 4, md: 10 }, py: { xs: 6, md: 0 }, maxWidth: '600px' }}>
          <Typography
            sx={{ color: '#E8C9A0', letterSpacing: '0.2em', fontSize: '13px', fontWeight: 600, mb: 2 }}
          >
            THE SIGNATURE COLLECTION
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: '2.4rem', md: '3.6rem' },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            A scent for every story
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', mb: 4, maxWidth: '460px' }}>
            Crafted fragrances built on rare notes and honest ingredients. Find the one that feels
            like you.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#E8C9A0',
              color: '#1a1a1a',
              px: 4,
              py: 1.5,
              borderRadius: '4px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              '&:hover': { backgroundColor: '#D9B88A' },
            }}
            href="#collection"
          >
            Shop the Collection
          </Button>
        </Box>
      </Box>

      {/* Featured strip */}
      <Box sx={{ py: 8, px: { xs: 3, md: 8 } }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '13px',
            letterSpacing: '0.2em',
            color: '#A87B56',
            fontWeight: 600,
            textAlign: 'center',
            mb: 1,
          }}
        >
          STAFF PICKS
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
          }}
        >
          Featured Fragrances
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {featured.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  borderRadius: '10px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 16px 32px rgba(0,0,0,0.1)' },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Chip
                    label="Featured"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      fontWeight: 600,
                      zIndex: 1,
                    }}
                  />
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ height: 280, objectFit: 'cover' }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '19px' }}>
                    {product.title}
                  </Typography>
                  <Typography sx={{ color: '#888', fontSize: '13px', mb: 1.5 }}>{product.notes}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#1a1a1a' }}>
                      ${product.price}
                    </Typography>
                    <Typography sx={{ textDecoration: 'line-through', color: '#bbb', fontSize: '14px' }}>
                      ${product.originalPrice}
                    </Typography>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleAddToCart(product)}
                    sx={{
                      backgroundColor: '#1a1a1a',
                      py: 1.2,
                      borderRadius: '6px',
                      '&:hover': { backgroundColor: '#A87B56' },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Full collection */}
      <Box id="collection" sx={{ backgroundColor: '#F3EFE9', py: 8, px: { xs: 3, md: 8 } }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 1,
          }}
        >
          The Full Collection
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#777', mb: 6 }}>
          {products.length} fragrances, each with its own character
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
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

      {/* Promo strip */}
      <Box sx={{ py: 8, px: { xs: 3, md: 8 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              backgroundColor: '#F2EDE6',
              p: 5,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography sx={{ color: '#A87B56', fontWeight: 700, letterSpacing: '0.1em', fontSize: '12px' }}>
                TOP STAFF PICK
              </Typography>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.8rem', mt: 1 }}>
                Clear Noir
              </Typography>
              <Typography sx={{ color: '#666', mt: 1, fontSize: '14px' }}>
                Bergamot, black pepper, and cedar. A modern classic.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              backgroundColor: '#1a1a1a',
              color: '#fff',
              p: 5,
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.6rem' }}>
              15% off your first order
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mt: 1, fontSize: '14px' }}>
              Use code <strong style={{ color: '#E8C9A0' }}>WELCOME15</strong> at checkout
            </Typography>
          </Grid>
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

export default Home;
