module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'max-2xl': {'max': '1535.98px'},
        'max-xl': {'max': '1279.98px'},
        'max-lg': {'max': '1023.98px'},
        'max-md': {'max': '767.98px'},
        'max-sm': {'max': '639.98px'},
      },     
      gridTemplateColumns: {
        'nav': 'repeat(auto-fit, minmax(100px, auto))',
        'socials': 'repeat(auto-fit, minmax(56px, auto))',
        'loader': 'auto 1fr',
      },  
      gridTemplateRows: {
        'footer': '1fr auto auto',
        'contact': 'auto 1fr',
      },    
      backgroundPosition: {
        'icon-center': 'center 6px',
      }, 
      fontFamily: {
        'montserrat': 'Montserrat, sans-serif'
      },     
      keyframes: {
        scaleRipple: {
          '0%': { transform: 'scale(0.1)', opacity: '1' },
          '70%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { opacity: '0' },
        }
      },   
      animation: {
        scaleRipple: 'scaleRipple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8)',
      }          
    },
  },
  plugins: [],
}