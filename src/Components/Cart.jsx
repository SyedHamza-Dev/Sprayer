import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import { Add, Remove, DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 12, px: 3 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, mb: 2 }}>
          Your cart is empty
        </Typography>
        <Typography sx={{ color: '#888', mb: 4 }}>
          Browse the collection and find a scent you love.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ backgroundColor: '#1a1a1a', px: 4, py: 1.2, '&:hover': { backgroundColor: '#A87B56' } }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 3, py: 8 }}>
      <Grid item xs={12} textAlign="center" sx={{ mb: 2 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700 }}>
          Shopping Cart
        </Typography>
      </Grid>

      {items.map((item) => (
        <Grid item xs={12} md={8} key={item.id}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              borderRadius: '10px',
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 70, height: 90, objectFit: 'cover', borderRadius: '6px', mr: 2 }}
            />
            <CardContent sx={{ flexGrow: 1, p: 0 }}>
              <Typography fontWeight={700}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.notes}
              </Typography>
            </CardContent>
            <Box display="flex" alignItems="center" sx={{ border: '1px solid #eee', borderRadius: '20px', px: 1 }}>
              <IconButton size="small" color="primary" onClick={() => updateQuantity(item.id, -1)}>
                <Remove fontSize="small" />
              </IconButton>
              <Typography mx={1}>{item.quantity}</Typography>
              <IconButton size="small" color="primary" onClick={() => updateQuantity(item.id, 1)}>
                <Add fontSize="small" />
              </IconButton>
            </Box>
            <Typography fontWeight={700} sx={{ mx: 3, minWidth: '60px', textAlign: 'right' }}>
              ${item.price * item.quantity}
            </Typography>
            <IconButton color="error" onClick={() => removeItem(item.id)} aria-label="Remove item">
              <DeleteOutline />
            </IconButton>
          </Card>
        </Grid>
      ))}

      <Grid item xs={12} md={8}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderTop: '1px solid #ddd', pt: 3 }}>
          <Typography fontWeight={700} variant="h6">
            Total: ${total}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={8} display="flex" justifyContent="space-between">
        <Button component={Link} to="/" variant="outlined" sx={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}>
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          disabled
          sx={{ backgroundColor: '#1a1a1a', px: 4 }}
          title="Checkout isn't wired to a payment provider in this demo"
        >
          Checkout (Demo)
        </Button>
      </Grid>
    </Grid>
  );
}
