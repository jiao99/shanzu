$(function(){
	$(".main-ul1>li").click(function(){
				
		var index=$(this).index()
				
		$(this).addClass("main-ul1-li").siblings().removeClass("main-ul1-li")
				
		$(".div-out>.main-box").eq(index).show().siblings().hide()
	})
	
	
	$(".dianji").click(function(){
		$(".mb-nr").fadeIn()
		$(".mb").fadeIn()
	});
		
	$(".mb").click(function(){
		$(".mb-nr").fadeOut()
		$(this).fadeOut()
//		return false;
	})
	
})