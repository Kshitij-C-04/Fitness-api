import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      
      borderTop: bodyPart === item ? '4px solid #FF2625' : '4px solid transparent',
      background: bodyPart === item ? '#FFFBF2' : '#f9f9f9',
      borderRadius: '20px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img
      src={Icon}
      alt="bodypart-icon"
      style={{
        width: '45px',
        height: '45px',
        transition: 'transform 0.3s',
      }}
    />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya, sans-serif"
      color="#3A1212"
      textTransform="capitalize"
      sx={{
        '&:hover': {
          color: '#FF2625',
        },
      }}
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
