document.addEventListener('DOMContentLoaded', function(event) {

	var homeWrapper = document.querySelector('.home-wrapper');
	var nastyBugger = document.querySelector('.loaded-content');
	var homeTitles = document.querySelector('.home-titles');
	var homeContent = document.querySelector('.home-content');
	var menuItems = document.querySelectorAll('.home-nav ul li');
	var menuItemLabels = document.querySelectorAll('.home-nav ul li div p');
	var menuItemArrows = document.querySelectorAll('.home-nav ul li div span');

	const state = {
		pageOpen: false,
		openedMenuItem: null
	};

	const actions = {
		highlight: function(e) {
			affectedMenuItem = helpers.getMenuItemIndex(e.target);
			menuItems[affectedMenuItem].classList.add('highlight');
			menuItemLabels[affectedMenuItem].classList.add('italic');
			menuItemArrows[affectedMenuItem].classList.remove('hidden');
		},
		highlightOff: function(e) {
			affectedMenuItem = helpers.getMenuItemIndex(e.target);

			if (state.pageOpen) {
				if (state.openedMenuItem !== affectedMenuItem) {
					menuItems[affectedMenuItem].classList.remove('highlight');
					menuItemLabels[affectedMenuItem].classList.remove('italic');
					menuItemArrows[affectedMenuItem].classList.add('hidden');
				}
			} else {
				menuItems[affectedMenuItem].classList.remove('highlight');
				menuItemLabels[affectedMenuItem].classList.remove('italic');
				menuItemArrows[affectedMenuItem].classList.add('hidden');
			}
		},
		menuItemClicked: function(e) {
			e.stopPropagation();
			homeWrapper.classList.add('moved-wrapper');
			nastyBugger.classList.add('moved-content');
			affectedMenuItem = helpers.getMenuItemIndex(e.target);

			if (state.pageOpen) {
				menuItems[state.openedMenuItem].classList.remove('highlight');
				menuItemLabels[state.openedMenuItem].classList.remove('italic');
				menuItemArrows[state.openedMenuItem].classList.add('hidden');
			}

			menuItems[affectedMenuItem].classList.add('highlight');
			menuItemLabels[affectedMenuItem].classList.add('italic');
			menuItemArrows[affectedMenuItem].classList.remove('hidden');

			homeTitles.classList.add('fade');
			homeContent.classList.add('moved-over');

			helpers.loadFile('testing.html');
			// helpers.wtf();

			state.pageOpen = true;
			state.openedMenuItem = affectedMenuItem;
		},
		documentClicked: function(e) {
			homeWrapper.classList.remove('moved-wrapper');
			nastyBugger.classList.remove('moved-content');
			homeTitles.classList.remove('fade');
			homeContent.classList.remove('moved-over');

			menuItems[state.openedMenuItem].classList.remove('highlight');
			menuItemLabels[state.openedMenuItem].classList.remove('italic');
			menuItemArrows[state.openedMenuItem].classList.add('hidden');

			state.pageOpen = false;
			state.openedMenuItem = null;
		},
	};

	for (var i = menuItems.length - 1; i >= 0; i--) {
		menuItems[i].addEventListener('mouseenter', actions.highlight);
		menuItems[i].addEventListener('mouseleave', actions.highlightOff);
		menuItems[i].addEventListener('click', actions.menuItemClicked);
	}
	homeWrapper.addEventListener('click', actions.documentClicked);

	const helpers = {
		getMenuItemIndex: function(target) {
			for (var i = target.parentNode.children.length - 1; i >= 0; i--) {
				if (target.parentNode.children[i] == target) {return i};
			}
		},
		wtf: function() {
			console.log('hey')
		},
		// Can't use fetch on a local machine
		loadContent: function() {
			fetch('testing.html')
			.then(function(response) { return response.json(); })
			.then(function(data) {
				console.log('hey');
			})
		},
	};

});