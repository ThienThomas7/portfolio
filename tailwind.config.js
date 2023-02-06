/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        gradientFrom: '#09203F',
        gradientTo: '#537895',
        black: {
          100: '#cccccc',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        white: {
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#cccccc',
          700: '#999999',
          800: '#666666',
          900: '#333333'
        },
        gradientFromColor: {
          100: '#ced2d9',
          200: '#9da6b2',
          300: '#6b798c',
          400: '#3a4d65',
          500: '#09203f',
          600: '#071a32',
          700: '#051326',
          800: '#040d19',
          900: '#02060d'
        },
        gradientToColor: {
          100: '#dde4ea',
          200: '#bac9d5',
          300: '#98aebf',
          400: '#7593aa',
          500: '#537895',
          600: '#426077',
          700: '#324859',
          800: '#21303c',
          900: '#11181e'
        }
      }
    },
    screens: {
      str: '1px',
      ssm: '360px',
      msm: '480px',
      ...defaultTheme.screens
    },
    fontSize: {
      ssm: ['12px', '16px'],
      msm: ['13px', '17px'],
      ...defaultTheme.fontSize
    },
    fontFamily: {
      chakra: ['Chakra Petch', 'sans-serif']
    }
  },
  plugins: []
};
