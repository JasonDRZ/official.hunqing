/**
 * Created by JasonD on 16/10/28.
 */
define(['require','jquery','page/swipers','part/history_state'], function (require,$,swipers,historyState) {
  //All home methods dependency
  require(['part/switcher','part/team_control']);
  //Page Link control
  $('a.navigation_link').on('click',function (e) {
    var $this = $(this),href = $this.attr('href');
    if (href.indexOf('#') != -1) {
      var hrefTarg = $('#pageScrollContainer').children().find('[view="'+href.replace(/^\#/,'')+'"]');
      if (hrefTarg) {
        e.preventDefault();
        swipers.sectionBody.slideTo(hrefTarg.index());
        $('a.navigation_link').parent('li').removeClass('active');
        $this.parent('li').addClass('active');
        historyState.pushHashPage(href);
        if ($('#nav_checker')[0].checked) $('#nav_checker')[0].checked = false;
      }
    }
  })
});
