/*  input.js  */
$(function(){
   $("#inputSearch").focus(function(){
       $(this).addClass("focus");
       if($(this).val() == this.defaultValue){
           $(this).val(" ");
       }
   }).blur(function(){
       $(this).removeClass("focus");
       if($(this).val() == ' '){
           $(this).val(this.defaultValue);
       }
   }).keyup(function(e){
       if(e.which == 13){
           alert("Enter submit form !");
       }
   })
})
/* 换肤changeSkin  */
$(function(){
    var $li = $("#skin li");
    $li.click(function(){
        switchSkin(this.id);
    });
    var cookie_skin = $.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }

});
function switchSkin(skinName){
$("#"+skinName).addClass("selected").siblings().removeClass("selected");
    $("#cssfile").attr("href","styles/skin/"+skinName+".css");
    $.cookie("MyCssSkin",skinName,{path:'/',expires:10})
}
/*  导航效果nav.js  */
$(function(){
    $("#nav li").hover(function(){
        $(this).find(".jnNav").show();
    },function(){
        $(this).find(".jnNav").hide();
    });
})
/*  热卖hot.js  */
$(function(){
    $(".jnCatalogInfo .promoted").append('<s class="hot"></s>');
})
/*  中间广告ad.js  */
$(function(){
    var $imgRolls = $("#jnImageRoll div a");
    $imgRolls.css("opacity","0.7");
    var len = $imgRolls.length;
    var index = 0;
    var adTimer = null;
    $imgRolls.mouseover(function(){
        index = $imgRolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
/* eq(0).mouseover() ?????????  滑入停止动画，画出开始动画*/
    $('#jnImageRoll').hover(function(){
        if(adTimer) {
            clearInterval(adTimer);
        }
        },function(){
            adTimer = setInterval(function(){
                showImg(index);
                index++;
                if(index == len){index = 0;}
            },3000);
     }).trigger("mouseleave");
})
function showImg(index){
    var $rollObj = $("#jnImageRoll");
    /*  广告数组  */
    var $rollList = $rollObj.find("div a");
    var newHref = $rollList.eq(index).attr('href');
    $("#JS_imgWrap").attr("href",newHref)
        .find("img").eq(index).stop(true,true).fadeIn()
        .siblings().fadeOut();
    $rollList.removeClass("ChoS").css("opacity","0.7")
        .eq(index).addClass("ChoS").css("opacity","1");
}
/*  右侧最新动态模块添加超链接提示tooltip.js  */
/*  有点不懂append 91行  */
$(function(){
    var x = 10;
    var y = 20;
    $("a .toolTip").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        var toolTip = "<div id='toolTip'>"+this.myTitle+"</div>";
        $("body").append(toolTip);
        $("#toolTip")
            .css({"top":(e.pageX+x)+"px","left":(e.pageY+y)+"px"}).show("fast");
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#toolTip").remove();
    }).mousemove(function(e){
        $("#toolTip").css({
            "top":(e.pageX+x)+"px",
            "left":(e.pageY+y)+"px"
        });
    });
})

/*  右下角活动横向滚动效果imgSlide.js  */
$(function(){
    $("#jnBrandTab li a").click(function(){
        $(this).parent().addClass("ChoS")
            .siblings().removeClass("ChoS");
        var idx = $("#jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
function showBrandList(index){
    var $rollObj = $("#jnBrandList");
    var rollWidth = $rollObj.find("li").outerWidth();
    rollWidth = rollWidth*4;
    $rollObj.stop(true,false).animate({left:-rollWidth*index},1000);
}
/*  右下部光标划过产品列表效果imgHover.js  */
$(function(){
    $("#jnBrandList li").each(function(){
        /* p281  */
    })
})
/**
 * Created by Lawrence on 2016/12/5.
 */
