
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PointerPage = () => {
  const [see, setSee] = useState(true);

const show={
    opacity:1,
    display:'black'
}
const hide={
    opacity:0,
    display:"none"
}

  return (
    <MainCard>
      <div>
        <motion.div className='box' animate={see ? hide:show}/>
        <motion.button className='button' onClick={()=>setSee(!see)}>
            {see ? hide :show}
        </motion.button>
      </div>
    </MainCard>
  );
};

export default PointerPage;

const MainCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ff7675;
    border-radius: 10px;
  }

  .button {
    margin-top: 20px;
    height: 30px;
    width: 70px;
    border-radius: 10px;
  }
`;
