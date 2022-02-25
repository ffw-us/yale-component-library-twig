// import tokens from '@yalesites-org/tokens/build/json/tokens.json';

Drupal.behaviors.breadcrumbs = {
  attach(context) {
    // Selectors.
    const breadcrumbsWrapper = context.querySelector('.breadcrumbs__wrapper');
    const breadcrumbsButton = context.querySelector('.breadcrumbs__button');

    // Function to add/remove breadcrumbs-overflow value.
    // Used to show all breadcrumbs on mobile
    breadcrumbsButton.addEventListener('click', () => {
      breadcrumbsWrapper.setAttribute('data-breadcrumbs-overflow', 'visible');
      breadcrumbsButton.setAttribute('aria-pressed', 'true');
      breadcrumbsButton.setAttribute('aria-expanded', 'true');
    });
  },
};
