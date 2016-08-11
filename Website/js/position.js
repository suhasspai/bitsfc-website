function stickyScroll(e) {
	if(window.pageYOffset > 400) {
		document.getElementById('navig').className += 'navbar-fixed-top';
	}
	if(window.pageYOffset < 400) {
		document.getElementById('navig').className.replace(/(?:^|\s)navbar-fixed-top(?!\S)/g, '');
	}
}
window.addEventListener('scroll', stickyScroll, false);