function horzontalScrolling(){
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

	//MENU VISIBILITY

		function clickSlide(clicked, toShow, toFocus){
			clicked.click(function(){
				toShow.show();
				$("#screen_primary").animate({"top": "+=100%"}, 300, function(){
					$("#screen_secondary").fadeIn("fast");
				});
				$("#menu_options").fadeOut("fast", function(){
					$("#back").fadeIn("fast");
				});
			});
		};

		clickSlide($("#post_event"), $("#subscreen_post"), $("#input_gametype"));
		clickSlide($("#find_event"), $("#subscreen_find"));
		clickSlide($("#menu"), $("#subscreen_menu"));

		function exitMenu(){
			$("#back").fadeOut("fast", function(){
				$("#menu_options").fadeIn("fast");
				window.scrollTo(0, 0);
			});
			$("#screen_secondary").fadeOut("fast", function(){
				$("#screen_primary").animate({"top": "-=100%"}, 300, function(){
					$("input").val("");
					$(".position1").css("left", "50%")
					$(".position2").css("left", "150%")
					$(".position3").css("left", "250%")
					$("#subscreen_post, #subscreen_find, #subscreen_menu").hide();
				});
			});
		};

		$("#back, .submit").click(function(){
			exitMenu();
		});

	//MENU NAVIGATION

		//SHOWING THE APPROPRIATE MENU BASED ON USER SELECTION

			function showOption(btn, option){
				btn.click(function(){
					$(".option").hide();
					option.show();
					$(".input_field").animate({"left": "-=100%"});
				});
			};

			showOption($("#findby_location_btn"), $("#findby_location"));
			showOption($("#findby_gametype_btn"), $("#findby_gametype"));
			showOption($("#findby_time_btn"), $("#findby_time"));

			showOption($("#settings_btn"), $("#settings_screen"));
			showOption($("#about_btn"), $("#about_screen"));
			showOption($("#contact_btn"), $("#contact_screen"));

		//FORM NAVIGATION

			$(".back_position").click(function(){
				$(".input_field").animate({"left": "+=100%"});
			});

			$("#input_time").keydown(function(e){
				if(e.which == 9 && e.shiftKey){
					$(".input_field").animate({"left": "+=100%"});
				};
			});

			//VALIDATION

				$("#input_players").keyup(function(e){
					if(isNaN($("#input_players").val())){
						$("#input_players").addClass("error");
					};
					if(isNaN($("#input_players").val()) == false){
						$("#input_players").removeClass("error");
					};
				});

				function validate(){
					if( ($("#input_players").hasClass("error") == false) && ( $("#input_gametype").val() !== "") && ( $("#input_players").val() !== "") ){
						$(".input_field").animate({"left": "-=100%"}, function(){
							$("#input_time").focus();
						});
					};
				}

				$(".next_position").click(function(){
					validate();

				});

				$("#input_players").keydown(function(e){
					if(e.which == 9 && !e.shiftKey || e.which == 13){
						validate();
					};
				});

	//EVENT CREATION


			$(".event_top").click(function(){
				$(this).parent().children(".event_inside").animate({"top": "-=100%"}, 200);
				$(this).parent().children(".event_bottom").click(function(){
					$(this).parent().children(".event_inside").animate({"top": "+=100%"}, 200);
				});
			});

			$(".event_bottom p:nth-child(1)").css("float", "right")

		$(".submit").click(function(){
			$("#firstInfo").submit();
		});

		$("#input_address").keyup(function(e){
			if(e.which == 13){
				createEvent();
				exitMenu();
			};
		});

	 	
};

$(document).ready(function(){
        horzontalScrolling();
	main();
});
