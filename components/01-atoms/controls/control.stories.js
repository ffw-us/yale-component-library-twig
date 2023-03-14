import tokens from '@yalesites-org/tokens/build/json/tokens.json';
import ctaTwig from './cta/yds-cta.twig';
import linkTwig from './text-link/yds-text-link.twig';

import './text-link/yds-text-link';

import themeExamplesTwig from './cta/_yds-cta-examples.twig';

const siteGlobalThemes = { themes: tokens.globalThemes };
const siteGlobalThemeOptions = Object.keys(tokens.globalThemes);
const componentThemes = { themes: tokens['component-themes'] };
const componentThemeOptions = Object.keys(tokens['component-themes']);
/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Controls',
  argTypes: {
    globalTheme: {
      name: 'Global Theme (lever)',
      options: siteGlobalThemeOptions,
      type: 'select',
      defaultValue: 'one',
    },
    componentTheme: {
      name: 'Component Theme (dial)',
      options: componentThemeOptions,
      type: 'select',
      defaultValue: 'one',
    },
  },
};

const ctaText = 'Call to action';

export const Cta = () => `
  <h2>Filled</h2>
  <div class="cta-group">
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
    })}
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__radius: 'soft',
    })}
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__radius: 'pill',
    })}
  </div>
  <h2>Outline</h2>
  <div class="cta-group">
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__style: 'outline',
    })}
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__radius: 'soft',
      cta__style: 'outline',
    })}
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__radius: 'pill',
      cta__style: 'outline',
    })}
  </div>
  <h2>Outline Weights</h2>
  <div class="cta-group">
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__style: 'outline',
      cta__outline_weight: '1',
    })}
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__style: 'outline',
      cta__outline_weight: '2',
    })}
    ${ctaTwig({
      cta__content: ctaText,
      cta__href: '#',
      cta__style: 'outline',
      cta__outline_weight: '4',
    })}
  </div>
  <h2>Hover Effects</h2>
  <div class="cta-group">
    ${ctaTwig({
      cta__content: 'Fade',
      cta__href: '#',
    })}
    ${ctaTwig({
      cta__content: 'Rise',
      cta__hover_style: 'rise',
      cta__href: '#',
    })}
    ${ctaTwig({
      cta__content: 'Wipe',
      cta__hover_style: 'wipe',
      cta__href: '#',
    })}
  </div>
  <div class="cta-group">
    ${ctaTwig({
      cta__content: 'Fade',
      cta__style: 'outline',
      cta__href: '#',
    })}
    ${ctaTwig({
      cta__content: 'Rise',
      cta__style: 'outline',
      cta__hover_style: 'rise',
      cta__href: '#',
    })}
    ${ctaTwig({
      cta__content: 'Wipe',
      cta__style: 'outline',
      cta__hover_style: 'wipe',
      cta__href: '#',
    })}
  </div>
`;

export const textLink = () => `
  ${linkTwig({
    link__url: 'http://localhost:6006',
    link__content: 'This is a default link',
    link__attributes: {
      target: '_blank',
    },
  })}<br />
  ${linkTwig({
    link__url: '#',
    link__content: 'This is a "no-underline" link',
    link__style: 'no-underline',
    link__type: 'normal',
  })}<br />
  ${linkTwig({
    link__url: '#',
    link__content: 'This is an "external" link',
    link__style: 'underline-with-icon',
    link__type: 'external',
  })}
  ${linkTwig({
    link__url: '#',
    link__content: 'This is a "new target" link',
    link__style: 'underline-with-icon',
    link__type: 'target-blank',
  })}
  ${linkTwig({
    link__url: '#',
    link__content: 'This is a "download" link',
    link__style: 'underline-with-icon',
    link__type: 'download',
  })}
  ${linkTwig({
    link__url: '#',
    link__content: 'This is a link with chevron',
    link__style: 'underline-with-icon',
    link__type: 'with-chevron',
  })}
  ${linkTwig({
    link__url: '#',
    link__content: 'This is a long link without animated underlines',
    link__style: 'no-underline-animation',
  })}<br/>
  ${linkTwig({
    link__url: '#',
    link__pre_text: 'person@example.com',
    link__content: '(copy)',
    link__type: 'email',
    link__extra_class: ['copy-trigger'],
  })}
`;

export const CtaExamples = ({ globalTheme, componentTheme }) =>
  themeExamplesTwig({
    ...siteGlobalThemes,
    ...componentThemes,
    site_global__theme: globalTheme,
    example_content: `
    <h2>Filled</h2>
    <div class="cta-group">
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__radius: 'soft',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__radius: 'pill',
        cta__component_theme: componentTheme,
      })}
    </div>
    <h2>Outline</h2>
    <div class="cta-group">
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__style: 'outline',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__radius: 'soft',
        cta__style: 'outline',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__radius: 'pill',
        cta__style: 'outline',
        cta__component_theme: componentTheme,
      })}
    </div>
    <h2>Outline Weights</h2>
    <div class="cta-group">
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__style: 'outline',
        cta__outline_weight: '1',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__style: 'outline',
        cta__outline_weight: '2',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: ctaText,
        cta__href: '#',
        cta__style: 'outline',
        cta__outline_weight: '4',
        cta__component_theme: componentTheme,
      })}
    </div>
    <h2>Hover Effects</h2>
    <div class="cta-group">
      ${ctaTwig({
        cta__content: 'Fade',
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: 'Rise',
        cta__hover_style: 'rise',
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: 'Wipe',
        cta__hover_style: 'wipe',
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
    </div>
    <div class="cta-group">
      ${ctaTwig({
        cta__content: 'Fade',
        cta__style: 'outline',
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: 'Rise',
        cta__style: 'outline',
        cta__hover_style: 'rise',
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
      ${ctaTwig({
        cta__content: 'Wipe',
        cta__style: 'outline',
        cta__hover_style: 'wipe',
        cta__href: '#',
        cta__component_theme: componentTheme,
      })}
    </div>
    `,
  });

export const LinkExamples = ({ globalTheme, componentTheme }) =>
  themeExamplesTwig({
    ...siteGlobalThemes,
    ...componentThemes,
    site_global__theme: globalTheme,
    example_content: `
      <div class="link-group" data-component-theme="${componentTheme}">
      ${linkTwig({
        link__url: 'http://localhost:6006',
        link__content: 'This is a default link',
        link__attributes: {
          target: '_blank',
        },
      })}<br />
      ${linkTwig({
        link__url: '#',
        link__content: 'This is a "no-underline" link',
        link__style: 'no-underline',
        link__type: 'normal',
      })}<br />
      ${linkTwig({
        link__url: '#',
        link__content: 'This is an "external" link',
        link__style: 'underline-with-icon',
        link__type: 'external',
      })}
      ${linkTwig({
        link__url: '#',
        link__content: 'This is a "new target" link',
        link__style: 'underline-with-icon',
        link__type: 'target-blank',
      })}
      ${linkTwig({
        link__url: '#',
        link__content: 'This is a "download" link',
        link__style: 'underline-with-icon',
        link__type: 'download',
      })}
      ${linkTwig({
        link__url: '#',
        link__content: 'This is a link with chevron',
        link__style: 'underline-with-icon',
        link__type: 'with-chevron',
      })}
      ${linkTwig({
        link__url: '#',
        link__content: 'This is a long link without animated underlines',
        link__style: 'no-underline-animation',
      })}<br/>
      ${linkTwig({
        link__url: '#',
        link__pre_text: 'person@example.com',
        link__content: '(copy)',
        link__type: 'email',
        link__extra_class: ['copy-trigger'],
      })}</div>
      `,
  });
