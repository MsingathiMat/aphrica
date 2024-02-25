import tinycolor from 'tinycolor2';

// Function to mix any color with another color with a specified percentage
const ColorMixer = (
  colorToMix: string,
 
  percentage: number
): string => {
  // Convert colors to tinycolor objects
  const color1 = tinycolor(colorToMix);
  
  // Mix colors with the specified percentage
//   const mixedColor = color1.mix(color2, percentage);
const mixedColor = color1.lighten(percentage);
  // Return mixed color in RGB format
  return mixedColor.toRgbString();
};

export default ColorMixer