import React from 'react'
import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { styled } from '@mui/system'

import fbiIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import linkedinIcon from '../../assets/instagram.png'
function Footer() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      textAlign: 'center',
    }

  }))
  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems:'center',
    gap: '1rem',
    [theme.breakpoints.down("sm")]: {
      justifyContent:'center',
    }

  }))
  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#000066',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#66B2FF'
    }

  }))
  return (
    <Box sx={{ py: 10, backgroundColor: '#FFF6B2' }}>
      <CustomContainer>
        <Box>
          <Typography sx={{
            fontSize: '20px',
            color: '#1C1C1D',
            fontWeight: '700',
            mb: 2,
          }}>
            Featured
          </Typography>
          <FooterLink>Guides</FooterLink>
          <br />
          <FooterLink>Services</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#1C1C1D',
              fontWeight: '700',
              mb: 2,
            }}>
            Overview
          </Typography>
          <FooterLink>Location</FooterLink>
          <br />
          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Term of use & Privacy Policies</FooterLink>
        </Box>
        <Typography
          sx={{
            fontSize: '20px',
            color: '#1C1C1D',
            fontWeight: '700',
            mb: 2,
          }}
        >
          Get in touch
        </Typography>

        <Typography
          sx={{
            fontSize: '20px',
            color: '#1C1C1D',
            fontWeight: '700',
            mb: 2,
          }}>
          Keep in touch with social media pages
        </Typography>

        <IconBox>
          <img src={fbiIcon} alt='fbIcon' style={{ cursor: 'pointer' }} />
          <img src={twitterIcon} alt='twitterIcon' style={{ cursor: 'pointer' }} />
          <img src={linkedinIcon} alt='linkedinIcon' style={{ cursor: 'pointer' }} />
        </IconBox>
        <Box>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default Footer
