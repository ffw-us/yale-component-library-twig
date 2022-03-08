import contentImageTwig from './content-image.twig';

import imageData from '../../01-atoms/images/image/image.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Image',
  argTypes: {
    caption: {
      name: 'Caption',
      type: 'string',
      defaultValue: 'This is the caption for the 16:9 image above.',
    },
    width: {
      name: 'Image Width',
      type: 'select',
      options: ['content', 'feature', 'full', 'max-width'],
      defaultValue: 'content',
    },
  },
};

export const ContentImage = ({ caption, width }) =>
  contentImageTwig({
    ...imageData.responsive_images['16x9'],
    content_image__caption: caption,
    content_image__width: width,
  });
