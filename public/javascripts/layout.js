function toggleScreen(){

	function slideUp(){
		$(".screen").animate({"top": "+=100%"}, 300);

		$("#menu_options").fadeOut("fast", function(){
			$("#back").fadeIn("fast");
		});
	};

	$("#post_event").click(function(){
		$("#subscreen_post").show();
		$("#input_gametype").focus();
		slideUp();
	});

	$("#find_event").click(function(){
		$("#subscreen_find").show();
		slideUp();
	});

	$("#menu").click(function(){
		$("#subscreen_menu").show();
		slideUp();
	});
	
	$("#back").click(function(){
		$("#back").fadeOut("fast", function(){
			$("#menu_options").fadeIn("fast");
		});

		$(".screen").animate({"top": "-=100%"}, 300, function(){
			$(".position1").css("left", "50%")
			$(".position2").css("left", "150%")
			$(".position3").css("left", "250%")

			$("#subscreen_post, #subscreen_find, #subscreen_menu").hide();
		});
	});


	$(".submit").click(function(){
                $("#firstInfo").submit();
                $("#back").fadeOut("fast", function(){
                        $("#menu_options").fadeIn("fast");
                });

                $(".screen").animate({"top": "-=100%"}, 300, function(){
                        $(".position1").css("left", "50%")
                        $(".position2").css("left", "150%")
                        $(".position3").css("left", "250%")

                        $("#subscreen_post, #subscreen_find, #subscreen_menu").hide();
                });
        });

};

function navInputFields(){
	function showOption(btn, option){
		btn.click(function(){
			$(".option").hide();
			option.show();
		});
	}

	showOption($("#findby_location_btn"), $("#findby_location"));
	showOption($("#findby_gametype_btn"), $("#findby_gametype"));
	showOption($("#findby_players_btn"), $("#findby_players"));

	showOption($("#settings_btn"), $("#settings_screen"));
	showOption($("#about_btn"), $("#about_screen"));
	showOption($("#contact_btn"), $("#contact_screen"));

	$(".next_position").click(function(){
		//$("#firstInfo").submit();
		$(".input_field").animate({"left": "-=100%"});
	});

	$(".back_position").click(function(){
		$(".input_field").animate({"left": "+=100%"});
	});
};

$(document).ready(function(){
	toggleScreen();
	navInputFields();

});
