import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const items = ["Home", "About", "Contact", "Services", "Portfolio"];

const Linkbutton = () => {
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.01,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };

    return (
        <LinkCard>
            <motion.div className='link' variants={variants}>
                {items.map((item) => (
                    <motion.a className='item'
                        href={`#${item}`}
                        key={item}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate="open"
                    >
                        {item}
                    </motion.a>
                ))}
            </motion.div>
        </LinkCard>
    );
};

export default Linkbutton;

const LinkCard = styled.div`
display:flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 100px;
    .link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:300px;
        width: 300px;
      
        position: absolute;
       top:30%;
        transform: translate(-50%, -50%);
    }
    .item {
       color:red;
       text-decoration:none;
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        margin: 10px;
        letter-spacing: 2px;
        transition: 0.5s;  
    }
`;
