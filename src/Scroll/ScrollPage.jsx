import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScrollPage = () => {
  const itemsVariant = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: -100,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <Card>
      <div className='container'>
        <motion.div className='main'>
          <div className='text-card'>
            <motion.h1
              className='top'
              variants={itemsVariant}
            >
              HARVEYTYLER
            </motion.h1>
            <motion.h1
              className='middle'
              whileHover={{
                scale: 1.2,
                textShadow: '0 0 8px rgb(red)',
                boxShadow: '0 0 8px rgb(255,255,255)',
                borderRadius: 'none',
              }}
              animate='scrollButton'
              variants={itemsVariant}
            >
              Web developer and UI designer
            </motion.h1>
          </div>
          <motion.div className='btn'>
            <motion.button
              whileHover={{
                scale: 1.1,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
            >
              Contact Works
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </Card>
  );
};

export default ScrollPage;

const Card = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxc-Sm9qW7EwIoHaZibe_eyHvDUW0rC0obw&usqp=CAU');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 20px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150vh;
  }

  .text-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 40px;
    text-shadow: 0 0 8px rgb(255, 255, 255);
    letter-spacing: 10px;

    @media (max-width: 768px) {
      font-size: 30px; // Adjust the font size for smaller screens
    }
  }

  .middle {
    text-align: center;
    color: red;
    font-size: 50px;
    text-shadow: 0 0 8px rgb(255, 255, 255);

    @media (max-width: 768px) {
      font-size: 25px; // Adjust the font size for smaller screens
    }
  }

  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: lightblue;
      color: green;
      transform: scale(1.1);
    }
  }
`;
