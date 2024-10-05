$(document).ready(function() {


    $(".info img").click(function(){
        $("#profile_modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#profile_modal").removeClass("active");
    });

    $(window).scroll(function() { 
        if($(this).scrollTop() > 1080) { 
            $("#top-btn").fadeIn("fast");
        } else {
            $("#top-btn").fadeOut("fast");
        }
    });
    $("#top-btn").click(function() {
        $("html").animate({scrollTop:0}, 500);
    });
  $(function() {
        // 스타벅스
        $(function() {

            $('#banner1_modal').hide();
    
    
            $(".starbucks a").click(function(event) {
                    event.preventDefault(); // a 태그의 기본 동작 막기
                    $("#banner1_modal").slideDown(300);
                    $("body").css({"overflow-y":"hidden"});
            });
    
            $("#banner1_modal #modalbtn").click(function() {
                    $("#banner1_modal").slideUp(300);
                    $("body").css({"overflow-y":"scroll"});
            });
        });
    // 춘식이
        $(function() {

            $('#banner2_modal').hide();
    
    
            $(".kakao a").click(function(event) {
                    event.preventDefault(); // a 태그의 기본 동작 막기
                    $("#banner2_modal").slideDown(300);
                    $("body").css({"overflow-y":"hidden"});
            });
    
            $("#banner2_modal #modalbtn").click(function() {
                    $("#banner2_modal").slideUp(300);
                    $("body").css({"overflow-y":"scroll"});
            });
        });
        // 숏툰
        $(function() {

            $('#banner3_modal').hide();
    
    
            $(".shorttoon a").click(function(event) {
                    event.preventDefault(); // a 태그의 기본 동작 막기
                    $("#banner3_modal").slideDown(300);
                    $("body").css({"overflow-y":"hidden"});
            });
    
            $("#banner3_modal #modalbtn").click(function() {
                    $("#banner3_modal").slideUp(300);
                    $("body").css({"overflow-y":"scroll"});
            });
        });
        // 미니리프팅
        $(function() {

            $('#banner4_modal').hide();
    
    
            $(".mini a").click(function(event) {
                    event.preventDefault(); // a 태그의 기본 동작 막기
                    $("#banner4_modal").slideDown(300);
                    $("body").css({"overflow-y":"hidden"});
            });
    
            $("#banner4_modal #modalbtn").click(function() {
                    $("#banner4_modal").slideUp(300);
                    $("body").css({"overflow-y":"scroll"});
            });
        });
        // 입술
        $(function() {

            $('#banner5_modal').hide();
    
    
            $(".rip a").click(function(event) {
                    event.preventDefault(); // a 태그의 기본 동작 막기
                    $("#banner5_modal").slideDown(300);
                    $("body").css({"overflow-y":"hidden"});
            });
    
            $("#banner5_modal #modalbtn").click(function() {
                    $("#banner5_modal").slideUp(300);
                    $("body").css({"overflow-y":"scroll"});
            });
        });
        // 오도어
            $('#banner6_modal').hide();


            $(".odor a").click(function(event) {
                event.preventDefault(); // a 태그의 기본 동작 막기
                $("#banner6_modal").slideDown(300);
                $("body").css({"overflow-y":"hidden"});
            });


            $("#banner6_modal #modalbtn").click(function() {
                $("#banner6_modal").slideUp(300);
                $("body").css({"overflow-y":"scroll"});
            });
                    // 오도어
            $('#banner6_modal').hide();


            $(".odor a").click(function(event) {
                event.preventDefault(); // a 태그의 기본 동작 막기
                $("#banner6_modal").slideDown(300);
                $("body").css({"overflow-y":"hidden"});
            });


            $("#banner6_modal #modalbtn").click(function() {
                $("#banner6_modal").slideUp(300);
                $("body").css({"overflow-y":"scroll"});
            });

            // 페리페라
            $('#banner7_modal').hide();


            $(".peri a").click(function(event) {
                event.preventDefault(); // a 태그의 기본 동작 막기
                $("#banner7_modal").slideDown(300);
                $("body").css({"overflow-y":"hidden"});
            });


            $("#banner7_modal #modalbtn").click(function() {
                $("#banner7_modal").slideUp(300);
                $("body").css({"overflow-y":"scroll"});
            });        
     });




            // 이솝
        $(function() {
            $('#banner8_modal').hide();


            $(".esop a").click(function(event) {
                event.preventDefault(); // a 태그의 기본 동작 막기
                $("#banner8_modal").slideDown(300);
                $("body").css({"overflow-y":"hidden"});
            });


            $("#banner8_modal #modalbtn").click(function() {
                $("#banner8_modal").slideUp(300);
                $("body").css({"overflow-y":"scroll"});
            });
        });

            // 미장센
            $(function() {
                $('#banner9_modal').hide();
    
    
                $(".hair a").click(function(event) {
                    event.preventDefault(); // a 태그의 기본 동작 막기
                    $("#banner9_modal").slideDown(300);
                    $("body").css({"overflow-y":"hidden"});
                });
    
    
                $("#banner9_modal #modalbtn").click(function() {
                    $("#banner9_modal").slideUp(300);
                    $("body").css({"overflow-y":"scroll"});
                });
            });





    const gnbA = $('#gnb > li > a');
    gnbA.click(function() { 
        const target = $(this).attr('href');	
		$('html').animate({ scrollTop : $(target).offset().top }, 1000);
	});
    
    $('.profile').css({ 'opacity': 0 });
    $('.skill').css({ 'opacity': 0 });
    $('.design_box').css({ 'opacity': 0 });
    $('.vidio_box').css({ 'opacity': 0 });
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > $('.profile').offset().top - 400) {
            $('.profile').animate({ 'opacity': 1 , 'marginTop': '-100px'}, 600);
        }
        if ($(document).scrollTop() > $('.skill').offset().top - 600) {
            $('.skill').animate({ 'opacity': 1 , 'marginTop': '100px'}, 600);
            $('.gauge').fadeIn(1000);
        }
        if ($(document).scrollTop() > $('.design_box').offset().top - 400) {
            $('.design_box').animate({ 'opacity': 1 }, 1000);
        }
        if ($(document).scrollTop() > $('.vidio_box').offset().top - 400) {
            $('.vidio_box').animate({ 'opacity': 1 }, 1000);
        }
    });
});

window.onload = function() {
    const $gauge = document.querySelectorAll('.gauge');
    const $gaugeTxt = document.querySelectorAll('.gauge-txt');
    const $skill = document.querySelector('.skill');
    console.log($skill);

    window.addEventListener('scroll', skilAnifnc, false);
    
    let result = [];
    function skilAnifnc() {
        if ( document.documentElement.scrollTop > $skill.offsetTop ) {
            for (let i = 0; i < $gaugeTxt.length; i++) {
                result[i] = $gaugeTxt[i].innerText;
                $gauge[i].style.width = result[i];
                $gauge[i].style.transition = 'all 1s ';
            }
        }
    }
}