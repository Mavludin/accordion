$(function() {

	var btn = document.querySelectorAll('div');
	var blocks = document.querySelectorAll('ul');
	var allArrows = document.querySelectorAll('i');

	var saveHeights = [];

	$('ul').each(function(){
		saveHeights.push($(this).height());
	});

	for (var i=0; i<blocks.length; i++) {
		blocks[i].id = 'content' + i;
	}

	for (var i=0; i<blocks.length; i++) {
		blocks[i].style.height = 0;
		blocks[i].style.padding = 0;	
	}

	for (var i=0; i<btn.length; i++) {
		btn[i].querySelector('span').onclick = showContent;
	}

	function showContent() {

		var contentElement = this.parentNode.querySelector('ul');
		var currentArrow = this.querySelector('i');


		if (contentElement.style.height !== '0px') {
			contentElement.style.height = 0;
			contentElement.style.padding = 0;
			currentArrow.style.transform = 'none';
		}

		else {

			for (var i=0; i<btn.length; i++) {
				blocks[i].style.height = 0;
				blocks[i].style.padding = 0;
				allArrows[i].style.transform = 'none';
			}

			currentArrow.style.transform = 'rotate(180deg)';

			var currentHeight = contentElement.id.substr(7);
			contentElement.style.height = saveHeights[currentHeight] + 'px';
			contentElement.style.padding = '5px 10px';
		}

	}

});
