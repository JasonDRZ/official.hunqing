/**
 * Created by JasonD on 16/10/28.
 */
define(['jquery'], function ($) {
  //获取当前页面标示
  var page = $('html').attr('page');
  var obj = {};
  switch (page){
    case 'index':
      obj['index'] = true;
          break;
    case 'wedding_pic':
      obj['wedding_pic'] = true;
          break;
    case 'wedding_news':
      obj['wedding_news'] = true;
          break;
    default: obj['index'] = true;
  };
  return {
    page: obj,
    view: {
      '#index': '#index',
      '#wedding': '#wedding',
      '#activity': '#activity',
      '#aboutus': '#aboutus',
      '#consulting': '#consulting',
      '#joinus': '#joinus',
      '#partners': '#partners',
      '#propose': '#propose',
      '#public': '#public'
    }
  };
});
