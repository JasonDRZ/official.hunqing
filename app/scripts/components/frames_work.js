/**
 * Created by JasonD on 16/10/30.
 */
define(['jquery', 'require', 'part/history_state'], function ($,require,historyStrate) {
  //获取所有的iframe节点
  var detailFrame = $('.iframe_details_container');
  //插入iframe节点，附带检测
  var insertListFrame = function (wrapper,fsrc,className,detective) {
    if (detective){
      if (wrapper.children('iframe').length != 0){
        if (wrapper.children('iframe').attr('src') == fsrc){
          return;
        } else {
          wrapper.children('iframe').attr('src',fsrc);
        }
      }
    }
    var frame = document.createElement('iframe');
    //去掉主域与子域之间的跨域问题
    frame.src = fsrc.replace('http://wedmore.cn','').replace('http://www.wedmore.cn','');
    frame.className = className ? className : '';
    frame.frameBorder = 0;
    frame.onload = function () {
      frame.style.backgroundImage = '';

      //处理iframe文档内部的a标签事件
      var targAs = frame.contentDocument.getElementsByTagName('a');
      $.each(targAs,function (i,ele) {
        ele.onclick = function (e) {
          var self = this;
          var linkControl = require('part/link_control');
          linkControl.linkA_CB(self,e);
        }
      })
    };
    wrapper.append(frame);
  };
  var insertDetailFrame = function (wrapper,fsrc,className,detective) {
    if (detective){
      if (wrapper.children('iframe').length != 0){
        if (wrapper.children('iframe').attr('src') == fsrc){
          return;
        } else {
          wrapper.children('iframe').attr('src',fsrc);
        }
      }
    }
    var frame = document.createElement('iframe');
    frame.src = fsrc;
    frame.className = className ? className : '';
    frame.frameBorder = 0;
    frame.onload = function () {
      this.style.backgroundImage = '';
    }
    wrapper.append(frame);
  };
  //激活详情的iframe节点
  var activeDetailsFrame = function (mainFrame,childClass,cb) {
    mainFrame.addClass('active');
    mainFrame.children().removeClass('active');
    var child = mainFrame.children(childClass);
    child.addClass('active');
    if (cb) cb(child);
  };
  //关闭
  var detailsFrameClose = function (mainFrame,changeState) {
    if (detailFrame.hasClass('active')) {
      mainFrame.removeClass('active');
      mainFrame.children().each(function (i,ele) {
        $(ele).children('iframe').remove();
        $(ele).removeClass('active');
      });
      //去掉链接中的search state
      changeState && historyStrate.distroySearchPage();
    }
  }
  // 关闭
  detailFrame.click(function () {
    detailsFrameClose(detailFrame,true);
  })
  detailFrame.on('click','.frame_close_btn',function () {
    detailsFrameClose(detailFrame,true);
  })
  return {
    pv_picture_frame: function (frameUrl) {
      activeDetailsFrame(detailFrame,'.pv_picture_frame',function (frame) {
        insertDetailFrame(frame,frameUrl,'',true);
      });
    },
    pv_video_frame: function (frameUrl) {
      activeDetailsFrame(detailFrame,'.pv_video_frame',function (frame) {
        insertDetailFrame(frame,frameUrl,'',true);
      });
    },
    news_frame: function (frameUrl) {
      activeDetailsFrame(detailFrame,'.news_frame',function (frame) {
        insertDetailFrame(frame,frameUrl,'',true);
      });
    },
    detailsClose: function () {
      detailsFrameClose(detailFrame);
    },
    insertListFrame: insertListFrame
  }
});
