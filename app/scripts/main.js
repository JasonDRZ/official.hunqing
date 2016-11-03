/**
 * Created by JasonD on 16/10/24.
 */
requirejs.config({
    baseUrl: 'scripts/',
    //开发版
    paths: {
        lib: 'lib',
        part: 'components',
        page: 'page',
        jquery: 'lib/jquery/dist/jquery',
        swiper: 'lib/swiper/dist/js/swiper'
    },
    //发布版
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    // enforceDefine: true,
    // paths: {
    //     lib: 'lib',
    //     part: 'components',
    //     jquery: [
    //         'http://libs.cdnjs.net/jquery/3.1.0/jquery.min',
    //         //If the CDN location fails, load from this location
    //         'lib/jquery/dist/jquery'
    //     ],
    //     swiper: ['http://libs.cdnjs.net/Swiper/3.3.1/js/swiper.min',
    //         'lib/swiper/dist/js/swiper'],//3.4..0
    // }
});

requirejs(['require','jquery','part/in_page','page/common'],function (require,$,inPage,common) {
  if (inPage.page.index) {
    require(['page/swiper_controller']);
  } else if (inPage.page.wedding_pic){
    require(['page/list_control'])
  }
})

