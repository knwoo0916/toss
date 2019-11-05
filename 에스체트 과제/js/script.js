var lastScrollTop = 0;
let count1 = true;
let count2 = true;

$(window).scroll(function (event) {
    didScroll = true;
});

$(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

$(window).on("mousewheel", (e) => {
    var st = $(this).scrollTop();

    if (st > 100) {
        $('.bar').removeClass('off').addClass('on');
    } else {
        $('.bar').removeClass('on').addClass('off');
    }

    if (st > 200 && st < 1600) {
        $('.bg_img').removeClass('off').addClass('on');
        $('.achivment_text > div').removeClass('off').addClass('on');
        if (count1) {
            countNumber(2300, $("#down"), 3000);
            countNumber(36, $("#trade"), 3000);
        }
        count1 = false;
    } else {
        $('.bg_img').removeClass('on').addClass('off');
        $('.achivment_text > div').removeClass('on').addClass('off');
        count1 = true;
    }

    if (st > 1100 && st < 2900) {
        $('.remittance').addClass('page_on');
    } else {
        $('.remittance').removeClass('page_on');
    }

    if (st > 2200 && st < 3500) {
        $('.account').addClass('page_on');
        $('.bank > li').removeClass('off').addClass('on');
        if (count2) {
            countNumber(2134000, $("#km"), 3000);
            countNumber(1126600, $("#sh"), 3000);
            countNumber(684000, $("#hn"), 3000);
            countNumber(339050, $("#wr"), 3000);
            countNumber(1412000, $("#nh"), 3000);
        }
        count2 = false;
    } else {
        $('.account').removeClass('page_on');
        $('.bank > li').removeClass('on').addClass('off');
        count2 = true;
    }

    lastScrollTop = st;
});

//숫자를 올려주는 애니메이션 프레임 돌리는 곳
function countNumber(num, dom, time) {
    //1초에 30번 실행하며 애니메이션
    var term = num * 1000 / 50 / time;
    var now = 0;
    let timer = setInterval(() => {
        now += term;
        if (now >= num) {
            now = num;
            clearInterval(timer);
        }
        dom.html(Math.floor(now).toLocaleString());

    }, 1000 / 50);
}

function button() {
    $('.button').animate({
        top: "2px"
    }, 500, function () {
        $(this).animate({
            top: "-2px"
        }, 500);
    });
}

var timer = setInterval(function () {
    button();
}, 1000);

function button_click() {
    $('html, body').animate({
        scrollTop: "879px"
    }, 500);
}

function phone_tab_active(num) {
    $('.tab > div').eq(num).addClass('active');
    $('.ex > div').eq(num).addClass('active');
    for (var i = 0; i < 4; i++) {
        if (i != num) {
            $('.tab > div').eq(i).removeClass('active');
            $('.ex > div').eq(i).removeClass('active');
        }
    }
    $('.phone_tab > img').eq(num).css({
        zIndex: "100"
    });
    $('.phone_tab > img').eq(num).animate({
        left: "0"
    }, 0, function () {
        for (var i = 0; i < 4; i++) {
            if (i != num) {
                $('.phone_tab > img').eq(i).css({
                    zIndex: "10"
                });
                $('.phone_tab > img').eq(i).animate({
                    left: "100%"
                }, 500);
            }
        }
    })
}

function bank_list_open() {
    $('.bank_all').css({
        marginTop: "880px"
    });
    $('.white').css({
        marginTop: "1440px"
    });
    $('.bank_button').removeAttr('onclick');
    $('.bank_button').text("닫기");
    $('.bank_button').attr('onclick', 'bank_list_close();');
    document.body.scrollTop = document.body.scrollHeight;
}

function bank_list_close() {
    $('.bank_all').css({
        marginTop: "920px"
    });
    $('.white').css({
        marginTop: "920px"
    });
    $('.bank_button').removeAttr('onclick');
    $('.bank_button').text("제휴 은행 모두보기");
    $('.bank_button').attr('onclick', 'bank_list_open();');
}
