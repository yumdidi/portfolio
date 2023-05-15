//fullpage 스크립트 + 앵커 스크립트
$(document).ready(function () {
    $("#fullpage").fullpage({
        anchors: ["visual", "instructor", "curriculum", "service", "footer"],
        menu: "#topMenu",
        // navigation: true,
        // scrollBar: true,
    });

    $(".case a").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        $(this).find("img").css({
            top:-(imgH-caseH)
        });
    });
    $(".case a").on("mouseleave", function(){
        $(this).find("img").css({
            top:0
        });
    });
        // 모바일 버튼 
        $(".m_btn").on("click", function(){
            $(".m_btn_menu").toggleClass("on")
            $(this).toggleClass("on")
        });
});


// // 슬라이드
// $(document).ready(function () {
//     $('.slider').bxSlider({
//         auto: false,
//         pager: true,
//         minSlides: 4,
//         maxSlides: 4,
//         moveSlides: 1,
//         slideWidth: 400,
//         slideMargin: 65,
//     });
// });

$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        pause: 3000,
        pager: false,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 250,
        slideMargin: 20,
    });
});