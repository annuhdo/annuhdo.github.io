const connectSection = document.querySelector('section.connect');

const githubTip = document.querySelector('section.connect .showGithub');
const dribbbleTip = document.querySelector('section.connect .showDribbble');
const codepenTip = document.querySelector('section.connect .showCodepen');
const twitterTip = document.querySelector('section.connect .showTwitter');
const emailTip = document.querySelector('section.connect .showEmail');

const showTip = (e) => {
	const link = e.target.classList;
	if (link.contains("github")) {
		githubTip.style.display = "block";
	}
	else if (link.contains("dribbble")) {
		dribbbleTip.style.display = "block";
	}
	else if (link.contains("codepen")) {
		codepenTip.style.display = "block";
	}
	else if (link.contains("twitter")) {
		twitterTip.style.display = "block";
	}
	else if (link.contains("email")) {
		emailTip.style.display = "block";
	}
}

const hideTip = (e) => {
	const link = e.target.classList;
	if (link.contains("github")) {
		githubTip.style.display = "none";
	}
	else if (link.contains("dribbble")) {
		dribbbleTip.style.display = "none";
	}
	else if (link.contains("codepen")) {
		codepenTip.style.display = "none";
	}
	else if (link.contains("twitter")) {
		twitterTip.style.display = "none";
	}
	else if (link.contains("email")) {
		emailTip.style.display = "none";
	}
}

connectSection.onmouseover = showTip;
connectSection.onmouseout = hideTip;