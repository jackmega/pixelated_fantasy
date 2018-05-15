function navOpen() {
	document.getElementById('dropdown').style.display = "block";
	document.getElementById('mobile-btn').style.display = 'none';
	document.getElementById('mobile-close').style.display = 'block';
}
function navClose() {
	document.getElementById('dropdown').style.display = "none";
	document.getElementById('mobile-btn').style.display = 'block';
	document.getElementById('mobile-close').style.display = 'none';
}

// Voice Page
function showLinks() {
	document.getElementById('jump-links').style.display = 'block';
	document.getElementById('show-btn').style.display = 'none';
	document.getElementById('hide-btn').style.display = 'block';
}
function hideLinks() {
	document.getElementById('jump-links').style.display = 'none';
	document.getElementById('show-btn').style.display = 'block';
	document.getElementById('hide-btn').style.display = 'none';
}

// Portfolio Page
function showProjects() {
	document.getElementById('projects').style.display = 'block';
	document.getElementById('show-btn').style.display = 'none';
	document.getElementById('hide-btn').style.display = 'block';
}
function hideProjects() {
	document.getElementById('projects').style.display = 'none';
	document.getElementById('show-btn').style.display = 'block';
	document.getElementById('hide-btn').style.display = 'none';
}