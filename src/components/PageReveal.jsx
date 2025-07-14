import React from 'react'
import { motion } from 'framer-motion'

const PageReveal = ({ children, page }) => {
    return (
        <div>
            <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.6, 0.6, 0.01, 0.99]
                }}>
                {children}
            </motion.div>
        </div>
    )
}

export default PageReveal
