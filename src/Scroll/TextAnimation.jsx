import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useRef } from 'react'
import { useScroll,transform } from 'framer-motion'

const TextAnimation = () => {
    const ref=useRef()
    const {scrollProgress}=useScroll({
        target:ref,
    })
    const yBg=transform(scrollProgress,[0,1],[0,-1000])
    

  return (
    <div>
        {/* <div>
     <TextContent>
          <Background>
        <Text>Your Text Here</Text>
      </Background>

     </TextContent>
     </div> */}
     <BackGroundImagesCard ref={ref}>
        <motion.div className='mountains' >
        <motion.div  className='stars' style={{y:yBg}} animate={{y:yBg}}scrollProgress="scrollprogress">
            <img className='img' src="https://media.istockphoto.com/id/178149253/photo/deep-space-background.jpg?s=612x612&w=0&k=20&c=w1hb2H1C-blV918LoG9mGB02nJY6cLJpR5Szfg7sLqE=" alt="" />
            <motion.h1 className='text'
            animate={{y:scrollProgress*100}}
            >
                What You Do ?

            </motion.h1>
            
        </motion.div>
        </motion.div>

     </BackGroundImagesCard>
    </div>
  )
}

export default TextAnimation

const BackGroundImagesCard = styled.div`
 
 height: 100vh;
  width: 100%;
  .mountains{
    background-image: url("https://media.istockphoto.com/id/618428174/photo/night-mountains-before-sunrise-in-the-egypt.jpg?s=612x612&w=0&k=20&c=McYL9Lc992jJ_CV2SWh4GuH20Fmp0OyeWUzm5KThzgQ=");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    z-index: -10;
  }

    .img{
        height: 50%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    } 
    .stars{
        height: 50%;
        width: 100%;
        position: absolute;
        z-index: -1;
        overflow: hidden;
    
        justify-content: center;
        align-items: center;
        flex-direction: column;
      
        backdrop-filter: blur(5px);
        transition: all 1s ease;
        .text{
            color: white;
            font-size: 100px;
            font-weight: bold;
            text-align: center;
            letter-uppercase: 10px;
            text-shadow: 5px px 8px rgb(255, 255, 255);
          
           

        }
    }
`;


// const TextContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f0f0; /* Set your desired background color */
// `
// const Background = styled.div`
//   position: relative;
// `;

// const Text = styled.span`
//   font-size: 36px;
//   font-weight: bold;
//   color: #fff; /* Set your desired text color */
//   padding: 10px 20px;
//   position: relative;
//   z-index: 1;

//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-color: #3498db; /* Set your desired background color */
//     top: 0;
//     left: 0;
//     z-index: -1;
//     transform: skewX(-20deg);
//   }

//   &::before {
//     transform-origin: bottom right;
//   }

//   &::after {
//     transform-origin: top left;
//   }
// `;