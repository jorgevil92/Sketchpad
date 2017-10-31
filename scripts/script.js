$(document).ready( function(){
	var container = $('.container');
	function drawGrid ($, side){
		var style = "";
		var i=0, j=0;
		for(i=0; i<side; i++){
			for(j=0; j<side; j++){
				container.append("<div class='section r"+i+" c"+j+"' data-row = "+i+" data-col = "+j+"></div>");
			}
		}
		container.css('grid-template-columns', 'repeat('+side+', 1fr)');
		for(i=0;i<side;i++){
			style = style + " 1fr";
		}

	}
	function getRandomColor (){
		var digits = "0123456789ABCDEF";
		var color = "#";
		for(i=0;i<6;i++){
			color+=digits[Math.floor(Math.random()*16)];
		}
		return color;
	}

	drawGrid($, 9);

	$('#new-grid').on('click', function(){
		var sides = parseInt(window.prompt("how many cols/rows should the grid have?"));

		container.empty();
		drawGrid($, sides);
	});

	$('#randomize').on('click', function(){
		container.attr('random', 'true');
	});
	$('#black').on('click', function(){
		container.attr('random', 'false');
	});



		container.on('mouseenter', '.section', function(){
		if(container.attr('random')=='true'){
			$(this).css('background-color', getRandomColor());
		}else{
			$(this).css('background-color', '#000000');
		}
	});
});
