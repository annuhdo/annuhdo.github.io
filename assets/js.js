const connectSection = document.querySelector('section.connect');
const urlTip = document.querySelector('section.connect .showURL');

const showTip = (e) => {
	const link = e.target;
	
	if (link.tagName == 'A') {
		// user hovered over a link
		urlTip.innerText = link.href;
		urlTip.style.display = "block";
	}
	
}

const hideTip = (e) => {
		urlTip.style.display = "none";
}

connectSection.onmouseover = showTip;
connectSection.onmouseout = hideTip;