import { Box, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend exists for this project -- there's nowhere to actually send this
    // to. This just simulates a successful submission so the form doesn't feel
    // like a dead end, without claiming a message was really delivered anywhere.
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ backgroundColor: '#FBF9F6', minHeight: '70vh', py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 700,
            mb: 1,
          }}
        >
          Get in Touch
        </Typography>
        <Typography sx={{ color: '#777' }}>Questions about a fragrance? Send us a note.</Typography>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          {submitted && (
            <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSubmitted(false)}>
              Thanks for reaching out — this is a demo form, so nothing was actually sent, but that's
              the flow.
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Your Name"
              required
              value={form.name}
              onChange={handleChange('name')}
              sx={{ backgroundColor: '#fff' }}
            />
            <TextField
              label="Email Address"
              type="email"
              required
              value={form.email}
              onChange={handleChange('email')}
              sx={{ backgroundColor: '#fff' }}
            />
            <TextField
              label="Message"
              required
              multiline
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              sx={{ backgroundColor: '#fff' }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#1a1a1a',
                py: 1.4,
                borderRadius: '6px',
                alignSelf: 'flex-start',
                px: 5,
                '&:hover': { backgroundColor: '#A87B56' },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
