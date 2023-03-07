import tokens from '@yalesites-org/tokens/build/json/tokens.json';

import colorsTwig from './colors.twig';
import colorPairingsTwig from './color-pairings.twig';
import colorGlobalThemeTwig from './color-global-themes.twig';
import colorGlobalThemePairingTwig from './color-global-theme-pairings.twig';

import quickLinksData from '../../02-molecules/quick-links/quick-links.yml';
import imageData from '../../01-atoms/images/image/image.yml';
import tabData from '../../02-molecules/tabs/tabs.yml';
import bannerData from '../../02-molecules/banner/banner.yml';

const colorsData = {
  colors: {
    blue: tokens.color.blue,
    green: tokens.color.green,
    purple: tokens.color.purple,
    orange: tokens.color.orange,
    yellow: tokens.color.yellow,
    basic: tokens.color.basic,
    gray: tokens.color.gray,
  },
};
const colorPairingsData = { themes: tokens['component-themes'] };
const colorGlobalThemeData = { globalThemes: tokens.globalThemes };

export default {
  title: 'Tokens/Colors',
};

export const Colors = () => colorsTwig(colorsData);

export const ColorPairings = () => `
  <h2>These pairings are selected to support accessibility standards.</h2>
  <p>This page is useful to check the accessibility of various components against the available background colors.</p>
  ${colorPairingsTwig(colorPairingsData)}
`;

export const ColorGlobalThemes = () => `
  <h2>These are global themes.</h2>
  ${colorGlobalThemeTwig(colorGlobalThemeData)}
`;

// export const GlobalThemeColorPairings = () => `
//   <h2>Global Theme pairings.</h2>
//   <p>This page is useful to check the accessibility of various components against the available background colors.</p>
//   ${colorGlobalThemePairingTwig(colorGlobalThemeData)}
// `;

export const GlobalThemeColorPairings = ({
  heading,
  description,
  image,
  calloutTheme,
  qlTheme,
  tabTheme,
  bannerTheme,
}) =>
  colorGlobalThemePairingTwig({
    ...imageData.responsive_images['16x9'],
    ...colorGlobalThemeData,
    ...colorGlobalThemeTwig,
    ...tabData,
    ...bannerData,
    quick_links__heading: heading,
    quick_links__description: description,
    quick_links__image: image,
    quick_links__background_color: qlTheme,
    callout__background_color: calloutTheme,
    quick_links__links: quickLinksData.quick_links__links,
    tabs__theme: tabTheme,
    banner__content__background: bannerTheme,
  });

GlobalThemeColorPairings.argTypes = {
  bannerTheme: {
    name: 'Banner Theme',
    type: 'select',
    options: ['one', 'two', 'three'],
    defaultValue: 'one',
  },
  qlTheme: {
    name: 'Quick Links Theme',
    type: 'select',
    options: ['one', 'two', 'three'],
    defaultValue: 'one',
  },
  calloutTheme: {
    name: 'Callout Theme',
    type: 'select',
    options: ['one', 'two', 'three'],
    defaultValue: 'one',
  },
  tabTheme: {
    name: 'Tabs Theme',
    type: 'select',
    options: ['one', 'two', 'three'],
    defaultValue: 'one',
  },
};
