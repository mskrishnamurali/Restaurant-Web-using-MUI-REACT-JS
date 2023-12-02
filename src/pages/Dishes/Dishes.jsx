// Dishes.jsx
import React from 'react';
import CustomCard from '../../components/CustomCard/CustomCard';
import { Data } from '../../StaticData/Data';
import { Box, Container, styled, Typography } from '@mui/material';

const Dishes = () => {
  const DishesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold', ml: '13px' }}>
            Featured Dishes
          </Typography>
          <Typography sx={{ color: '#000339', fontSize: '16px', mt: 1, ml: '13px' }}>
            Explore the variety of South Indian Dishes!!
          </Typography>
        </PropertiesTextBox>
        <DishesBox>
          {Data.map((foodItem) => (
            <CustomCard
              key={foodItem.id}
              img={foodItem.img}
              price={foodItem.price}
              item={foodItem.likes}
              heart={foodItem.likes}
              share={foodItem.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
};

export default Dishes;