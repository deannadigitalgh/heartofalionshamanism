// ==========================================================================
// Heart Of A Lion Shamanism - Hero Section Configuration
// Single source of truth for all hero sections across the website
// ==========================================================================

export const heroConfig = {
  // Global background image and gradient settings
  backgroundImage: '/bg/BlueRidgeMountainsBackground1.jpg',
  
  // Gradient overlay - adjust opacity to balance text readability with background visibility
  gradientStart: 'rgba(0, 0, 0, 0.5)',   // Top of hero (darker)
  gradientEnd: 'rgba(0, 0, 0, 0.4)',     // Bottom of hero (lighter)
  
  // Text color for hero content
  textColor: '#FFFFFF',
  
  // Background attachment for parallax effect on scroll
  backgroundAttachment: 'fixed',
  
  // Background size and position
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

// Helper function to generate inline styles from config
export const getHeroStyles = () => {
  return `background-image: linear-gradient(${heroConfig.gradientStart}, ${heroConfig.gradientEnd}), url('${heroConfig.backgroundImage}'); background-size: ${heroConfig.backgroundSize}; background-position: ${heroConfig.backgroundPosition}; background-attachment: ${heroConfig.backgroundAttachment};`;
};

export default heroConfig;
