window.onload=function(){

    // bg_ani
    // 변수 선언 및 0으로 초기화
    var count=0;
    // document문서에서 아이디가 image인 객체를 찾아서 변수 image에 저장
    var image= document.getElementById('image');
    // frames라는 배열 선언하고 데이터 저장
    var frames = [
        'img/a1.png','img/a2.png','img/a3.png','img/a4.png','img/a5.png','img/a6.png','img/a7.png','img/a8.png','img/a9.png',
        'img/a10.png','img/a11.png','img/a12.png','img/a13.png','img/a14.png','img/a15.png','img/a16.png','img/a17.png','img/a18.png'
    ];
    // 0.1초마다 function(){}안의 명령어 실행
    setInterval(function(){
        // image객체의 src속성에 frames 배열에 있는 데이터 추가
        // count변수의 값을 frames배열의 총길이로 나눈 나머지 =>frames배열의 인덱스번호로 사용
        image.src=frames[count % frames.length];
        // count변수의 값을 1씩 증가
        count=count+1;
    },80);

    $('.talk ul li').hide();

    $('#fullpage').fullpage({
        normalScrollElements: '.swiper',
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips:['MAIN','NEW PODUCT','SHOP','LOOK BOOK','CULTURE','OFFLINE','GOAL STUDIO'],
        // fullpage의 내용이 모두 로드(Load)되고 나면 function(){}의 내용을 실행함
        afterLoad:function(anchorLink, index){
            // 만약 section의 인덱스 번호가 7라면
            if(index==1){
                // 내비게이션 사라짐
                $('header').fadeOut(100);
                $('#shooting').fadeIn(300);
                $('.talk ul li').fadeOut(300);
            }else if(index==2){
                // fullpage 내비게이션 나타남
                $('header').fadeIn(300);
                $('#shooting').fadeOut(300);
                $('nav ul li i').animate({marginTop:80});
                $('nav ul li:nth-child(1) i').animate({marginTop:0});
                $('.talk ul li').fadeOut(300);
                $('.talk ul li:nth-child(1)').fadeIn(300);
            }else if(index==3){
                // fullpage 내비게이션 나타남
                $('#shooting').fadeOut(300);
                $('nav ul li i').animate({marginTop:80});
                $('nav ul li:nth-child(2) i').animate({marginTop:0});
                $('.talk ul li').fadeOut(300);
                $('.talk ul li:nth-child(2)').fadeIn(300);
            }else if(index==4){
                // fullpage 내비게이션 나타남
                $('#shooting').fadeOut(300);
                $('nav ul li i').animate({marginTop:80});
                $('nav ul li:nth-child(3) i').animate({marginTop:0});
                $('.talk ul li').fadeOut(300);
                $('.talk ul li:nth-child(3)').fadeIn(300);
            }else if(index==5){
                // fullpage 내비게이션 나타남
                $('#shooting').fadeOut(300);
                $('nav ul li i').animate({marginTop:80});
                $('nav ul li:nth-child(4) i').animate({marginTop:0});
                $('.talk ul li').fadeOut(300);
                $('.talk ul li:nth-child(4)').fadeIn(300);
            }else if(index==6){
                // fullpage 내비게이션 나타남
                $('#shooting').fadeOut(300);
                $('.section.s6.active .center_box').css('opacity','1');
                $('nav ul li i').animate({marginTop:80});
                $('nav ul li:nth-child(5) i').animate({marginTop:0});
                $('.f_text').fadeOut(100);
                $('.talk ul li').fadeOut(300);
                $('.talk ul li:nth-child(5)').fadeIn(300);
            }else if(index==7){
                // fullpage 내비게이션 나타남
                $('nav ul li i').animate({marginTop:80});
                $('.section.s6 .center_box').css({"opacity":"0"});
                $('#shooting').fadeIn(300);
                $('.f_text').fadeIn(100);
                $('.talk ul li').fadeOut(300);
            }

        },
        onLeave: function(index, nextIndex, direction){
            var idx = Math.abs(index - nextIndex)*.250;
            $.fn.fullpage.setScrollingSpeed(idx*2000);
            }
    });
    
    // swiper
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        speed : 500,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    $('.logo').click(function(){
        $.fn.fullpage.moveTo(1,1);
        $.fn.fullpage.setAllowScrolling(true);
        $('.popup ul li').stop().fadeOut();
    });
    $('nav > ul > li:nth-child(1)').click(function(){
        $.fn.fullpage.moveTo(2,1);
        $.fn.fullpage.setAllowScrolling(true);
        $('.popup ul li').stop().fadeOut();
    });
    $('nav > ul > li:nth-child(2)').click(function(){
        $.fn.fullpage.moveTo(3,1);
        $.fn.fullpage.setAllowScrolling(true);
        $('.popup ul li').stop().fadeOut();
    });
    $('nav > ul > li:nth-child(3)').click(function(){
        $.fn.fullpage.moveTo(4,1);
        $.fn.fullpage.setAllowScrolling(true);
        $('.popup ul li').stop().fadeOut();
    });
    $('nav > ul > li:nth-child(4)').click(function(){
        $.fn.fullpage.moveTo(5,1);
        $.fn.fullpage.setAllowScrolling(true);
        $('.popup ul li').stop().fadeOut();
    });
    $('nav > ul > li:nth-child(5)').click(function(){
        $.fn.fullpage.moveTo(6,1);
        $.fn.fullpage.setAllowScrolling(true);
        $('.popup ul li').stop().fadeOut();
    });


    
    $('.detail > div').hide();
    $('.detail > .nohover').show();
    $('.skill').mouseleave(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .nohover').stop().fadeIn();
    });
    $('.ps').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .ps_detail').stop().fadeIn();
    });

    $('.ai').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .ai_detail').stop().fadeIn();
    });

    $('.html').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .html_detail').stop().fadeIn();
    });
    $('.js').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .js_detail').stop().fadeIn();
    });
    $('.jq').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .jq_detail').stop().fadeIn();
    });
    $('.flutter').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .flutter_detail').stop().fadeIn();
    });
    $('.sm').hover(function(){
        $('.detail > div').stop().fadeOut();
        $('.detail > .sm_detail').stop().fadeIn();
    });

    var laptopsInner = document.querySelectorAll('div.laptop-inner');

    for (const laptopInner of laptopsInner) {
    laptopInner.addEventListener('mouseover', (e) => {
        var imageHeight = e.target.offsetHeight;
        var laptopHeight = e.currentTarget.offsetHeight;
        var scrollHeight = imageHeight-laptopHeight;
        console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);  
        e.target.style.transform = "translate3d(0, -"+scrollHeight+"px, 0)";
    });
    laptopInner.addEventListener('mouseout', (e) => {
        e.target.style.transform = "translate3d(0, 0, 0)";
    });
    }
    
    $('.popup ul li').hide();
    $('.graphic ul li').click(function(){
        var tab_Num=$(this).index();
        $('.popup ul li').eq(tab_Num).stop().fadeIn();
        $.fn.fullpage.setAllowScrolling(false);
    });
    $('.popup_header .box2').click(function(){
        $('.popup ul li').stop().fadeOut();
        $.fn.fullpage.setAllowScrolling(true);
    });

}