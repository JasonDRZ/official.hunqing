/**
 * Created by JasonD on 16/10/28.
 */
define(['jquery','page/swipers','part/history_state','part/in_page','part/frames_work'], function ($,swipers,historyState,inPage,framesWork) {
  //load to slide to the target section
  function loadHash(pageOpen) {
    var hash = location.hash;
    if (hash == '') return;
    if (!(hash in inPage.view)) {
      location.hash = inPage.view['#index'];
      return;
    }
    var hashTarg = $('#pageScrollContainer').children().find('[view="'+hash.replace(/^\#/,'')+'"]');
    if (hashTarg) {
      var targSlide = hashTarg.index();
      historyState.onPageOpen = pageOpen;
      swipers.sectionBody.slideTo(targSlide);
    }
  };

  //load previous details page
  function loadDetailPage() {
    //a标签链接type属性值
    var link_type = {
      'pv_video': 'pv_video',
      'pv_picture': 'pv_picture',
      'news_content': 'news_content'
    };
    //当前的操作
    var pageAr = location.search !== ''  && location.search.replace(/^\?/,'').split('=');
    //如果不存在则下一步
    if (!!!pageAr) {loadHash(false); return;};
    var type = pageAr[0],
      href = decodeURIComponent(pageAr[1]);
    switch (type){
      case link_type.pv_video:{
        event.preventDefault();
        framesWork.pv_video_frame(href);
        break;
      }
      case link_type.pv_picture:{
        event.preventDefault();
        framesWork.pv_picture_frame(href);
        break;
      }
      case link_type.news_content:{
        event.preventDefault();
        framesWork.news_frame(href);
      }
    }
    loadHash(true);
  }
  loadDetailPage();
  var historySearch = '';
  //Listening history popstate event
  historyState.onPop(function (event) {
    console.log('ON POPSTATE')
    framesWork.detailsClose();
    loadDetailPage();
  });
});
