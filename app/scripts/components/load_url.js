/**
 * Created by JasonD on 16/10/28.
 */
define(['jquery','page/swipers','part/history_state','part/in_page'], function ($,swipers,historyState,inPage) {
  //load to slide to the target section
  function loadHash() {
    var hash = location.hash;
    if (hash == '') return;
    if (!(hash in inPage.view)) {
      location.hash = inPage.view['#index'];
      return;
    }
    var hashTarg = $('#pageScrollContainer').children().find('[view="'+hash.replace(/^\#/,'')+'"]');
    if (hashTarg) {
      var targSlide = hashTarg.index();
      swipers.sectionBody.slideTo(targSlide);
    }
  };
  loadHash();
  //Listening history popstate event
  historyState.onPop(function (event) {
    console.log('ON POPSTATE')
    loadHash();
  });
});
