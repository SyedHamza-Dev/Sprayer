import { Box, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/products/product-minimalist-stone.jpg';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#FBF9F6' }}>
      <Grid container sx={{ minHeight: { xs: 'auto', md: '70vh' } }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutImage}
            alt=""
            sx={{ width: '100%', height: { xs: '360px', md: '100%' }, objectFit: 'cover', display: 'block' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 4, md: 8 },
            py: { xs: 6, md: 0 },
          }}
        >
          <Typography
            sx={{ color: '#A87B56', letterSpacing: '0.2em', fontSize: '13px', fontWeight: 600, mb: 2 }}
          >
            OUR STORY
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              mb: 3,
            }}
          >
            Fragrance, without the noise
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '16px', lineHeight: 1.8, mb: 2 }}>
            Sprayer started as a simple question: why does buying a fragrance online feel so
            impersonal? Every bottle in our collection is chosen for a specific mood or moment,
            described honestly, without a wall of marketing language between you and the scent.
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '16px', lineHeight: 1.8 }}>
            This is a small, independent catalog. No mass production, no filler collections, just
            a set of fragrances we'd actually stand behind.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ px: { xs: 3, md: 8 }, py: 8 }} justifyContent="center">
        {[
          { title: 'Honest Descriptions', body: 'No invented backstories, just the notes and the price.' },
          { title: 'Small Catalog', body: 'A curated set of scents, not an overwhelming aisle.' },
          { title: 'Built to Last', body: 'Fragrances chosen for everyday wear, not just launch-day hype.' },
        ].map((item) => (
          <Grid item xs={12} sm={4} key={item.title} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '19px', mb: 1 }}>
              {item.title}
            </Typography>
            <Typography sx={{ color: '#777', fontSize: '14px' }}>{item.body}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
