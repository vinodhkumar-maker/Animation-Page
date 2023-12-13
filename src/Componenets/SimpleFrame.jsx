import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';



const SimpleFrame = () => {
  const [open, setOpen] = useState(false);
  const handleTogleOpen = () => {
    setOpen(!open);
  };

  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handlePointer = (e) => {
    const { pageX, pageY } = e;
    setPoint({ x: pageX, y: pageY });
  };

  useEffect(() => {
    setPoint({ x: 0, y: 0 });
  }, [point]);

  const ref = useRef();
  

  return (
    <>
      <Card>
        <motion.div
          className="box"
          animate={{
            rotate: [0, 180, 0, 0.2, 0],
            scale: [1, 1.3, 1, 2.2, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            time: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
          }}
        />
      </Card>

      <Drag>
        <div
          className="top"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <motion.div
            className="page"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          />
          <motion.div
            className="page"
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
          />
        </div>
      </Drag>

      <CardBox>
        <motion.div
          className="parent"
          onClick={handleTogleOpen}
          data-open={open}
        >
          <motion.div layout className="child" />
        </motion.div>
      </CardBox>

      <Text>
        <motion.div
          className="point"
          onMouseMove={handlePointer}
          ref={ref}
            animate={{
                x: point.x,
                y: point.y,
            }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      </Text>
    </>
  );
};

export default SimpleFrame;

const Text = styled.div`
  height: 800px;
  width: 800px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .point {
    height: 100px;
    width: 100px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .parent[data-open='true'] {
    transition: all 0.5s ease-in-out;
    height: 1px;
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 1px 5px blue;
  }

  .parent {
    height: 200px;
    width: 200px;
    background: linear-gradient(to right, #ff0099, white);
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
  }

  .child {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 100px;
    height: 100px;
    border-radius: 10%;
    background: linear-gradient(to right, #ff0099, red);
  }
`;

const Drag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .top {
    display: flex;
    justify-content: center;
    gap: 10px;
    height: 400px;
    width: 400px;
    align-items: center;
    border-radius: 10%;
    background-color: #ff0099;
  }

  .page {
    width: 100px;
    height: 100px;
    border-radius: 10%;
    background-color: #fff;
    border: 1px solid black;
  }
`;
