
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Ideas = () => {
    const ref = useRef(null)
    const CardInvView = useInView({
        ref, margin: '-100px'

    })


    const variants = {
        initial: {
            x: -500,
            y: 300,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            trasation: {
                duration: 1,
                straggerChildren: 0.5,
                repeate: Infinity,
            }

        }
    }
    const itemsVariant = {
        initial: {
            x: 0,
            opacity: 0,
        },
        animate: {
            x: -100,
            opacity: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 1.5,
                repeat: Infinity,
            },
        },
    }

    return (
        <>
        <Container>
            <motion.div className='main-card'>
                <motion.div className='text-card'
                    animate={CardInvView.inView ? 'animate' : 'initial'}
                    ref={ref}
                    initial='initial'>

                    <motion.div className='text-div' variants={itemsVariant} animate='scrollButton'>
                        <div className='circle'><p>=</p></div>
                        <div className='divid-text'>
                            <p>I focus on helping your brand grow<br />
                                and move forword
                            </p>
                            <hr />
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className='img-card' variants={variants} initial='initial' animate='animate'>
                    <motion.div className='img-div'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1lZ-eUTyUaHp3E3DyQdz8nxOobW476QKmA&usqp=CAU' alt='idea' />
                        <motion.h1 className='big' whileHover={{ color: '#fccb00', transition: { duration: 0.1 } }} >Uniqure</motion.h1>
                        <h1 className='small' >Ideas</h1>
                    </motion.div>
                    < motion.div className='btn-div'>
                        < motion.h1 className='for' whileHover={{ color: '#fccb00', transition: { duration: 0.1 } }}><b>For Your</b></motion.h1>
                        <h1 className='business'>Business.</h1>
                        <button className='btn'>WHAT WE DO?</button>
                    </ motion.div>
                </motion.div>
                <motion.div className='footer-card' >

                    <motion.div className='footer-div' variants={variants} initial='initial' animate='animate' >
                        < motion.h1 className='brand' whileHover={{ color: '#fccb00', transition: { duration: 0.1 } }} >Branding</motion.h1>
                        <p className='pera'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. consecter adipisicing elit.Nostrum libero enim nisi ailqum libero
                            magic eui ex corrpti animi! Ad quas, voluptatum, quibusdam, voluptatesmaiores?

                        </p>
                        <button className='btn-go'>Go</button>
                    </motion.div>
                    <motion.div className='footer-div' variants={variants} initial='initial' animate='animate'>
                        < motion.h1 className='brand' whileHover={{ color: '#fccb00', transition: { duration: 0.1 } }}>Branding</motion.h1>
                        <p className='pera'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. consecter adipisicing elit.Nostrum libero enim nisi ailqum libero
                            magic eui ex corrpti animi! Ad quas, voluptatum, quibusdam, voluptatesmaiores?

                        </p>
                        <button className='btn-go'>Go</button>
                    </motion.div>
                    <motion.div className='footer-div' variants={variants} initial='initial' animate='animate'>
                        < motion.h1 className='brand' whileHover={{ color: '#fccb00', transition: { duration: 0.1 } }}>Branding</motion.h1>
                        <p className='pera'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. consecter adipisicing elit.Nostrum libero enim nisi ailqum libero
                            magic eui ex corrpti animi! Ad quas, voluptatum, quibusdam, voluptatesmaiores?

                        </p>
                        <button className='btn-go'>Go</button>
                    </motion.div>
                    <motion.div className='footer-div' variants={variants} initial='initial' animate='animate'>
                        < motion.h1 className='brand' whileHover={{ color: '#fccb00', transition: { duration: 0.1 } }}>Branding</motion.h1>
                        <p className='pera'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. consecter adipisicing elit.Nostrum libero enim nisi ailqum libero
                            magic eui ex corrpti animi! Ad quas, voluptatum, quibusdam, voluptatesmaiores?
                        </p>
                        <button className='btn-go'>Go</button>
                    </motion.div>
                </motion.div>
            </motion.div>
           

        </Container>
      
        </>
    )
}

export default Ideas
const Container = styled.div`



.main-card{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: grey;

  

    .text-card{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
    

        .text-div{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1160px;
          height: 20vh;
            .circle{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 80px;
                height:80px;
                border-radius: 50%;
                background-color:white;
                margin-left: 20px;
                p{
                    font-size: 30px;
                    font-weight: 800;
                    color: black;
                }

            }
            .divid-text{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 40px;
            p{
                font-size: 20px;
                text-align:right;
                color: white;
                
            }
            hr{
                border: 1px solid white;
                width: 480px;
            }
            }
        }

    }
    .img-card{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
      
        .img-div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
            img{
                width: 300px;
                height: 100px;
               border-radius: 50px;
            }
            .big{
                font-size: 80px;
                font-weight: 800;
                color: white;
            }
            .small{
                color: white;
                font-size: 80px;
                font-weight: 100;
                    color: white;   
            }
        }
        .btn-div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .for{
                color: white;
                font-size: 80px;
                font-weight: 700;
                    
            }
            .business{
                color: white;
                font-size: 80px;
                font-weight: 100;
                    color: white;   
            }
            .btn{
                width: 300px;
                height: 100px;
                border:none;
                border-radius: 50px;
                padding: 10px 15px 10px 15px;
                background-color: #fccb00;
                background-brightness: 100%;
                color: black;
                font-size: 22px;
                font-weight: 500;
                border:none;
            }
        }
        

    }
    .footer-card{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 100px;
        .footer-div{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            height: 300px;
            width: 250px;
            padding: 50px;
            border:1px solid white;
            .brand{
                font-size: 40px;
                font-weight: 800;
                color: white;
            }
            .pera{
               
                text-align:left;
                color: white;
            }
            .btn-go{
                margin-top: 20px;
                width: 90%;
                height: 50px;
                border:none;
                border-radius: 10px;
                padding: 10px 15px 10px 15px;
                background-color: #fccb00;
                background-brightness: 100%;
                color: black;
                font-size: 20px;
                font-weight: 500;
            }
        }



}
`


