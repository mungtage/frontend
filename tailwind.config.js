module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        yellow: '#fcd46c',
        background: '#fef2d3',
        'folder-disabled-tab': '#dcb48c',
        'point-color': '#fb94ad',
        'sub-color': '#6c94f3',
      },
      backgroundImage: {
        'upload-thumb-gif': "url('https://i.ibb.co/Yd2HVfX/cat-uploader.gif')",
        'upload-thumb': "url('https://i.ibb.co/nDxW8Vh/cat-uploader-1.png')",
      },
    },
  },
  plugins: [],
};
