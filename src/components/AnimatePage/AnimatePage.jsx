"use client"

import { AnimatePresence } from 'framer-motion'
import React from 'react'

const AnimatePage = ({ children }) => {
    return (
        <AnimatePresence mode='wait'>
            {children}
        </AnimatePresence>
    )
}

export default AnimatePage