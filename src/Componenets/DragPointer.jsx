import React, { useEffect, useRef ,useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useFollowPointer } from './useFollowPointer'; // Assuming 'useFollowPointer' is in the same directory

const DragPointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <Container>
      <motion.div
        className='box'
        ref={ref}
        animate={{ x, y }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 3,
          restDelta: 0.001,
        }}
      ></motion.div>
    </Container>
  );
};

export default DragPointer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;

  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
 box-shadow: 1px 1px 5px 2px white;
  }
`;

// export function useFollowPointer(ref) {
//   const [point, setPoint] = React.useState({ x: 0, y: 0 });

//   React.useEffect(() => {
//     if (!ref.current) return;

//     const handlePointerMove = ({ clientX, clientY }) => {
//       const element = ref.current;

//       const x = clientX - element.offsetLeft - element.offsetWidth / 2;
//       const y = clientY - element.offsetTop - element.offsetHeight / 2;
//       setPoint({ x, y });
//     };

//     window.addEventListener('pointermove', handlePointerMove);

//     return () => {
//       window.removeEventListener('pointermove', handlePointerMove);
//     };
//   }, [ref]);

//   return point;
// }

export const useFollowPointer=(ref)=>{
    const [pointer,setPointer] =useState({x:0,y:0})

    useEffect(()=>{
        if(!ref.current) return;
        const handlePointerMove =({clientX, clientY})=>{
            const element=ref.current;

            const  x = clientX-element.offsetLeft -element.offsetWidth/2;
            const  y = clientY-element.offsetTop -element.offsetHeight/2;
            setPointer({x,y})
        }
        window.addEventListener('pointermove', handlePointerMove)
        return()=>{
        window.removeEventListener('pointermove',handlePointerMove)
        };
    },[ref]);
    return pointer;
}
