import popOutImageTwig from './pop-out-image.twig';
import textFieldTwig from '../text/text-field.twig';

import imageData from '../../01-atoms/images/image/image.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Pop Out Image',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    caption: {
      name: 'Caption',
      type: 'string',
      defaultValue: 'This is the caption for the 16:9 image above.',
    },
    width: {
      name: 'Component Width',
      type: 'select',
      options: ['content', 'feature', 'full', 'max-width'],
      defaultValue: 'content',
    },
  },
};

export const PopOutImage = ({ caption, width }) => `
  ${textFieldTwig({
    text_field__content:
      '<p>The team hypothesizes that cells form distinct types of filaments, activated and inhibited, with unique structures that fine-tune metabolic activity. What’s new about their approach is they will study protein structures by infrared microscopy rather than fluorescence microscopy. They expect these images to reveal a new localized layer of cellular metabolism that could be used to re-engineer metabolic processes. In the future, these complementary time-resolved imaging and cross-linking approaches could be extended to biological studies of macromolecular assemblies and phase-separated membraneless organelles that have been historically difficult to study.</p>',
  })}
  ${popOutImageTwig({
    ...imageData.responsive_images['3x2'],
    pop_out_image__caption: caption,
    pop_out_image__width: width,
    pop_out_image__content:
      '<p>Dr. Davis’s research group at the Kline Chemistry Laboratory uses experiments at multiple scales – in vitro, single cell, and whole organism – to study fundamental and applied problems at the intersection of chemistry, physics, and biology. They develop new quantitative spectroscopic imaging techniques to elucidate the relationship between function and dynamics of proteins and RNA inside living cells.</p><p>Caitlin Davis obtained her Ph.D. from Emory University in 2015, where she studied protein folding in the laboratory of Dr. Brian Dyer in the Chemistry Department. She completed her postdoctoral training with Dr. Martin Gruebele at the Center for the Physics of Living Cells at the University of Illinois at Urbana-Champaign, where she developed a method for studying protein thermodynamics and kinetics in differentiated tissues of living zebrafish and she developed a mimic of cytoplasm that can be used to reproduce protein behaviors in vitro. She came to Yale as a faculty member in 2020.</p>',
  })}
`;
