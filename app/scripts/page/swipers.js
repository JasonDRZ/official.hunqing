/**
 * Created by JasonD on 16/10/28.
 */
define(['jquery','swiper','part/history_state'], function ($,Swiper,historyState) {
  return {
    sectionBody: new Swiper('#pageScrollContainer',{
      speed: 1000,
      direction: 'vertical',
      initialSlide : 0,
      noSwiping : true,
      lazyLoading : true,
      mousewheelControl : true,//启用滚轮
      mousewheelReleaseOnEdges : false,
      simulateTouch : false,
      onSlideChangeStart: function(swiper){
        var activeID = $('#pageScrollContainer').children('.swiper-wrapper')
          .children('.swiper-slide-active').attr('view');
        //控制导航变化
        $('a.navigation_link').parent('li').removeClass('active');
        $('a.navigation_link[href="#'+activeID+'"]').parent('li').addClass('active');
        //如果详情页未打开，则添加新的history state
        !!!historyState.onPageOpen &&
        historyState.pushHashPage('#'+activeID);
      }
      // onlyExternal : true,//禁止拖动
    }),
    banner: new Swiper('#banner_container',{
      speed: 800,
      effect : 'fade',
      fade: {
        crossFade: false,
      },
      loop: true,
      autoplay: 5000,
      paginationClickable: true,
      pagination: '.banner-pagination',
      simulateTouch : false,
      nextButton: '.bannerswiper-button-next',
      prevButton: '.bannerswiper-button-prev',
    }),
    pv_picture: new Swiper('#pv_picture_swiper',{
      slidesPerView: 4,
      slidesPerColumn: 1,
      spaceBetween: 1,
      // loop: true,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.pvswiper-button-next',
      prevButton: '.pvswiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4,
          slidesPerColumn: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2
        }
      }
    }),
    pv_video: new Swiper('#pv_video_swiper',{
      slidesPerView: 4,
      spaceBetween: 1,
      slidesPerColumn: 1,
      // loop: true,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.pvswiper-button-next',
      prevButton: '.pvswiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4,
          slidesPerColumn: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2
        }
      }
    }),
    po_picture: new Swiper('#po_picture_swiper',{
      slidesPerView: 4,
      slidesPerColumn: 1,
      spaceBetween: 1,
      // loop: true,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.pvswiper-button-next',
      prevButton: '.pvswiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4,
          slidesPerColumn: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2
        }
      }
    }),
    pub_activitise: new Swiper(
      '#pub_activitise_swiper',{
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 1,
        // loop: true,
        lazyLoading : true,
        //freeMode: true//移动设备上启用
        nextButton: '.pvswiper-button-next',
        prevButton: '.pvswiper-button-prev',
        breakpoints: {
          1920: {
            slidesPerView: 4,
            slidesPerColumn: 1
          },
          768: {
            slidesPerView: 2,
            slidesPerColumn: 2
          }
        }
      }
    ),
    po_video: new Swiper('#po_video_swiper',{
      slidesPerView: 4,
      spaceBetween: 1,
      slidesPerColumn: 1,
      // loop: true,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.pvswiper-button-next',
      prevButton: '.pvswiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4,
          slidesPerColumn: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2
        }
      }
    }),
    news_news: new Swiper('#news_news_swiper',{
      slidesPerView: 4,
      spaceBetween: 1,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.newsSwiper-button-next',
      prevButton: '.newsSwiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 1
        }
      }
    }),
    news_crowd: new Swiper('#news_crowd_swiper',{
      slidesPerView: 4,
      spaceBetween: 1,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.newsSwiper-button-next',
      prevButton: '.newsSwiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 1
        }
      }
    }),
    about_history: new Swiper('#about_history_swiper',{
      slidesPerView: 4,
      spaceBetween: 1,
      lazyLoading : true,
      //freeMode: true//移动设备上启用
      nextButton: '.newsSwiper-button-next',
      prevButton: '.newsSwiper-button-prev',
      breakpoints: {
        1920: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 1
        }
      }
    }),
    team_member: new Swiper('#team_members_index_swiper',{
      slidesPerView: 6,
      spaceBetween: 1,
      //freeMode: true//移动设备上启用
      breakpoints: {
        1920: {
          slidesPerView: 6
        },
        768: {
          slidesPerView: 3
        }
      }
    }),
    about_partner: new Swiper('#partner_swiper',{
      //freeMode: true//移动设备上启用
      slidesPerColumn: 2,
      slidesPerView: 4,
      spaceBetween: 1,
      lazyLoading : true,
      breakpoints: {
        1920: {
          slidesPerView: 4,
          slidesPerColumn: 2
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 3
        }
      }
    })
  }
});
