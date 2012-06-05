
	
		// When site loaded, load the Popupbox First
		//loadPopupBox();
	
		$('#popupBoxClose').click( function() {			
			unloadPopupBox();
		});
		
		$('#container').click( function() {
			unloadPopupBox();
		});

		function unloadPopupBox() {	// TO Unload the Popupbox
			$('#popup_box').fadeOut("slow");
			$("#container").css({ // this is just for style		
				"opacity": "1"  
			}); 
		}	
		
		function loadPopupBox() {	// To Load the Popupbox
		var offset1=$('#diaresult').offset();
	
	$('#popup_box').css({ top: offset1.top, left: offset1.left });
			$('#popup_box').fadeIn("slow");
			$("#container").css({ // this is just for style
				"opacity": "0.3"  
			}); 		
		}