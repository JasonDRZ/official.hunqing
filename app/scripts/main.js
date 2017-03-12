/**
 * Created by JasonD on 16/10/24.
 */
requirejs.config({
    //开发
    // baseUrl: 'scripts/',
    //发布
    baseUrl: '/static/js/scripts/',
    //开发版
    paths: {
        lib: 'lib',
        part: 'components',
        page: 'page',
        jquery: 'lib/jquery/dist/jquery',
        swiper: 'lib/swiper/dist/js/swiper'
    }
});

requirejs(['require','jquery','part/in_page','page/common'],function (require,$,inPage,common) {
  if (inPage.page.index) {
    require(['page/swiper_controller']);
  } else if (inPage.page.wedding_pic){
    require(['page/list_control'])
  }
})

