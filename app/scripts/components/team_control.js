/**
 * Created by JasonD on 16/10/31.
 */
define(['jquery','part/switcher'], function ($) {
  var teamBox = $('#about_team');
  var memberShowBox = teamBox.find('#team_member_show_box'),
      memberShowTmp = memberShowBox.html(),
      memberIndex = teamBox.find('#team_members_index_swiper'),
      memberIndexSlide = memberIndex.children('.swiper-wrapper').children('.swiper-slide');
  memberShowBox.empty();
  var regE = function (str) {
    return new RegExp('{{'+str+'}}','g');
  }
  memberIndexSlide.on('click',function () {
    var $this = $(this),
      teamInfo = $this.children('.team_info'),
      memberData = {
        'avatar': teamInfo.data('avatar'),
        'name': teamInfo.data('name'),
        'duty': teamInfo.data('duty'),
        'desc': teamInfo.data('desc')
      };
    $this.siblings('.swiper-slide').attr('aria-selected','false');
    $this.attr('aria-selected','true');
    memberShowBox.html(function () {
      var _html = memberShowTmp;
      for (var k in memberData) {
        _html = _html.replace(regE(k),memberData[k]);
      }
      return _html;
    })
  });
  memberIndexSlide.first().click();
});
