$(function(){
    var scrollMove = true;
    var activeIndex = 1;
    $('.active-num').text(activeIndex)
    $('.total-num').text($('.work-item').length)
    $('html,body').on("mousewheel",function(e){
        var workActive = $('.work-content.active')
        if(activeIndex == $('.work-content').length) {
            var workActiveNext = $('.work-content:nth-child(1)')
            var linkSiteNext = $('.link-site:nth-child(1)')
            $('.next-num').text(1)
        } else {
            var workActiveNext = $('.work-content:nth-child('+(activeIndex+1)+')')
            var linkSiteNext = $('.link-site:nth-child('+(activeIndex+1)+')')
            $('.next-num').text(activeIndex+1)
        }
        if(activeIndex == 1) {
            var workActivePrev = $('.work-content:nth-child('+($('.work-content').length)+')')
            var linkSitePrev = $('.link-site:nth-child('+($('.link-site').length)+')')
            $('.prev-num').text($('.work-content').length)
        } else {
            var workActivePrev = $('.work-content:nth-child('+(activeIndex-1)+')')
            var linkSitePrev = $('.link-site:nth-child('+(activeIndex-1)+')')
            $('.prev-num').text(activeIndex-1)
        }
        $('.active-num').text(activeIndex)
        var workActiveNext_color = workActiveNext.data('color');
        var workActivePrev_color = workActivePrev.data('color');
        var otherWork = $('.work-content').not('active');
        
        gsap.set(otherWork, {
            xPercent: 50,
            yPercent: 130,
            rotate: 60,
            scale: .7,
            skewX: 0,
            opacity: 1
        })
        gsap.set(workActivePrev, {
            xPercent: -50,
            yPercent: -130,
            rotate: -90,
            skewX: 0
        })
        var wheel = e.originalEvent.wheelDelta;
        if(scrollMove == true) {
            scrollMove = false;
            
            gsap.set($('.prev-num'), {
                x: 0,
                y: 0
            })
            gsap.set($('.active-num'), {
                x: 0,
                y: 0,
            })
            gsap.set($('.next-num'), {
                x: 0,
                y: 0
            })
            if(wheel<0){
                if(activeIndex % 2 != 0) {
                    timeline = gsap.timeline()
                    .addLabel('scroll')
                    .fromTo(workActive, .8,{
                        xPercent: 0,
                        yPercent: 0,
                        rotate: -10,
                        scale: 1,
                    }, {
                        xPercent: -50,
                        yPercent: -130,
                        scale: .7,
                        rotate: -70,
                        ease: Power2.easeIn
                    },'scroll',)
                    .to(workActiveNext, {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                        rotate: 10,
                        ease: Power3.easeOut,
                        onComplete: nextWork
                    })
                    .to($('.work-bg'), 1.5,{
                        "background-color" : workActiveNext_color,
                        ease: Power3.easeInOut,
                    },'scroll')
                    .to($('.link-site.active img'), .8,{
                        scaleY: 1.3,
                        opacity: 0,
                        ease: Power3.easeIn,
                        onComplete: nextLogo
                    },'scroll')
                    .fromTo(linkSiteNext.children('img'), {
                        scaleX: .7,
                        scaleY: 1.3,
                        opacity: 0
                    }, {
                        scaleY: .7,
                        opacity: 1,
                        ease: Power3.easeOut
                    }, 'scroll+=.8')
                    .to($('.active-num'), .8, {
                        y: -10,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .to($('.next-num'), {
                        y: -10
                    },'scroll+=.8')
                    .to($('.work-title'), .8,{
                        y:-40,
                        skewX: -20,
                        scaleY: 1.2,
                        opacity: 0,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .set($('.work-title'), {
                        y: 40,
                        skewX: 20,
                    }, 'scroll+=.8')
                    .to($('.work-title'), .8, {
                        y: 0,
                        skewX: 0,
                        scaleY: 1,
                        opacity: 1,
                        ease: Power4.easeOut,
                    }, 'scroll+=.8')
                    .set($('.detail-cover'), {
                        xPercent: 0
                    }, 'scroll')
                    .to($('.detail-cover'), 1.6, {
                        xPercent: 200,
                        ease: Power4.easeInOut,
                    }, 'scroll')
                } else {
                    timeline = gsap.timeline()
                    .addLabel('scroll')
                    .fromTo(workActive, .8,{
                        xPercent: 0,
                        yPercent: 0,
                        rotate: 10,
                        scale: 1,
    
                    }, {
                        xPercent: -50,
                        yPercent: -130,
                        scale: .7,
                        rotate: -70,
                        ease: Power2.easeIn
                    },'scroll',)
                    .to(workActiveNext, {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                        rotate: -10,
                        ease: Power3.easeOut,
                        onComplete: nextWork
                    })
                    .to($('.work-bg'), 1.5,{
                        "background-color" : workActiveNext_color,
                        ease: Power3.easeInOut,
                    },'scroll')
                    .to($('.link-site.active img'), .8,{
                        scaleY: 1.3,
                        opacity: 0,
                        ease: Power3.easeIn,
                        onComplete: nextLogo
                    },'scroll')
                    .fromTo(linkSiteNext.children('img'), {
                        scaleX: .7,
                        scaleY: 1.3,
                        opacity: 0
                    }, {
                        scaleY: .7,
                        opacity: 1,
                        ease: Power3.easeOut
                    }, 'scroll+=.8')
                    .to($('.active-num'), .8, {
                        y: -10,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .to($('.next-num'), {
                        y: -10
                    },'scroll+=.8')
                    .to($('.work-title'), .8,{
                        y:-40,
                        skewX: -20,
                        scaleY: 1.2,
                        opacity: 0,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .set($('.work-title'), {
                        y: 40,
                        skewX: 20,
                    }, 'scroll+=.8')
                    .to($('.work-title'), .8, {
                        y: 0,
                        skewX: 0,
                        scaleY: 1,
                        opacity: 1,
                        ease: Power4.easeOut,
                    }, 'scroll+=.8')
                    .to($('.detail-cover'), .8, {
                        xPercent: 100,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .set($('.detail-cover'), {
                        xPercent: 0
                    }, 'scroll')
                    .to($('.detail-cover'), 1.6, {
                        xPercent: 200,
                        ease: Power4.easeInOut,
                    }, 'scroll')
                }
            }else {
                if(activeIndex % 2 != 0) {
                    timeline = gsap.timeline()
                    .addLabel('scroll')
                    .fromTo(workActive, .8,{
                        xPercent: 0,
                        yPercent: 0,
                        rotate: -10,
                        scale: 1,
                    }, {
                        xPercent: 50,
                        yPercent: 130,
                        scale: .7,
                        rotate: 30,
                        skewX: 20,
                        ease: Power3.easeIn
                    },'scroll',)
                    .to(workActivePrev, {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                        rotate: 10,
                        ease: Power3.easeOut,
                        onComplete: prevWork
                    },)
                    .to($('.work-bg'), 1.5,{
                        "background-color" : workActivePrev_color,
                        ease: Power3.easeInOut,
                    },'scroll')
                    .to($('.link-site.active img'), .8,{
                        scaleY: 1.3,
                        opacity: 0,
                        ease: Power3.easeIn,
                        onComplete: prevLogo
                    },'scroll')
                    .fromTo(linkSitePrev.children('img'), {
                        scaleX: .7,
                        scaleY: 1.3,
                        opacity: 0
                    }, {
                        scaleY: .7,
                        opacity: 1,
                        ease: Power3.easeOut
                    }, 'scroll+=.8')
                    .to($('.active-num'), .8, {
                        y: 10,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .to($('.prev-num'), {
                        y: 10
                    },'scroll+=.8')
                    .to($('.work-title'), .8,{
                        y: 40,
                        skewX: 20,
                        scaleY: 1.2,
                        opacity: 0,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .set($('.work-title'), {
                        y: -40,
                        skewX: -20,
                    }, 'scroll+=.8')
                    .to($('.work-title'), .8, {
                        y: 0,
                        skewX: 0,
                        scaleY: 1,
                        opacity: 1,
                        ease: Power4.easeOut,
                    }, 'scroll+=.8')
                    .set($('.detail-cover'), {
                        xPercent: 200
                    }, 'scroll')
                    .to($('.detail-cover'), 1.6, {
                        xPercent: 0,
                        ease: Power4.easeInOut,
                    }, 'scroll')
                } else {
                    timeline = gsap.timeline()
                    .addLabel('scroll')
                    .fromTo(workActive, .8,{
                        xPercent: 0,
                        yPercent: 0,
                        rotate: 10,
                        scale: 1,
    
                    }, {
                        xPercent: 50,
                        yPercent: 130,
                        scale: .7,
                        rotate: 30,
                        skewX: 20,
                        ease: Power3.easeIn
                    },'scroll',)
                    .to(workActivePrev, {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                        rotate: -10,
                        ease: Power3.easeOut,
                        onComplete: prevWork
                    })
                    .to($('.work-bg'), 1.5,{
                        "background-color" : workActivePrev_color,
                        ease: Power3.easeInOut,
                    },'scroll')
                    .to($('.link-site.active img'), .8,{
                        scaleY: 1.3,
                        opacity: 0,
                        ease: Power3.easeIn,
                        onComplete: prevLogo
                    },'scroll')
                    .fromTo(linkSitePrev.children('img'), {
                        scaleX: .7,
                        scaleY: 1.3,
                        opacity: 0
                    }, {
                        scaleY: .7,
                        opacity: 1,
                        ease: Power3.easeOut
                    }, 'scroll+=.8')
                    .to($('.active-num'), .8, {
                        y: 10,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .to($('.prev-num'), {
                        y: 10
                    },'scroll+=.8')
                    .to($('.work-title'), .8,{
                        y: 40,
                        skewX: 20,
                        scaleY: 1.2,
                        opacity: 0,
                        ease: Power4.easeIn,
                    }, 'scroll')
                    .set($('.work-title'), {
                        y: -40,
                        skewX: -20,
                    }, 'scroll+=.8')
                    .to($('.work-title'), .8, {
                        y: 0,
                        skewX: 0,
                        scaleY: 1,
                        opacity: 1,
                        ease: Power4.easeOut,
                    }, 'scroll+=.8')
                    .set($('.detail-cover'), {
                        xPercent: 200
                    }, 'scroll')
                    .to($('.detail-cover'), 1.6, {
                        xPercent: 0,
                        ease: Power4.easeInOut,
                    }, 'scroll')
                }
            }
        }
    });

    function nextWork(){
        $('.work-content.active').removeClass('active')
        if(activeIndex == ($('.work-content').length)) {
            $('.work-content:nth-child(1)').addClass('active')
            $('.link-site:nth-child(1)').addClass('active')
            activeIndex = 1;
        } else {
            $('.work-content:nth-child('+(activeIndex+1)+')').addClass('active')
            $('.link-site:nth-child('+(activeIndex+1)+')').addClass('active')
            activeIndex++;
        }
        scrollMove = true
    }
    function prevWork(){
        $('.work-content.active').removeClass('active')
        if(activeIndex == 1) {
            $('.work-content:nth-child('+($('.work-content').length)+')').addClass('active')
            $('.link-site:nth-child('+($('.work-logo a').length)+')').addClass('active')
            activeIndex = ($('.work-content').length);
            activeIndex = ($('.link-site').length);
        } else {
            $('.work-content:nth-child('+(activeIndex-1)+')').addClass('active')
            $('.link-site:nth-child('+(activeIndex-1)+')').addClass('active')
            activeIndex--;
        }
        scrollMove = true
    }
    function nextLogo() {
        $('.link-site.active').removeClass('active')
        $('.work-item.active').removeClass('active')
        if(activeIndex == ($('.link-site').length)) {
            $('.link-site:nth-child(1)').addClass('active')
            $('.work-item:nth-child(1)').addClass('active')
        } else {
            $('.link-site:nth-child('+(activeIndex+1)+')').addClass('active')
            $('.work-item:nth-child('+(activeIndex+1)+')').addClass('active')
        }
    }

    function prevLogo() {
        $('.link-site.active').removeClass('active')
        $('.work-item.active').removeClass('active')

        if(activeIndex == 1) {
            $('.link-site:nth-child('+($('.work-logo a').length)+')').addClass('active')
            $('.work-item:nth-child('+($('.work-item').length)+')').addClass('active')
        } else {
            $('.link-site:nth-child('+(activeIndex-1)+')').addClass('active')
            $('.work-item:nth-child('+(activeIndex-1)+')').addClass('active')
        }
    }
})