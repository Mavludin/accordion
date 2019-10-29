var btn = document.querySelectorAll('div');
var blocks = document.querySelectorAll('ul');

var saveHeights = [];

for (var i=0; i<blocks.length; i++) {
	blocks[i].id = 'content' + i;
	saveHeights.push(blocks[i].clientHeight);
}

for (var i=0; i<blocks.length; i++) {
	blocks[i].style.height = 0;
	blocks[i].style.padding = 0;
}

for (var i=0; i<btn.length; i++) {
	btn[i].onclick = showContent;
}

function showContent() {

	var contentElement = this.querySelector('ul');

	if (contentElement.style.padding !== '0px' && contentElement.style.height !== '0px') {
		contentElement.style.padding = 0;
		contentElement.style.height = 0;
	}

	else {

		for (var i=0; i<btn.length; i++) {
			blocks[i].style.height = 0;
			blocks[i].style.padding = 0;
		}

		var currentHeight = contentElement.id.substr(7);
		contentElement.style.padding = '5px';
		contentElement.style.height = saveHeights[currentHeight] + saveHeights[currentHeight] * 0.05  + 'px';
	}

}
