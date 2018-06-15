/**
 * Created by lenvov on 2017/4/25.
 */
function collect(){
    alert("收藏网页成功！"); //点击收藏，弹出文本
}
function sent(){
    alert("对不起，您还没有登录！"); //点击发表，弹出文本
}


$(function(){
   $('.left_list .left_food').hover(function(){
       $(this).addClass('list_active');  //鼠标移入，加入样式
       $(' .more_pos').eq($(this).index()).hide();//小箭头消失
       $('.left_hide1').show();//左边隐藏部分出现
   },function(){
       $(this).removeClass('list_active');//鼠标移出，回到原先样式
       $(' .more_pos').eq($(this).index()).show();//小箭头出现
       $('.left_hide1').hide();//左边样式隐藏
   });

    $('.left_list .left_sports').hover(function(){
        $(this).addClass('list_active');
        $(' .more_pos').eq($(this).index()).hide();
        $('.left_hide2').show();
    },function(){
        $(this).removeClass('list_active');
        $(' .more_pos').eq($(this).index()).show();
        $('.left_hide2').hide();
    });

    $('.left_list .left_play').hover(function(){
        $(this).addClass('list_active');
        $(' .more_pos').eq($(this).index()).hide();
        $('.left_hide3').show();
    },function(){
        $(this).removeClass('list_active');
        $(' .more_pos').eq($(this).index()).show();
        $('.left_hide3').hide();
    });

    $('.left_list .left_page').hover(function(){
        $(this).addClass('list_active');
        $(' .more_pos').eq($(this).index()).hide();
        $('.left_hide4').show();
    },function(){
        $(this).removeClass('list_active');
        $(' .more_pos').eq($(this).index()).show();
        $('.left_hide4').hide();
    });

    $('.left_list .left_prize').hover(function(){
        $(this).addClass('list_active');
        $(' .more_pos').eq($(this).index()).hide();
        $('.left_hide5').show();
    },function(){
        $(this).removeClass('list_active');
        $(' .more_pos').eq($(this).index()).show();
        $('.left_hide5').hide();
    });

});

//回到顶部
$(function(){
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $(".back_to_top").fadeIn(3000);
            }
            else
            {
                $(".back_to_top").fadeOut(1000);
            }
        });

//当点击跳转链接后，回到页面顶部位置
        $(".back_to_top").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    });
});

