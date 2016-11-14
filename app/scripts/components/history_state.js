/**
 * Created by JasonD on 16/10/28.
 */
define([], function () {
  return {
    onPageOpen: false,
    pushHashPage: function (hash) {
      window.history && window.history.pushState &&
      window.history.pushState({},null,'/'+hash);
    },
    pushSearchPage: function (type,url) {
      window.history.pushState({},null, '?' +type + '=' + url + window.location.hash);
    },
    distroySearchPage: function () {
      this.pushHashPage(window.location.hash);
    },
    onPop: function (cb) {
      window.onpopstate  = function () {
        cb();
      };
    }
  }
});
