import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
let guidelineBaseWidth = 360;
let guidelineBaseHeight = 680;
let defaultFactor = 1

export const setGuideLines = (width, height, factor) => {
    guidelineBaseWidth = width
    guidelineBaseHeight = height
    defaultFactor = factor
}

export const scale = size => shortDimension / guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseHeight * size;
export const moderateScale = (size, factor = defaultFactor) => size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = defaultFactor) => size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
