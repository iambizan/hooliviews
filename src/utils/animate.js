export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
}

export const fadingParent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
}

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
    x: 100,
  },

  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}

export const slider = {
  hidden: { x: '130%', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
}

// to set stagger duration btw the children
export const sliderHolder = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: 'easeOut' } },
}

export const zoom = {
  hidden: {
    scale: -1,
    opacity: 0,
  },

  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
}

export const drop = {
  hidden: { y: '-130%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
}
