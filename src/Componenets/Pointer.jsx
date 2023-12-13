import React from 'react'
import styled from 'styled-components'
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { motion } from 'framer-motion';

const Pointer = () => {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <Card>
            <motion.div className='main'>
                < motion.h1
                    whileHover={{
                        scale: 1.2,
                        textShadow: "4px 4px 8px rgb(255,255,255)",
                        color: ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
                        transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            loop: Infinity,
                            repeatDelay: 1
                           },
                         }}
                        >
                    <span className='b'>B</span>
                    <span className='i-1'>i</span>
                    <span className='i-2'>i</span>
                    <span className='i-3'>i</span>
                    <span className='t'>t</span>
                    <span className='u'>U</span>
                    <span className='p'>p</span>
                   </motion.h1>

                   <div className="container">
                    <div className="cube" ref={ref}>
                        < motion.div className="side front"
                            whileHover={{
                                border: '5px solid white',
                                borderRadius: '50%',
                                scale: [2, 1.2, 1.1, 1, 1, 2],
                                x: [20, 0, 0, 0, 0],
                                rotate: [0, 0, 270, 270, 0],
                                transition: {
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    // loop:Infinity,
                                    repeatDelay: 1
                                },
                                textShadow: ["0px 0px 0px 0px rgb(255,255,255)"],
                                color: ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
                            }}
                            >
                        <p className='text'>Biiit Up</p></motion.div>
                        <div className="side left" />
                        <div className="side right" />
                        <div className="side top" />
                        <div className="side bottom" />
                        <div className="side back" > Biiit Up</div>
                    </div>
                </div>
            </motion.div>
        </Card>

    )
}

export default Pointer
const Card = styled.div`

display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: #282c34;

.main{  
    height: 800px;
    width: 800px;
   
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(10deg,gold,blue,red);
    box-shadow: 1px 3px 5px 2px white;
  
    border-radius: 50%;
    h1{
        position: absolute;
        bottom: 20px;
        font-size: 100px;
        font-weight: bold;
        color: white;
        text-shadow: 2px 5px 1px 1px white;
        .b{
            color: blue;
            font-size: 170px;
           
        }
        .i-1{
            color: red;
            font-size: 130px;
        }
        .i-2{
            color: yellow;
            font-size: 120px;
        }
        .i-3{
            color: green;
         
        }
        .t{
          
            color:#73d8ff;
            
            font-size: 90px;
        }
        .u{
            color: orange;
            font-size: 110px;
        }
        .p{
            color: pink;
            font-size: 90px;
        }
        

    }
   
}
   .container {
    perspective: 800px;
    width: 200px;
    height: 200px;
   
    }
    .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;
    transform-style: preserve-10d;
    }
    .side {
    position: absolute;
    width: 200px;
    height: 200px;
    box-shadow: 1px 1px 5px 2px white;
    
    }
    .front {
    background-color: blue;
    transform: translateZ(100px);
    box-shadow: 1px 1px 5px 2px white;

    .text{
        color: white;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        margin-top: 80px;
    }
    
    }
    .back {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        
    background-color: black;
    transform: rotateY(180deg) translateZ(100px);
    box-shadow: 1px 1px 5px 2px white;

    }
    .top {
    background-color: red;
    transform: rotateX(90deg) translateZ(100px);
    box-shadow: 1px 1px 5px 2px white;
    }
    .bottom {
    background-color: yellow;
    transform: rotateX(-90deg) translateZ(100px);
    box-shadow: 1px 1px 5px 2px white;
    }
    .left {
    background-color: orange;
    transform: rotateY(-90deg) translateZ(100px);
    box-shadow: 1px 1px 5px 2px white;
    }
    .right {
    background-color: purple;
    transform: rotateY(90deg) translateZ(100px);
     box-shadow: 1px 1px 5px 2px white;
    }
`