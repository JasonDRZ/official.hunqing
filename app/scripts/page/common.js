/**
 * Created by JasonD on 16/10/24.
 */
define(['jquery','part/link_control','page/swipers'],function ($,linkControl,swipers) {
  //a标签跳转启动处理
  $('body').on('click','a',function (e) {
    var self = this;
    linkControl.linkA_CB(self,e);
  });
//  表单提交设定
  $('.contact_consult_btn').on('click',function () {
    $('.consult_form').addClass('active');
  })
  $('.consult_form').on('click','.btn_close',function () {
    $(this).parent().removeClass('active');
  })
//内容垂直滑动启动插件上下翻页逻辑
  $('.whether-no-swipe-item').on('touchstart',function (e) {
    //如果长度为超出则不执行
    this['startY'] = e.changedTouches[0].clientY;
    if (this.inBoxHeight) return;
    var $this = $(this),box = $this.parents('.whether-no-swipe-box'),boxH = box.height(),
        thisH = $this.height();
    if (thisH <= boxH) {
      this['inBoxHeight'] = true;
      return;
    }
    box.addClass('swiper-no-swiping');
  })
  $('.whether-no-swipe-box').on('scroll',function (e) {
    var $this = $(this),thisH = $this.height(),thisSH = $this[0].scrollHeight,
      thisT = $this.scrollTop();
    if (thisSH - thisH == thisT){
      $this.removeClass('swiper-no-swiping');
      $this.children('.whether-no-swipe-item').data('scrollSide','down');
      $this.children('.whether-no-swipe-item').data('sideDownTrigger',1);
    } else if (thisT == 0){
      $this.removeClass('swiper-no-swiping');
      $this.children('.whether-no-swipe-item').data('scrollSide','up');
      $this.children('.whether-no-swipe-item').data('sideUpTrigger',1);
    } else {
      $this.children('.whether-no-swipe-item').data('scrollSide','no');
      $this.children('.whether-no-swipe-item').data('sideDownTrigger','');
    }
  })
  $('.whether-no-swipe-item').on('touchend',function (e) {
    var nY = e.changedTouches[0].clientY;
    if (this.inBoxHeight) return;
    var $this = $(this);
    var scrollDir = $this.data('scrollSide'),
      upTri = $this.data('sideUpTrigger'),
      downTri = $this.data('sideDownTrigger');
    //如果处于顶端
    if (scrollDir == 'up'){
      if (upTri == 1) $this.data('sideUpTrigger',2);
      else if (upTri == 2) {
        setTimeout(function(){
          swipers.sectionBody.slidePrev();
        },300);
        $this.data('sideDownTrigger',3);
      }
      else if (upTri == 3 && (nY - this['startY'] >= 50)){
        setTimeout(function(){
          swipers.sectionBody.slidePrev();
        },300);
        $this.data('sideDownTrigger',3);
      }
    }
    //如果处于底端
    else if (scrollDir == 'down') {
      if (downTri == 1) $this.data('sideDownTrigger',2);
      else if (downTri == 2) {
        setTimeout(function(){
          swipers.sectionBody.slideNext();
        },300);
        $this.data('sideDownTrigger',3);
      } else if (downTri == 3 && (nY - this['startY'] <= -50)) {
        setTimeout(function(){
          swipers.sectionBody.slideNext();
        },300);
        $this.data('sideDownTrigger',3);
      }
    }
    //如果是刚到当前页面，并没有滑动当前块
    else if (scrollDir != 'no' && (nY - this['startY'] >= 50)){
      setTimeout(function(){
        swipers.sectionBody.slidePrev();
      },300);
    }
  })

})
