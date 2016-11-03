/**
 * Created by JasonD on 16/10/24.
 */
define(['jquery','part/frames_work'],function ($,framesWork) {
  $('.tabSwitch_box').each(function (i,ele) {
    var ele = $(ele);
    var header = ele.children('.switch_header'),
      body = ele.children('.switch_body');
    //初始加载第一个
    header.children('li').first().addClass('active');
    body.children().first().addClass('active');
    //绑定事件
    header.on('click','li',function () {
      var $this = $(this);
      var target = $this.data('target'),
          link = $this.data('link'),
          $target = $(target);
      if ($this.siblings('a.btn_more').hasClass('onListing')) {
        if ($target.children('iframe').length != 0) $target.children('iframe').addClass('active');
        else framesWork.insertListFrame($target,link,'frame_list_box active',true);
      }
      header.children('li').removeClass('active');
      body.children().removeClass('active');
      $this.addClass('active');
      body.children(target).addClass('active');
    })
  })
})
