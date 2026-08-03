import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Smile, PartyPopper } from 'lucide-react';

export default function DateProposal() {
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  // Moves the 'No' button randomly when hovered, touched, or clicked
  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 260) - 130;
    const randomY = Math.floor(Math.random() * 260) - 130;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  // Handles clicking the 'Yes' button
  const handleYesClick = () => {
    setHasSaidYes(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff']
    });
  };

  return (
    <div style={styles.container}>
      {/* Floating background hearts */}
      <div style={styles.backgroundDecoration}>
        <Heart style={{ ...styles.bgHeart, top: '10%', left: '15%' }} size={40} />
        <Heart style={{ ...styles.bgHeart, top: '20%', right: '20%' }} size={30} />
        <Heart style={{ ...styles.bgHeart, bottom: '15%', left: '25%' }} size={50} />
        <Heart style={{ ...styles.bgHeart, bottom: '20%', right: '15%' }} size={35} />
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.card}
      >
        {!hasSaidYes ? (
          <>
            {/* Asking Screen */}
            <div style={styles.iconWrapper}>
              <Heart size={64} color="#ff4d6d" fill="#ff4d6d" />
            </div>

            <h1 style={styles.heading}>Will you go out on a trip with me?</h1>
            <p style={styles.subheading}>I promise good food, great laughs, and a memorable time! ✨</p>

            <div style={styles.buttonGroup}>
              {/* YES Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                style={styles.yesButton}
              >
                Yes! 💖
              </motion.button>

              {/* NO Button (Escapes cursor/touch) */}
              <motion.button
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                style={styles.noButton}
              >
                No 😢
              </motion.button>
            </div>
          </>
        ) : (
          <>
            {/* Success Screen */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              <div style={styles.happyIconWrapper}>
                <Smile size={80} color="#ff4d6d" />
                <PartyPopper size={48} color="#ff758f" style={styles.partyIcon} />
              </div>

              <h1 style={styles.heading}>Yay! I can't wait! 🥰</h1>
              <p style={styles.subheading}>
                You just made my day! Let me know when you are free! 🎉✨
              </p>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff0f3',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    overflow: 'hidden',
    padding: '20px'
  },
  backgroundDecoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  bgHeart: {
    position: 'absolute',
    color: '#ffb3c1',
    opacity: 0.5
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '40px 32px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(255, 77, 109, 0.15)',
    zIndex: 1,
    border: '2px solid #ffccd5'
  },
  iconWrapper: {
    marginBottom: '20px',
    display: 'inline-block'
  },
  happyIconWrapper: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '20px'
  },
  partyIcon: {
    position: 'absolute',
    top: '-10px',
    right: '-20px'
  },
  heading: {
    color: '#590d22',
    fontSize: '26px',
    margin: '0 0 12px 0',
    fontWeight: '700'
  },
  subheading: {
    color: '#800f2f',
    fontSize: '15px',
    margin: '0 0 32px 0',
    lineHeight: '1.5'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    position: 'relative',
    minHeight: '60px'
  },
  yesButton: {
    backgroundColor: '#ff4d6d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50px',
    padding: '14px 32px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(255, 77, 109, 0.35)',
    outline: 'none'
  },
  noButton: {
    backgroundColor: '#fff0f3',
    color: '#ff4d6d',
    border: '2px solid #ff4d6d',
    borderRadius: '50px',
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none'
  }
};
