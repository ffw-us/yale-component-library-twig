// Twig templates
import videoTwig from './video.twig';

// Data files
import videoData from './video.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Video',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    heading: {
      name: 'Heading',
      type: 'string',
      defaultValue: videoData.text_with_video__heading,
    },
    text: {
      name: 'Text',
      type: 'string',
      defaultValue: videoData.text_with_video__text,
    },
  },
};

export const video = ({ heading, text }) =>
  videoTwig({
    ...videoData,
    text_with_video__heading: heading,
    text_with_video__text: text,
  });
