import React from 'react'
import {styled} from '@mui/system'
import { Button } from '@mui/material';

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '7px',
    padding: '0.5rem 1.25rem',
    textTransform: 'none',
    display: 'block',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: 'hoverBackgroundColor', // Adjust this value
      color: 'hoverTextColor', // Adjust this value
    },
    [theme.breakpoints.down('md')]: {
      margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, 'auto', 3, 'auto'),
      width: (welcomeBtn || getStartedBtn) && '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && '90%',
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;