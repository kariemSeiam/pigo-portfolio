/**
 * Framer Motion Animation Variants
 * Reusable animation presets for consistent animations across the app
 * 
 * @see CLAUDE.md - Section 9.1 for complete documentation
 */

import { Variants } from 'framer-motion'

/**
 * Fade In / Out
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
  }
}

/**
 * Slide Up (for page sections)
 */
export const slideUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1]  // Smooth overshoot
    }
  },
  exit: { 
    opacity: 0, 
    y: -60,
    transition: { duration: 0.4 }
  }
}

/**
 * Slide Down (for dropdowns, modals)
 */
export const slideDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2 }
  }
}

/**
 * Scale In (for cards, dialogs)
 */
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.34, 1.56, 0.64, 1]  // Back easing (slight overshoot)
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.2 }
  }
}

/**
 * Stagger Container (for lists)
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // 100ms delay between children
      delayChildren: 0.2      // Start after 200ms
    }
  }
}

/**
 * Stagger Item (child of staggerContainer)
 */
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

/**
 * Hover Lift (for interactive cards)
 */
export const hoverLift = {
  rest: { 
    y: 0,
    scale: 1,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  hover: { 
    y: -8,
    scale: 1.02,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  tap: { 
    y: 0,
    scale: 0.98,
    transition: { duration: 0.1 }
  }
}

/**
 * Reveal on Scroll (use with IntersectionObserver)
 */
export const revealOnScroll: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

/**
 * Page Transition
 */
export const pageTransition: Variants = {
  initial: { 
    opacity: 0,
    x: -100
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0,
    x: 100,
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 1, 1]
    }
  }
}

/**
 * Rotate 3D (for card flips)
 */
export const rotate3D: Variants = {
  front: { 
    rotateY: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  back: { 
    rotateY: 180,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

/**
 * Pulse (for notifications, badges)
 */
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

/**
 * Shimmer Effect (for loading states)
 */
export const shimmer: Variants = {
  initial: { backgroundPosition: '-1000px 0' },
  animate: {
    backgroundPosition: '1000px 0',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

