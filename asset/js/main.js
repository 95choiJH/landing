$(function(){

    $('.text').each(function(i,v){
        var arr = new Array();
        var text = $(this).text();
        var index= 0;

        arr = text.split(" ");
        arr2 = text.split("");
        $(this).empty();
        arr.forEach(function(v){
            if(i == 2) {
                if(index < 1) {
                    $('.text'+(i+1)+'').append(`<div class="split-logo left"><span class="origin">`+v+`</span><span class="top">`+v+`</span><span class="bottom">`+v+`</span></div>`)
                    index++;
                } else if(index == 1){
                    $('.text'+(i+1)+'').append(`<div class="split-logo other"><span class="origin">`+v+`</span><span class="top">`+v+`</span><span class="bottom">`+v+`</span></div>`)
                    index++;
                } else {
                    $('.text'+(i+1)+'').append(`<div class="split-logo right"><span class="origin">`+v+`</span><span class="top">`+v+`</span><span class="bottom">`+v+`</span></div>`)
                }
            } else {
                $('.text'+(i+1)+'').append(`<div class="split"><span class="origin">`+v+`</span><span class="top">`+v+`</span><span class="bottom">`+v+`</span></div>`)
            }
        })
    })

    loading = gsap.timeline()
    // .addLabel('in')
    // .set($('.text1'), {
    //     x: "-111vw"
    // })
    // .set($('.text2'), {
    //     x: "75vw"
    // })
    // .set($('.text3'), {
    //     x: "-70vw"
    // })

    // .to($('.text1'), {
    //     x: "-15vw"
    // },'i')
    // .to($('.text2'), {
    //     x: "5vw"
    // },'in')
    // .to($('.text3'), {
    //     x: "25vw",
    // },'in')

    const split = gsap.utils.toArray($('.split'))
    const splitLogo = gsap.utils.toArray($('.split-logo'))
    const text1 = gsap.utils.toArray($('.text1 .split'))
    const origin = gsap.utils.toArray($('.origin'))
    const top = gsap.utils.toArray($('.top'))
    const bottom = gsap.utils.toArray($('.bottom'))

    split.forEach(function(v,i){
        loading.addLabel('text')
        .fromTo(origin[i], .3, {
            "text-shadow": "1px 4px .4vw transparent, 0 0 0 transparent, 1px 4px .4vw transparent",
            opacity: 1
        },{
            "text-shadow": "1px 4px .4vw #ececec, 0 0 0 #2C3333, 1px 4px .4vw #ececec",
            color: "rgba(209, 231, 232, .5)",
            yoyo: 1,
            repeat: 1,
        },'text')
        .fromTo(top[i], .3,{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
            opacity: 1
        },{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0.2)",
            x: "1vw",
            yPercent: -9,
            skewX: -13,
            scaleY: 1.2, 
            "height": "50%",
            color: "#395B64",
            opacity: 1,
            yoyo: 1,
            repeat: 1,
        },'text')
        .fromTo(bottom[i], .3,{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
            opacity: 1
        },{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0.3)",
            skewX: 13,
            scaleY: .8, 
            opacity: 1,
            color: "#A5C9CA",
            yoyo: 1,
            repeat: 1,
            onComplete: function() {$('.text'+i+'').css('display','none')}
        },'text')
    })
    
    splitLogo.forEach(function(v,i){
        loading.fromTo($('.split-logo .origin')[i], .3, {
            "text-shadow": "1px 4px .4vw transparent, 0 0 0 transparent, 1px 4px .4vw transparent",
            opacity: 1
        },{
            "text-shadow": "1px 4px .4vw #ececec, 0 0 0 #2C3333, 1px 4px .4vw #ececec",
            color: "rgba(209, 231, 232, .5)",
        }, 'text+=.7')
        .fromTo($('.split-logo .top')[i], .3,{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
            opacity: 1
        },{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0.2)",
            x: "1vw",
            yPercent: -9,
            skewX: -13,
            scaleY: 1.2, 
            "height": "50%",
            color: "#395B64",
        }, 'text+=.7')
        .fromTo($('.split-logo .bottom')[i], .3,{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
            opacity: 1
        },{
            "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0.3)",
            skewX: 13,
            scaleY: .8,
            color: "#A5C9CA",
        }, 'text+=.7')
    })
    // loading.to($('.other'), {
    //     opacity: 0
    // }, 'text+=1')
    loading.to($('.other .origin'), .3, {
        "text-shadow": "1px 4px .4vw transparent, 0 0 0 transparent, 1px 4px .4vw transparent",
        color: "#ececec"
    },'text+=1.2')
    .to($('.other .top'), .3,{
        "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
        x: 0,
        yPercent: 0,
        skewX: 0,
        scaleY: 1, 
        color: "#ececec",
        "height": "51%",
    }, 'text+=1.2')
    .to($('.other .bottom'), .3,{
        "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
        skewX: 0,
        scaleY: 1,
        color: "#ececec",
    }, 'text+=1.2')
    // .fromTo($('.right .origin'), .2, {
    //     "text-shadow": "1px 4px .4vw transparent, 0 0 0 transparent, 1px 4px .4vw transparent",
    // },{
    //     "text-shadow": "1px 4px .4vw #ececec, 0 0 0 #2C3333, 1px 4px .4vw #ececec",
    //     opacity: 1
    // }, 'text+=1.2')
    // .fromTo($('.right .top'), .2,{
    //     "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
    // },{
    //     "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0.2)",
    //     x: "1vw",
    //     yPercent: -9,
    //     skewX: -13,
    //     scaleY: 1.2, 
    //     "height": "50%",
    //     opacity: 1
    // }, 'text+=1.2')
    // .fromTo($('.right .bottom'), .2,{
    //     "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0)",
    // },{
    //     "text-shadow": ".075vw -.015vw .4vw rgba(0,0,0,0.3)",
    //     skewX: 13,
    //     scaleY: .8,
    //     opacity: 1
    // }, 'text+=1.2')
    .to($('.left'), 1,{
        x: '14vw',
        opacity: 1,
        ease: Power4.easeInOut
    }, 'text+=1.5')
    .to($('.right'), 1,{
        x: '-14vw',
        opacity: 1,
        ease: Power4.easeInOut
    }, 'text+=1.5')
    .to($('.left'), 1,{
        x: '-17.9vw',
        y: '-5.5vw',
        ease: Power4.easeInOut,
    }, 'text+=2.3')
    .to($('.right'), 1,{
        x: '-46.2vw',
        y: '-5.5vw',
        ease: Power4.easeInOut,
        onComplete: function() {$('.loading').addClass('done')}
    }, 'text+=2.3')
    .to($('.sc-work'), 1, {
        opacity: 1
    })
    // gsap.utils.toArray($('.split')).forEach(function(split, i){
    //     gsap.to(split,{onComplete: function() {console.log(split.index);/* split.addClass('active') */}})
    // })

    // $('.split').each(function(i){
        
    //     setTimeout(() => {$(this).addClass('active');}, 2000);
    // })
    // console.log(arr);

    // .addLabel('load')
    // .to($('.text1'),1,{y: -50, ease: Power4.easeInOut,}, 'load+=.5')
    // .to($('.text2'),{onComplete: function() {$('.text2').addClass('active')}}, 'load+=.6')
    // .to($('.text3'),{onComplete: function() {$('.text3').addClass('active')}}, 'load+=1.5')
    // .to($('.text2'),1,{xPercent: 0, ease: Power4.easeIn, delay: 1}, 'load')
    // .to($('.text3'),1,{xPercent: 200, ease: Power4.easeIn, delay: 1}, 'load')

    
    // gsap.delayedCall(1.5, $('.text2').addClass('active'))

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