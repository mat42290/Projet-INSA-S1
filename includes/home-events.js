document.addEventListener('DOMContentLoaded', function(event) {

	var homeWrapper = document.querySelector('.home-wrapper');
	var loadedContent = document.querySelector('.loaded-content');
	var homeTitles = document.querySelector('.home-titles');
	var homeContent = document.querySelector('.home-content');
	var homeNav = document.querySelector('.home-nav');
	var menuItems = document.querySelectorAll('.home-nav ul li');
	var menuItemDivs = document.querySelectorAll('.home-nav ul li div');
	var menuItemLabels = document.querySelectorAll('.home-nav ul li p');
	// var menuItemArrows = document.querySelectorAll('.home-nav ul li div span');

	const pages = [
		'offres.html',
		'procedure.html',
		'pourquoi.html',
		'contact.html'
	];

	const state = {
		pageOpen: false,
		openedMenuItem: null
	};

	const actions = {
		highlight: function(e) {
			affectedMenuItem = helpers.getMenuItemIndex(e.target);
			menuItems[affectedMenuItem].classList.add('highlight');
			menuItemLabels[affectedMenuItem].classList.add('italic');
		},
		highlightOff: function(e) {
			affectedMenuItem = helpers.getMenuItemIndex(e.target);

			if (state.pageOpen) {
				if (state.openedMenuItem !== affectedMenuItem) {
					menuItems[affectedMenuItem].classList.remove('highlight');
					menuItemLabels[affectedMenuItem].classList.remove('italic');
				}
			} else {
				menuItems[affectedMenuItem].classList.remove('highlight');
				menuItemLabels[affectedMenuItem].classList.remove('italic');
			}
		},
		menuItemClicked: function(e) {
			e.stopPropagation();
			homeWrapper.classList.add('moved-wrapper');
			loadedContent.classList.add('moved-content');
			affectedMenuItem = helpers.getMenuItemIndex(e.currentTarget); // .currentTarget makes sure it's the element with the listener attached, not child

			// Unhighlight the previously opened menu
			if (state.pageOpen) {
				menuItems[state.openedMenuItem].classList.remove('highlight');
				menuItemLabels[state.openedMenuItem].classList.remove('italic');
			}


			homeTitles.classList.add('fade');
			homeContent.classList.add('moved-over');
			homeNav.classList.add('moved-nav');

			helpers.loadContent(affectedMenuItem);

			state.pageOpen = true;
			state.openedMenuItem = affectedMenuItem;
		},
		documentClicked: function(e) {
			homeWrapper.classList.remove('moved-wrapper');
			loadedContent.classList.remove('moved-content');
			homeTitles.classList.remove('fade');
			homeContent.classList.remove('moved-over');
			homeNav.classList.remove('moved-nav');

			menuItems[state.openedMenuItem].classList.remove('highlight');
			menuItemLabels[state.openedMenuItem].classList.remove('italic');

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
		// Can't use fetch on a local machine
		loadContent: function(affectedMenuItem) {
			var url = 'https://etud.insa-toulouse.fr/~zakharov/' + pages[affectedMenuItem];

			fetch(url)
			.then(function(response) { return response.text(); })
			.then(function(data) {
				loadedContent.innerHTML = data;
			})
			.catch(function(error) { console.log(error) });
		},
	};

});