'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MyResume() {
	const [ isVisible, setIsVisible ] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<motion.a
			href="https://drive.google.com/file/d/1M6J-KxvDOn5tQmoOSg63QZWYz2H0KAIC/view?usp=drivesdk"
			target="_blank"
			className="fixed bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-50"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
			transition={{ duration: 0.3 }}
		>
			Resume
		</motion.a>
	);
}

