import React from 'react';
import { styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import CustomButton from '../../components/CustomButton/CustomButton';
import welcome from '../../assets/welcome.png';

function Welcome() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  return (
    <Box sx={{ backgroundColor: '#FED801', minHeight: '80vh' }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: '1' }}>
            <Typography variant="body2" sx={{ fontSize: '18px', color: '#687690', fontWeight: '500', mt: 10, mb: 4 }}>
              Welcome to Foodie Restaurant
            </Typography>
            <Title variant="h1">Discover a place where you'll love to Eat</Title>
            <Typography variant="body2" sx={{ fontSize: '18px', color: '5A6473' }}>
              Immerse yourself in the elegant ambiance as you savor each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails
            </Typography>

            <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="More About Us" welcomeBtn />
          </Box>
          <Box sx={{ flex: '1.25' }}>
            <img src={welcome} alt="Welcome to Foodie Restaurant - A place to love to eat" style={{ maxWidth: '100%', marginBottom: '2rem' }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;

