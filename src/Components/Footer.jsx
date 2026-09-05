import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', py: 6, textAlign: 'center' }}>
      <Grid container justifyContent="center" spacing={4} sx={{ px: 3 }}>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '13px', mb: 2, color: '#E8C9A0' }}>
            SHOP
          </Typography>
          <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>New Arrivals</Typography>
          <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Best Sellers</Typography>
          <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>All Fragrances</Typography>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '13px', mb: 2, color: '#E8C9A0' }}>
            NEWSLETTER
          </Typography>
          <Typography sx={{ fontSize: '14px', mb: 3, color: 'rgba(255,255,255,0.7)' }}>
            Get first access to new collections
          </Typography>
          <TextField
            placeholder="Your email"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: '#fff',
              borderRadius: '30px',
              width: '100%',
              maxWidth: '280px',
              '& .MuiOutlinedInput-root': { borderRadius: '30px' },
            }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#E8C9A0',
              color: '#1a1a1a',
              borderRadius: '30px',
              width: '100%',
              maxWidth: '200px',
              fontWeight: 600,
              '&:hover': { backgroundColor: '#D9B88A' },
            }}
          >
            SUBSCRIBE
          </Button>
        </Grid>

        <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '13px', mb: 2, color: '#E8C9A0' }}>
            SUPPORT
          </Typography>
          <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>FAQs</Typography>
          <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Shipping</Typography>
          <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Returns</Typography>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5, gap: 3 }}>
        <Facebook sx={{ fontSize: 22, cursor: 'pointer', color: 'rgba(255,255,255,0.6)' }} />
        <Twitter sx={{ fontSize: 22, cursor: 'pointer', color: 'rgba(255,255,255,0.6)' }} />
        <Instagram sx={{ fontSize: 22, cursor: 'pointer', color: 'rgba(255,255,255,0.6)' }} />
      </Box>

      <Typography sx={{ mt: 4, fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
        &copy; {new Date().getFullYear()} Sprayer. A frontend demo project, not a live store.
      </Typography>
    </Box>
  );
}
