import React from 'react'
// import SimpleFrame from './SimpleFrame'
import styled from 'styled-components'
// import Parcentage from './Componenets/Parcentage'
// import FromValidation from './Componenets/FromValidation'
import DragPointer from './Componenets/DragPointer'
import Pointer from './Componenets/Pointer'

// import TextAnimation from './Scroll/TextAnimation'
// import Ideas from './Componenets/Ideas'
// import SidebarPage from './Sidebar/SidebarPage'
// import ScrollPage from './Scroll/ScrollPage'
// import { motion } from 'framer-motion'
// import InputAnimation from './Componenets/InputAnimation'
// import PointerPage from './PointerPage'
  

const App = () => {
  // const [isOn, setIsOn] = React.useState(false)
  // const toggle = () => {
  //   setIsOn(!isOn)

  // }

  return (
    <Container>

      <div>
      <div>
      {/* <FromValidation/> */}
      <DragPointer/>
    <Pointer/>
        {/* <Parcentage/> */}
       
        {/* <Ideas/> */}
        {/* <TextAnimation/> */}
        {/* <ScrollPage/> */}
        
        {/* <SidebarPage/> */}
      
          {/* <SimpleFrame /> */}
          {/* <PointerPage/> */}
        
        </div>
      </div>
       {/* <Main style={{
        background: isOn ? 'black' : 'white'
      }}
      >

       <div className='s'>
       <switch className='switch' onClick={toggle} data-isOn={isOn}
          style={{
            background: isOn ? 'linear-gradient(to right, #00dbde, #fc00ff)' : '(linear-gradient(to right, #ff0099, red)'
          }}
        >
          <motion.div className="handle" layout transition={{ type: 'spring', stiffness: 700, damping: 30 }} />
        </switch>
       </div>
        <InputAnimation/>
      </Main> */}
     
    </Container>
  )
}

export default App
const Container = styled.div``
// const Main = styled.div`
// height: 100vh;

// .s{
//   display: flex;
//   justify-content: end;
//   align-items: end;
//   flex-direction: column;
//   position: sticky;
  
// }
// .switch[data-isOn="true"] {
//   justify-content: flex-end;
// }

// .switch{
//   width: 160px;
//   height: 100px;
//   background:linear-gradient(to right, #ff0099, red);
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   border-radius: 50px;
//   padding: 10px;
//   cursor: pointer;
//   margin: 50px; 
// }
// .handle {
//   width: 80px;
//   height: 80px;
//   background-color:white;
//   border-radius: 40px;
// }


// `


