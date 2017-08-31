const connectSection = document.querySelector('section.connect');

const githubTip = document.querySelector('section.connect .showGithub');
const dribbbleTip = document.querySelector('section.connect .showDribbble');
const codepenTip = document.querySelector('section.connect .showCodepen');
const twitterTip = document.querySelector('section.connect .showTwitter');
const emailTip = document.querySelector('section.connect .showEmail');

const convertDate = (date) => {
	const year = date.substring(0, 4);
	let month = date.substring(5,7);
	
	switch(month) {
		case "01":
			month = "Jan";
			break;
		case "02":
			month = "Feb";
			break;
		case "03":
			month = "Mar";
			break;
		case "04":
			month = "Apr";
			break;
		case "05":
			month = "May";
			break;
		case "06":
			month = "Jun";
			break;
		case "07":
			month = "Jul";
			break;
		case "08":
			month = "Aug";
			break;
		case "09":
			month = "Sep";
			break;
		case "10":
			month = "Oct";
			break;
		case "11":
			month = "Nov";
			break;
		case "12":
			month = "Dec";
			break;
		default:
			break;
	}
	
	const day = date.substring(8,10);
	return `${month} ${day}, ${year}`;
}

const dates = document.querySelectorAll('section.posts .date');

Object.keys(dates).map((date) => {
	dates[date].innerText = convertDate(dates[date].innerText);
});

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