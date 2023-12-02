import React from 'react';
import { Box, Container } from '@mui/system';
import logoImg from '../../assets/logo.png';
import starsImg from '../../assets/Star.png';
import logosImg from '../../assets/logos.png';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Partner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const LogoImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    width: '150px', // Adjust the width as needed
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <LogoImage src={logoImg} alt="logoImg" />
          <Typography
            sx={{
              fontSize: '16px',
              color: '#7D8589',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            More Than 45,000 trust Foodie
          </Typography>
        </CustomBox>
        <Box>
          <img src={starsImg} alt="starsImg" style={{ maxWidth: '100%' }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: '16px',
              color: '#7D8589',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            5-star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logosImg} alt="logos" style={{ maxWidth: '100%' }} />
      </Container>
    </Box>
  );
};

export default Partner;

