	// JavaScript Document
	$(function(){
		//header
	    $('header').load('common.html .header', function(){	    
	    	// header 進場
			/*選單高度*/
			function rwdHeaderH(){
				var headerH = $('header').outerHeight();			
				$('.main').css({'padding-top':headerH});		
			}
			$(window).on('resize' ,function(){
				rwdHeaderH();
			});
			$(document).ready(function() {
				rwdHeaderH();
			});
			//選單至頂
			var previousScroll = 0;
		    $('header').removeClass('hide');
		    //頁面滑動時，TOP的變化
		    $(window).scroll(function(){
		      var theEnd = $(document).height()-$(window).height()-100; //內容到底時
		      var currentScroll = $(this).scrollTop();//偵測滑鼠行為	      
		      if( currentScroll < previousScroll) {
		        $('header').stop().removeClass('hide'); //如果頁面往上顯示選單
		      } if( currentScroll > previousScroll) {
		        $('header').stop().addClass('hide'); //如果頁面往下隱藏選單
		      } if($(window).scrollTop()>=theEnd){
		        $('header').stop().delay(500).removeClass('hide'); //如果頁面到底顯示選單
		      } if($(window).scrollTop() < 10){
		        $('header').stop().removeClass('hide'); //如果頁面到頂顯示選單
		      }
		      previousScroll = currentScroll;
		    });
		    $('.navToggle').click(function() {
				$(this).toggleClass('open');
				$('#menu').toggleClass('active');  
    		});
    		$('.items').click(function(){
	            // $('#menu').hide(0);  //因為有錨點，所以點擇後要把選單隱藏
	            $('.navToggle').removeClass('open');  //漢堡樣式
	            $('#menu').removeClass('active');  
	        });

		});
		//footer
		    $('footer').load('common.html .footer', function(){
		        //按鈕 TOP
		        $('.btn-top').click(function() {
		            $('html,body').animate({scrollTop:0},900);
		        });
		    });
		//popup
		$(document).ready(function() {
		  $('.popup-btn').click(function(e) {
		    $('.popup-wrap').fadeIn(500);
		    $('.popup-box').removeClass('transform-out').addClass('transform-in');
		    e.preventDefault();
		  });

		  $('.popup-close').click(function(e) {
		    $('.popup-wrap').fadeOut(500);
		    $('.popup-box').removeClass('transform-in').addClass('transform-out');
		    e.preventDefault();
		  });
		});





		// $('.popup .close').click(function(){
		//     $('.popup').removeClass('on');
		//  	}).children().click(function(){
		// });
		//loading
		    $(window).on('load',function(){  //頁面物件載入完畢
		      $(".loading").fadeOut();  //關閉 loading
		              
		    });
	});