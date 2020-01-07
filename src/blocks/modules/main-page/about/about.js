import $ from "jquery";

$(document).ready(function () {

	console.log('about init');
	// Intial Border Position
	var activePos = $('.about__tabs--header .active').position();

	// Change Position
	function changePos() {

		// Update Position
		activePos = $('.about__tabs--header .active').position();

		// Change Position & Width
		$('.border').stop().css({
			left: activePos.left,
			width: $('.about__tabs--header .active').width()
		});
	}

	changePos();

	// Intial Tab Height
	var tabHeight = $('.about__tab.active').height();

	// Animate Tab Height
	function animateTabHeight() {

		// Update Tab Height
		tabHeight = $('.about__tab.active').height();

		// Animate Height
		$('.about__tabs--content').stop().css({
			height: tabHeight + 'px'
		});
	}

	animateTabHeight();

	// Change Tab
	function changeTab() {
		var getTabId = $('.about__tabs--header .active a').attr('tab-id');

		// Remove Active State
		$('.tab').stop().fadeOut(300, function () {
			// Remove Class
			$(this).removeClass('active');
		}).hide();

		$('.tab[tab-id=' + getTabId + ']').stop().fadeIn(300, function () {
			// Add Class
			$(this).addClass('active');

			// Animate Height
			animateTabHeight();
		});
	}

	// Tabs
	$('.about__tabs--header a').on('click', function (e) {
		e.preventDefault();

		// Tab Id
		var tabId = $(this).attr('tab-id');

		// Remove Active State
		$('.about__tabs--header a').stop().parent().removeClass('active');

		// Add Active State
		$(this).stop().parent().addClass('active');

		changePos();

		// Update Current Itm
		tabCurrentItem = tabItems.filter('.active');

		// Remove Active State
		$('.about__tab').stop().fadeOut(300, function () {
			// Remove Class
			$(this).removeClass('active');
		}).hide();

		// Add Active State
		$('.about__tab[tab-id="' + tabId + '"]').stop().fadeIn(300, function () {
			// Add Class
			$(this).addClass('active');

			// Animate Height
			animateTabHeight();
		});
	});

	// Tab Items
	var tabItems = $('.about__tabs--header ul li');

	// Tab Current Item
	var tabCurrentItem = tabItems.filter('.active');


});