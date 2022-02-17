import tokens from '@yalesites-org/tokens/build/json/tokens.json';

import siteHeaderTwig from './site-header.twig';
import siteHeaderExamples from './_site-header--examples.twig';

const siteHeaderThemes = { themes: tokens['site-header-themes'] };
const borderThicknessOptions = Object.keys(tokens.border.thickness);
const primaryNavPositions = Object.keys(tokens.layout['flex-position']);
const siteHeaderThemeOptions = Object.keys(tokens['site-header-themes']);

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    borderThickness: {
      options: borderThicknessOptions,
      type: 'select',
      defaultValue: '8',
    },
    primaryNavPosition: {
      options: primaryNavPositions,
      type: 'select',
      defaultValue: 'right',
    },
    siteHeaderTheme: {
      options: siteHeaderThemeOptions,
      type: 'select',
      defaultValue: 'white',
    },
  },
};

export const Header = ({
  borderThickness,
  primaryNavPosition,
  siteHeaderTheme,
}) =>
  siteHeaderTwig({
    site_name: 'Department of Chemistry',
    site_header__border_thickness: borderThickness,
    site_header__nav_position: primaryNavPosition,
    site_header__theme: siteHeaderTheme,
  });

export const headerExamples = ({ borderThickness, primaryNavPosition }) =>
  siteHeaderExamples({
    ...siteHeaderThemes,
    site_name: 'Department of Chemistry',
    site_header__border_thickness: borderThickness,
    site_header__nav_position: primaryNavPosition,
  });
