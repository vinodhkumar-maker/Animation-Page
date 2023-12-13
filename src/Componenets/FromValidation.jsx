import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const FromValidation = () => {
    const itemVariants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duartion: 1,
                damping: 1,
                sraggrerChildren: 0.5,
            }
        }
    }

    return (
        <Container>
            <motion.div className='header' variants={itemVariants}  initial='initial' whileInView='animate'>

                <motion.div className='text-card'
                    variants={itemVariants}
                  
                    
                    whileHover={{ border: '1px solid white', scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <motion.div>
                        <motion.h1 whileHover={{ color: 'orange', scale: 1.1, transition: { duration: 0.5 } }}>Let's Work together</motion.h1>
                    </motion.div>
                    <motion.div>
                        <motion.p whileHover={{ color: 'red', scale: 1.1, transition: { duration: 0.5 } }}>Mail</motion.p>
                        <motion.span whileHover={{ color: 'orange', scale: 1.1, transition: { duration: 0.5 } }}>hello@vinodh</motion.span>
                    </motion.div>
                    <motion.p whileHover={{ color: 'red', scale: 1.1, transition: { duration: 0.5 } }}>Address</motion.p>
                    <motion.span whileHover={{ color: 'orange', scale: 1.1, transition: { duration: 1 } }}>123-290-bangalore</motion.span>
                    <motion.div>
                        <motion.p whileHover={{ color: 'red', scale: 1.1, transition: { duration: 0.5 } }}>Phone</motion.p>
                        <motion.span whileHover={{ color: 'orange', scale: 1.1, transition: { duration: 0.5 } }}>123456677</motion.span>
                    </motion.div>
                </motion.div>

                <motion.div className='text-animate'
                    variants={itemVariants}
                    initial='initial' animate='animate'
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <motion.div className='call'
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{ delay: 3, duration: 0.5 }}
                    >

                        <motion.img className='call-img' src="data:image/jpeg;base64,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" alt=""
                            whileHover={{ border: '5px solid orange', scale: 1.1, transition: { duration: 0.5 } }}
                            initial={{ opacity: 1 }}
                            whileInView={{ opacity: 0 }}
                            transition={{ delay: 3, duration: 1 }}

                        />
                    </motion.div>
                    <motion.form variants={itemVariants}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
                    >
                        <motion.input type="text" placeholder='Name ...' variants={itemVariants} whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} />
                        <motion.input type="text" placeholder='Email ...' variants={itemVariants} whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} />
                        <motion.textarea name="" id="" cols="30" rows="10" placeholder='Message ...' variants={itemVariants}
                            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                        >
                        </motion.textarea>
                        <motion.button variants={itemVariants}
                            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </Container>
    )
}

export default FromValidation
const Container = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
background-color:grey;
height: 100vh;
width: 100%;
.header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 40vh;
    position: relative;
}

.text-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding: 20px;
 
    
    h1{
        font-size: 20px;
        font-weight: 500;
        color: white;
        margin-bottom: 10px; 
    }
    p{
        font-size: 10px;
        font-weight: 500;
        color:white;
        margin-bottom: 10px;
    }
    span{
        font-size: 10px;
        font-weight: 500;
        color:white;
        margin-bottom: 10px;
    }
}

    .text-animate{
        display: flex;
        flex-direction: column;
        align-items: center;
    

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           

            input{
                height: 30px;
               border-radius: 5px;
                margin:10px;
                width: 98%;
                border: none;
                color: #fff;
                padding-left: 5px;
              
               background-color: #000;
                // &:focus{
                //     outline: none;
                // }
                
            }
            textarea{
                color: #fff;
                height: 100px;
                margin-bottom: 10px;
                border-radius: 5px;
                padding: 5px;
                background-color: #000;
                //  &:focus{
                //     outline: none;
                // }
                  
            }
    
            button{
                border-radius: 5px;
                height: 30px;
                border: none;
                outline: none;
                background-color: #000;
                color: #fff;
                cursor: pointer;
                width: 99%;
                background-color:orange;
            } 
            

        }
        .call{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            position: absolute;
            .call-img{
                height: 250px;
                width: 250px;
                border-radius: 50%;
                color: red;
                border-radius: 50%;
               
                border: 5px solid orange;
            }
               
        }
        
}

`