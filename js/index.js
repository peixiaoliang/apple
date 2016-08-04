$(function(){
	var $menu=$('.menu');
	var $navBox=$('.nav-box');
	var $list=$('.list');
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
			$navBox.css('background','rgba(0,0,0,0.8)');
			$list.css({'height':0,'paddingTop':0,'display':'none'});
		}else{
			$(this).attr('id','active');
			$navBox.css('background','#000');
			$list.css({'height':(ch-44),'paddingTop':'20px','display':'block'});
		}
	})
})
// 轮播图
$(function(){
    var $win=$('.banner');
    var $wheel=$('.bannertp');
    var $imgs=$('.abanner');
    var $btnR=$('.btnR');
    var $btnL=$('.btnL');
    var $indexBtn=$('.dotnav');
    var $len=$imgs.length;
    var flag=true;
    console.log($imgs)
    $imgs.css('left','100%').eq(0).css('left','0');
    for(var i=1;i<=$len;i++){
        // $indexBtn.append('<li></li>');
        // var str=i;
        // if(i==1){
        //     var str='<li class="hot">'+i+'</li>';
        // }else{
        //     var str='<li>'+i+'</li>';
        // }
        var str=i==1?'<li class="hot"></li>':'<li></li>';
        $indexBtn.append(str);
    }
    
    var $lis=$('.dotnav>li');
    var now=0;
    var next=0;
    var time=2000;
    var t=setInterval(moveR,time);
    function moveR(){
        next++;
        if(next==$len){
            next=0;
        }
        $imgs.eq(next).css('left','100%');
        $imgs.eq(now).animate({'left':'-100%'});
        $imgs.eq(next).animate({'left':'0'},function(){
            flag=true;
        });
        
        $lis.eq(now).removeClass('hot');
        $lis.eq(next).addClass('hot');
        now=next;
    }

     function moveL(){
        next--;
        if(next<0){
            next=$imgs.length-1;
        }
        $imgs.eq(next).css('left','-100%');
        $imgs.eq(now).animate({'left':'100%'});
        $imgs.eq(next).animate({'left':'0'},function(){
            flag=true;
        });
        
        $lis.eq(now).removeClass('hot');
        $lis.eq(next).addClass('hot');
        now=next;
    }

    $lis.click(function(){
        if(!flag){return;}
        flag=false;
        var i=$(this).index();
        if(now==i){
            return;
        }
        if(now<i){
            $imgs.eq(i).css('left','100%');
            $imgs.eq(now).animate({'left':'-100%'},500);
            $imgs.eq(i).animate({'left':'0'},500);
        }else if(now>i){
            $imgs.eq(i).css('left','-100%');
            $imgs.eq(now).animate({'left':'100%'},500);
            $imgs.eq(i).animate({'left':'0'},500);
        }
        $imgs.eq(now).animate({left:'100%'},500);
        $imgs.eq(i).animate({left:'0'},500,function(){
            flag=true;
        });
        $lis.eq(now).removeClass('hot');
        $lis.eq(i).addClass('hot');
        next=now=i;
    })
    $win.mouseover(function(){
        clearInterval(t);
    })
    $win.mouseout(function(){
        t=setInterval(moveR,time);
    })
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
})

/* 小屏链接动画 */
$(function(){
	var $cols=$(".link .cols");
	console.log($cols)
	var $uls=$(".link ul");
	var $h3s=$(".link h3");
	$h3s.click(function(){
		var idss=$(this).attr("id");
		var index=$(this).index(".link h3");
		if(idss=="active"){
			$(this).removeAttr("id");
			$uls.eq(index).removeAttr("id");
		}else{
			$(this).attr("id","active");
			$uls.eq(index).attr("id","active");
		}
	})
})