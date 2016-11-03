/**
 * Created by JasonD on 16/10/28.
 */
define([], function () {
  return {
    push: function (url) {
      window.history.pushState({},null,url);
    },
    onPop: function (cb) {
      window.onpopstate  = cb;
    }
  }
});
