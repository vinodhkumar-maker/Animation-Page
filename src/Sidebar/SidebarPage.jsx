import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Linkbutton from './Linkbutton';
import Togglecard from './Togglecard';
import { useState } from 'react';

const SidebarPage = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Container>
      <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
        <motion.div className='bg' variants={variants}>
        <Linkbutton className='link' />
        </motion.div>
       
        <Togglecard setOpen={setOpen} />
      </motion.div>
    </Container>
  );
};

export default SidebarPage;

const Container = styled.div`


  .sidebar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color:white;
    border:1px solid black;
   margin:20px
   position:relative;
  }
 
  

`;
