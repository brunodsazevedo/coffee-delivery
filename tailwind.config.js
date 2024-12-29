/** @type {import('tailwindcss').Config} */

import colors from './src/theme/colors'
import fontFamily from './src/theme/fontFamily'

export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const presets = [require('nativewind/preset')]
export const theme = {
  extend: {
    colors,
    fontFamily,
  },
}

export const plugins = []
