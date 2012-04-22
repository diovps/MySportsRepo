function scrollHorizontal(){
	var mouseWheelEvt = function (e){
    						var event = e || window.event;
						    if (document.body.doScroll)
						        document.body.doScroll(event.wheelDelta>0?"left":"right");
						    else if ((event.wheelDelta || event.detail) > 0)
						        document.body.scrollLeft -= 25;
						    else
						        document.body.scrollLeft += 25;

						    return false;
						}
	if ("onmousewheel" in document.body)
	    document.body.onmousewheel = mouseWheelEvt;
	else
	    document.body.addEventListener("DOMMouseScroll", mouseWheelEvt);
};

function main(){

	function clickSlide(clicked, toShow, toFocus){
		clicked.click(function(){
			toShow.show();
			$("#screen_primary").animate({"top": "+=100%"}, 300, function(){
				$("#screen_secondary").fadeIn("fast");
			});
			$("#menu_options").fadeOut("fast", function(){
				$("#back").fadeIn("fast");
			});
			toFocus.focus();
		});
	};

	$("#back, .submit").click(function(){
		$("#back").fadeOut("fast", function(){
			$("#menu_options").fadeIn("fast");
		});
		$("#screen_secondary").fadeOut("fast", function(){
			$("#screen_primary").animate({"top": "-=100%"}, 300, function(){
				$(".position1").css("left", "50%")
				$(".position2").css("left", "150%")
				$(".position3").css("left", "250%")
				$("#subscreen_post, #subscreen_find, #subscreen_menu").hide();
			});
		});
	});

	clickSlide($("#post_event"), $("#subscreen_post"), $("#input_gametype"));
	clickSlide($("#find_event"), $("#subscreen_find"));
	clickSlide($("#menu"), $("#subscreen_menu"));

	function showOption(btn, option){
		btn.click(function(){
			$(".option").hide();
			option.show();
		});
	};

	showOption($("#findby_location_btn"), $("#findby_location"));
	showOption($("#findby_gametype_btn"), $("#findby_gametype"));
	showOption($("#findby_players_btn"), $("#findby_players"));

	showOption($("#settings_btn"), $("#settings_screen"));
	showOption($("#about_btn"), $("#about_screen"));
	showOption($("#contact_btn"), $("#contact_screen"));

	function nextBack(clicked, direction){
		clicked.click(function(){
			$(".input_field").animate({"left": direction});
		});
	};

	nextBack($(".next_position"), "-=100%");
	nextBack($(".back_position"), "+=100%");

	$(".submit").click(function(){
		$("#firstInfo").submit();	
	});	
};

$(document).ready(function(){

	scrollHorizontal();
	main();

});
