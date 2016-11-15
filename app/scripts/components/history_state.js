/**
 * Created by JasonD on 16/10/28.
 */
define([], function () {
  return {
    //用于确认当前是否有详情页面正处于开启状态
    onPageOpen: false,
    //创建栏目页面的history state
    pushHashPage: function (hash) {
      window.history && window.history.pushState &&
      window.history.pushState({},null,'/'+hash);
    },
    //创建详情页面的history state
    pushSearchPage: function (type,url) {
      window.history.pushState({},null, '?' +type + '=' + url + window.location.hash);
    },
    //去掉详情页的state
    distroySearchPage: function () {
      this.onPageOpen = false;
      this.pushHashPage(window.location.hash);
    },
    //window onpopstate 时间函数
    onPop: function (cb) {
      window.onpopstate  = function () {
        cb();
      };
    }
  }
});
