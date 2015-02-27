$(document).ready(function() {
	$('.slide').css("background","rgba(0,0,0,0.7");
	$('#container div').click(function() {

		$('.slide').slideUp(1);
		str=$(this).attr('class');
		t=parseInt(str.slice(1,3));
		if(str.length==3){
		for (var i = 1; i < 12; i++) {
			x=$('#container div:nth-child('+i+')').attr('class');
			$('#container div:nth-child('+i+')').removeClass(x);
			$('#container div:nth-child('+i+')').addClass(x+'a');
		};
		$('#yo').show(2000);
		c=$("#slate img:visible").attr('id');
		k=parseInt(c.slice(1,3));
		$("#slate img:visible").fadeOut(function(){
			f=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(f);
			$('#container div:nth-child('+k+')').addClass(f.slice(0,3)+'a');
			l=$('#container div:nth-child('+t+')').attr('class');
			$('#container div:nth-child('+t+')').removeClass(l);
			$('#container div:nth-child('+t+')').addClass(l.slice(0,3)+'b');
				$("#slate img:nth-child("+t+")").fadeIn();	
				$(".caption").text($("#slate img:visible").attr("alt"));
		});
	}
	else{

		c=$("#slate img:visible").attr('id');
		k=parseInt(c.slice(1,3));
		$("#slate img:visible").fadeOut(function() {
			f=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(f);
			$('#container div:nth-child('+k+')').addClass(f.slice(0,3)+'a');
			l=$('#container div:nth-child('+t+')').attr('class');
			$('#container div:nth-child('+t+')').removeClass(l);
			$('#container div:nth-child('+t+')').addClass(l.slice(0,3)+'b');
			$("#slate img:nth-child("+t+")").fadeIn(2000);
			$(".caption").text($("#slate img:visible").attr("alt"));
		});

	}
		});

	$('#close').click(function() {
		$('#yo').slideUp(10);
		for (var i = 1; i < 12; i++) {
			x=$('#container div:nth-child('+i+')').attr('class');
			$('#container div:nth-child('+i+')').removeClass(x);
			$('#container div:nth-child('+i+')').addClass(x.slice(0,3));
			$('.slide').css("background","rgba(0,0,0,0.7)");
			$('.slide').css("height","25px");
			$('.slide').css("width","inherit");
			$('.slide').css("transform","rotate(0deg) scale(1) skew(0deg)")
			$('.slide').css("top","0%");
			$('.slide').css("left","0%");
		};
	});


	
			$('#container div').mouseenter(function() {
				y=$('#container div:hover').attr('class');
				x=$('.'+y+' div:nth-child(1)').attr('id');
				$('#'+x).text($('.'+y).attr("alt"));
				$('#'+x).slideDown(300);
			$('#container div').mouseleave(function() {
				$('#'+x).slideUp(1);
			});
		});

});


$(window).load(function(){ 

	$("#slate").after('<a id="prev" href="#"></a><a id="next" href="#></a>');

	$(".caption").text($("#slate img:visible").attr("alt"));
	$('.slide').css("background","rgba(0,0,0,0.7");
	// Next controls
	$("#next").click(function(){
		c=$("#slate img:visible").attr('id');
		k=parseInt(c.slice(1,3));
		if($("#slate img:last").is(":visible")){
			$("#slate img:visible").fadeOut(function(){
				f=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(f);
			$('#container div:nth-child('+k+')').addClass(f.slice(0,3)+'a');
			l=$('#container div:nth-child(1)').attr('class');
			$('#container div:nth-child(1)').removeClass(l);
			$('#container div:nth-child(1)').addClass(l.slice(0,3)+'b');
				$("#slate img:first").fadeIn(2000);	
				$(".caption").text($("#slate img:visible").attr("alt"));
			});
		}
		else{
			$("#slate img:visible").fadeOut(function(){
				f=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(f);
			$('#container div:nth-child('+k+')').addClass(f.slice(0,3)+'a');
			k=k+1;
			l=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(l);
			$('#container div:nth-child('+k+')').addClass(l.slice(0,3)+'b');
				$(this).next().fadeIn(2000);
				$(".caption").text($("#slate img:visible").attr("alt"));
			});
		}
		return false;
	});

	// Previous controls
	$("#prev").click(function(){
		c=$("#slate img:visible").attr('id');
		k=parseInt(c.slice(1,3));
		if($("#slate img:first").is(":visible")){
			$("#slate img:visible").fadeOut(function(){
				f=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(f);
			$('#container div:nth-child('+k+')').addClass(f.slice(0,3)+'a');
			l=$('#container div:nth-child(11)').attr('class');
			$('#container div:nth-child(11)').removeClass(l);
			$('#container div:nth-child(11)').addClass(l.slice(0,3)+'b');
				$("#slate img:last").fadeIn(2000);
				$(".caption").text($("#slate img:visible").attr("alt"));
			});
		}
		else{
			$("#slate img:visible").fadeOut(function(){
				f=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(f);
			$('#container div:nth-child('+k+')').addClass(f.slice(0,3)+'a');
			k=k-1;
			l=$('#container div:nth-child('+k+')').attr('class');
			$('#container div:nth-child('+k+')').removeClass(l);
			$('#container div:nth-child('+k+')').addClass(l.slice(0,3)+'b');
				$(this).prev().fadeIn(2000);
				$(".caption").text($("#slate img:visible").attr("alt"));
			});
		}
		return false;
	});

});
