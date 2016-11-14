/**
 * Created by JasonD on 16/11/1.
 */
define(['jquery','require','part/history_state'], function ($,require,historyState) {
  //a标签链接type属性值
  var link_type = {
    'pv_video': 'pv_video',
    'pv_picture': 'pv_picture',
    'news_content': 'news_content',
    'btn_more': 'btn_more'
  };
  return {
    linkA_CB: function (dom,event) {
      //可能的循环依赖
      var framesWork = require('part/frames_work');
      //当前的操作
      var $this = $(dom),
        type = $this.attr('type'),
        href = $this.attr('href');
      switch (type){
        case link_type.btn_more: {
          event.preventDefault();
          var flag = $this.hasClass('onListing');
          var sib_li_active = $this.siblings('li.active'),
            sib_active_target = sib_li_active.data('target'),
            frame_link = sib_li_active.data('link'),
            $sib_active = $(sib_active_target);
          if (!flag) {
            $this.addClass('onListing');
            if ($this.parents('.PVSwitch')) $this.parents('.PVSwitch').addClass('listShow');
            if ($sib_active.children('iframe').length != 0) $sib_active.children('iframe').addClass('active');
            else framesWork.insertListFrame($sib_active,frame_link,'frame_list_box active swiper-no-swiping',true);
          } else {
            $this.removeClass('onListing');
            if ($this.parents('.PVSwitch')) $this.parents('.PVSwitch').removeClass('listShow');
            $sib_active.children('iframe').removeClass('active');
            $sib_active.siblings().children('iframe').removeClass('active');
          }
          break;
        }
        case link_type.pv_video:{
          event.preventDefault();
          framesWork.pv_video_frame(href);
          historyState.pushSearchPage(type,href);
          break;
        }
        case link_type.pv_picture:{
          event.preventDefault();
          framesWork.pv_picture_frame(href);
          historyState.pushSearchPage(type,href);
          break;
        }
        case link_type.news_content:{
          event.preventDefault();
          framesWork.news_frame(href);
          historyState.pushSearchPage(type,href);
        }
      }
    }
  }
});
