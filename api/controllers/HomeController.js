/**
 * HomeController
 *
 * @module      :: Controller
 * @description  :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  /**
   * Action blueprints:
   *    `/home/index`
   *    `/home`
   */
  index: function (req, res) {

    return res.view({
      model: {
        externals: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            href: 'http://www.linkedin.com/in/montgomerychris',
            imgSrc: '/images/linkedin-icon-hover.png',
            imgHoverSrc: '/images/linkedin-icon.png',
            title: 'Find me on LinkedIn'
          },
          {
            id: 'twitter',
            name: 'Twitter',
            href: 'https://twitter.com/chr_montgomery',
            imgSrc: '/images/Twitter_logo_white.png',
            imgHoverSrc: '/images/Twitter_logo_blue.png',
            title: 'Follow me on Twitter'
          },
          {
            id: 'github',
            name: 'GitHub',
            href: 'https://github.com/chmontgomery',
            imgSrc: '/images/GitHub-Mark-Light-120px-plus.png',
            imgHoverSrc: '/images/GitHub-Mark-Light-120px-plus-hover.png',
            title: 'Follow me on GitHub'
          },
          {
            id: 'so',
            name: 'StackOverflow',
            href: 'http://stackoverflow.com/users/1691091/chris-montgomery',
            imgSrc: '/images/so-icon-hover.png',
            imgHoverSrc: '/images/so-icon.png',
            title: 'Find me on StackOverflow'
          }
        ]
      }
    });
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}
};
