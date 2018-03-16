/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it

import ReactGA from 'react-ga';
ReactGA.initialize('UA-94002757-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.location.pathname);
};
