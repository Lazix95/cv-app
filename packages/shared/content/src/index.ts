import * as images from './images';
import * as json from './json';

const content = { images: { ...images }, ...json };

export type Content = typeof content;
export default content;
