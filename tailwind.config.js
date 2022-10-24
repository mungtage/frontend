module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        yellow: '#ffd149',
        orange: '#ffa000',
        brown: '#c67100',
        folder: '#fcd46c',
        'folder-disabled-tab': '#dcb48c',
        'point-color': '#fb94ad',
      },
      backgroundImage: {
        'upload-thumb-gif': "url('https://i.ibb.co/Yd2HVfX/cat-uploader.gif')",
        'upload-thumb': "url('https://i.ibb.co/nDxW8Vh/cat-uploader-1.png')",
      },
    },
  },
  plugins: [],
};
