import { motion } from 'framer-motion';
import styled from 'styled-components';

const Togglecard = ({ setOpen }) => {
  return (
    <Toggle>
      <button onClick={() => setOpen((prev) => !prev)}>
        <svg width='25' height='15'  gap='2' viewBox='0 0 23 23'>
          <motion.path
            strokeWidth="3"
            stroke='black'
            strokeLinecap='round'
            className='img'
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
         
        </svg>
        <svg width='25' height='15' viewBox='0 0 23 23'>
          <motion.path
            strokeWidth="3"
            stroke='black'
            strokeLinecap='round'
            className='img'
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
         
        </svg>
        <svg width='25' height='15' viewBox='0 0 23 23'>
          <motion.path
            strokeWidth="3"
            stroke='black'
            strokeLinecap='round'
            className='img'
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
         
        </svg>
        
        

        

      </button>
    </Toggle>
  );
};

export default Togglecard;

const Toggle = styled.div`
display:flex;
justify-content:center;
align-items:center;


  button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 30px;
    overflow: hidden;
    border: none;
    
  }
    

  
`;
