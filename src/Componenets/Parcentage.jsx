import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const PercentageProgress = () => {
    const items = [
        {
            id: 1,
            name: 'HTML',
            value: 90,
            img: 'https://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif',
        },
        {
            id: 2,
            name: 'React',
            value: 80,
            img: 'https://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif',
        },
        {
            id: 3,
            name: 'CSS',
            value: 70,
            img: 'https://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif',
        },
        {
            id: 4,
            name: 'JavaScript',
            value: 60,
            img: 'https://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif',
        },
        {
            id: 5,
            name: 'React Native',
            value: 50,
            img: 'https://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif',
        },
    ];

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });

    const invertedProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 1,
    });

    return (
        <ProgressContainer>
            <motion.div className='progress-container'>
                <motion.div className='progress'>
                    <p className='sticky-text'>Progress</p>
                    <motion.h1
                        className='bar'
                        style={{ scaleX: invertedProgress }}
                    ></motion.h1>
                </motion.div>
            </motion.div>
            <motion.div className='card' ref={ref}>
                {items.map((item) => (
                    <motion.div className='item-card' key={item.id}>
                        <p>{item.name}</p>
                        <div className='img'>
                            <motion.img
                                src={item.img}
                                alt={item.name}
                                whileHover={{ scale: 1.1 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </ProgressContainer>
    );
};

export default PercentageProgress;

const ProgressContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .progress-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  .progress {
    display: flex;
    flex-direction: column;
    align-items: center;

    .bar {
      height: 5px;
      width: 100%;
      color: red;
      border: 2px solid red;
      background-color: red;
      position: sticky;
      top: 0;
    }

    p.sticky-text {
      font-size: 0.8rem;
      font-weight: bold;
      color: green;
      margin-bottom: 1rem;
    }
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50vh;

    .item-card {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 0.5rem;

      p {
        font-size: 0.8rem;
      }
    }

    .img {
      overflow: hidden;
      img {
        width: 200px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
      }
    }
  }
`;
