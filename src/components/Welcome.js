import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = ({ userName }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/"); // Navigate to the home page after 2 seconds
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <motion.div
            className="d-flex align-items-center justify-content-center"
            style={{ height: '100vh', background: 'linear-gradient(135deg, #72c2ff, #ff7eb3)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <motion.h1
                className="text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
            >
                Welcome, {userName}!
            </motion.h1>
        </motion.div>
    );
};

export default Welcome;
