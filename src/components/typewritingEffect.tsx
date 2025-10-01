import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewritingEffectProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

const lettersAndSymbols = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '$', '%'
];

const TypewritingEffect: React.FC<TypewritingEffectProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 80,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex(0);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isAnimating || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const char = text[currentIndex];
    let flickerCount = 0;
    const maxFlickers = 2;

    const flickerInterval = setInterval(() => {
      if (flickerCount < maxFlickers) {
        // Show random character
        const randomChar = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
        setDisplayText(prev => prev.slice(0, currentIndex) + randomChar);
        flickerCount++;
      } else {
        // Show correct character
        setDisplayText(prev => prev.slice(0, currentIndex) + char);
        clearInterval(flickerInterval);
        
        // Move to next character
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, 30);
      }
    }, 30);

    return () => clearInterval(flickerInterval);
  }, [currentIndex, text, isAnimating]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      {isAnimating && currentIndex < text.length && (
        <motion.span
          className="inline-block"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default TypewritingEffect;