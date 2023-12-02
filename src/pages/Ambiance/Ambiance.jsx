import React from 'react';
import { Divider, Typography, styled } from '@mui/material';
import { Box, Container } from '@mui/system';
import houseCard from '../../assets/ambience.jpg';

const Ambiance = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
      flexDirection: 'column',
      alignItems: 'center', // Corrected typo here
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: '#7B8087',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: theme.spacing(7),
    justifyContent: 'space-between',
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: theme.spacing(5),
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={houseCard} alt='house' style={{ maxWidth: '100%' }} />
          </ImgContainer>
          <Box>
            <Divider>
              <Typography
                sx={{
                  fontSize: '35px',
                  color: '#000339',
                  fontWeight: '700',
                  my: 3,
                }}
              >
                You've found a ambiance you love
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#5A6473',
                  lineHeight: '27px',
                }}
              >
                Discover the epitome of culinary excellence at Savoria, where every visit is an enhancing rendezvous with the art of dining.
              </Typography>
            </Divider>
          </Box>
        </CustomBox>
        <TextFlexbox>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeText>250+</LargeText>
            <SmallText>Dishes</SmallText>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeText>300+</LargeText>
            <SmallText>Trusted clients</SmallText>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeText>350+</LargeText>
            <SmallText>Delivery per Day</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Ambiance;
