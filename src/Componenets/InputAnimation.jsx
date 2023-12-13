import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const InputAnimation = () => {
  const items=['item1','item2','item3','item4','item5']
  const variants={
    visable:(i)=>({
      opacity:1,
      transition:{
        delay:i*0.9,
        typeof:'spring',
        stiffness:100,
        damping:10,
        staggarChildren:10.5,
      }
    }),
    hidden:{
      opacity:0,
      x:0,
    }
  }
  return (
   
    <Card>
    <div className='box'>
    <motion.div
      className='input'
      initial={{x:0,opacity:0,boxShadow:'1px 1px 10px 3px white'}}
    animate={{opacity:1 ,}}
    whileHover={{scale:0.1,x:100,rotate:360,backgroundColor:'white',borderRadius:'50%',border:'5px solid gold',boxShadow:'10px 10px 60px 10px gold'}}
    transition={{duration:3}}
    drag
    dragConstraints={{
      
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
      dragElastic:0.5,
      
    }}
      />
    </div>
    <ItemContent>
    { 
    items.map((items,index)=>(
      <motion.div key={index} className='item'
      variants={variants}
      initial='hidden'
      animate='visable'
      custom={index}
    > 
         <ul>
        <li className='li'key={items.id}>{items}</li>
      </ul>
      </motion.div>
     
    ))}

    </ItemContent>
    </Card>
  )
}

export default InputAnimation
const ItemContent=styled.div`
.item{
 color:red;
}
`
const Card = styled.div`
display:flex;
felx-direction:column;
justify-content:center;
align-items:center;
gap:100px;
margin-top:20px;

.li{
  color:red;
}

.input{
  width:150px;
  height:150px;
  background-color:red;
  border-radius:10px;
}
.box{
  display:flex;
  justify-content:center;
  align-items:center;
  width:200px;
  height:200px;
  border-radius:50%;
  border:5px solid red;
  
 
}
`