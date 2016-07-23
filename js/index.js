$(function(){
    var $menu=$('.menu');
    var $navbox=$('.nav-box');
    var $list=$(".list");
    var ch=document.documentElement.clientHeight;
    $(window).resize(function(){
        var cw=document.documentElement.clientWidth;
        if(cw<768){
            var cw=$menu.attr('id');
        }
    })
    $menu.click(function(){
        var ids=$(this).attr('id');
        if(ids=='active'){
            $(this).removeAttr('id');
            $navbox.css({ background:"rgba(0,0,0,0.8)"});
            $list.css({"height":0,"paddingTop":0,display:"none"})
        }else{
            $(this).attr('id','active');
            $navbox.css({background:"#000"});
            $list.css({height:(ch-44),paddingTop:"20px",display:"block"})
            
        }
    })
    var $box=$('.banner');
    var $imgs=$(".box div");
    var $lis=$('.anniu li');
    var $btnR=$(".banner .right");
    var $btnL=$(".banner .left");
    //图片宽度
    var flag=true;
    var $widths=$imgs.eq(0).width();
    $(".box div:not(:first)").css({left:$widths+"px"});
    $lis.eq(0).addClass("hot");

    //记录下标
    var index=0;
    var next=0;
    //启动轮播
    var t=setInterval(moveR,1000)
    function moveR(){
        //更新下标
        next++;
        //判断边界
        if(next==$imgs.length){
            next=0;
        }
        //就位
    $(window).resize(function(){
    	var $widths=$imgs.eq(0).width();
    })

        $lis.eq(index).removeClass("hot");
        $lis.eq(next).addClass("hot");
        $imgs.eq(next).css({left:$widths+"px"});
        $imgs.eq(index).animate({left:-$widths})
        $imgs.eq(next).animate({left:0},function(){
            flag=true;
        });
        index=next;

    }
    //box移入和离开
    $box.mouseover(function(){
        clearInterval(t)
    })
    $box.mouseout(function(){
        t=setInterval(moveR,1000)
    })
    // //选项卡
    $lis.click(function(){
        var indexs=$(this).index();
        if(indexs==index){
            return;
        }
        // 		//就位
        $lis.removeClass("hot");
        $lis.eq(indexs).addClass("hot");
        // 		//动画
        if(index>indexs){
            $imgs.eq(indexs).css({left:$widths+"px"});
            $imgs.eq(index).animate({left:-$widths})
            $imgs.eq(indexs).animate({left:0},function(){
                flag=true;
            })
        }

        if(index<indexs){
            $imgs.eq(indexs).css({left:-$widths+"px"});
            $imgs.eq(index).animate({left:$widths})
            $imgs.eq(indexs).animate({left:0},function(){
                flag=true;
            })
        }

        // 		//更新
        index=indexs;
        // 		//保证上面和下面的同步
        next=index;
    })
    // 	}
    // };
    // //左右按键
    $btnR.click(function(){
        if(flag){
            flag=false;
            moveR();
        }
    })
    $btnL.click(function(){
        if(flag){
            flag=false;
            moveL();
        }
    })
    function moveL(){
        next--;
        //判断边界
        if(next<0){
            next=$imgs.length-1;
        }
        //就位

        $lis.eq(index).removeClass("hot");
        $lis.eq(next).addClass("hot");
        $imgs.eq(next).css({left:-$widths+"px"});
        $imgs.eq(index).animate({left:$widths});
        $imgs.eq(next).animate({left:0},function(){
            flag=true;
        });
        index=next;

    }
     $(".menu-title").click(function(){
        $(window).finish();
        $(this).children(".menu-con").slideToggle(200);
        $(".menu-title").css("font-weight","normal");
        $(this).css("font-weight","bold");
        $(".menu-con").css("font-weight","normal");
    })
})