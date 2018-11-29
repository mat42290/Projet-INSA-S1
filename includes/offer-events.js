document.addEventListener('DOMContentLoaded', function(event) {

	var yearSelect = document.querySelector('#year-select');
	var specSelect = document.querySelector('#spec-select');
	var	countryList = document.querySelector('.countries > ul');
	var	universitiesList = document.querySelector('.universities > ul');
	var	coursesList = document.querySelector('.courses > ul');

	var uniData = null;
	var uniCoursesData = null;

	const state = {
		selectedYear: null,
		selectedSpec: null
	};

	const actions = {
		offersOpened: function() {
			helpers.retrieveYearSpecUniData();
		},
		yearSelected: function(e) {
			state.selectedYear = e.target.value;
			countryList.innerHTML = "";
			universitiesList.innerHTML = "";
			coursesList.innerHTML = "";
			helpers.fillSpecSelect(state.selectedYear);
		},
		specSelected: function(e) {
			state.selectedSpec = e.target.value;
			countryList.innerHTML = "";
			universitiesList.innerHTML = "";
			coursesList.innerHTML = "";
			helpers.fillCountryDiv();
		},
		countrySelected: function(e) {
			state.selectedCountry = e.target.innerHTML;
			helpers.fillUniversitiesDiv();
			helpers.retrieveUniCourseData();
		},
		uniSelected: function(e) {
			state.selectedUni = e.target.innerHTML;
			helpers.fillCoursesDiv();
		},
	}

	// window.addEventListener('offersOpened', actions.offersOpened);
	window.addEventListener('load', actions.offersOpened);
	yearSelect.addEventListener('change', actions.yearSelected);
	specSelect.addEventListener('change', actions.specSelected);

	const helpers = {
		fillSpecSelect: function(selectedYear) {
			var keys = Object.keys(uniData[selectedYear]);
			var filler = "<option value=\"\">--select spec--</option>";
			for (var i = 0; i < keys.length; i++) {
				filler += "<option value=\"" + keys[i] + "\">" + keys[i] + "</option>"
			}
			specSelect.innerHTML = filler;
		},
		fillCountryDiv: function() {
			var countries = Object.keys(uniData[state.selectedYear][state.selectedSpec]);
			var filler = "";
			for (var i = 0; i < countries.length; i++) {
				filler += "<li style=\"color: black;\">" + countries[i] + "</li>"
			}
			countryList.innerHTML = filler;

			var availableCountries = document.querySelectorAll('.countries > ul > li');
			for (var i = availableCountries.length - 1; i >= 0; i--) {
				availableCountries[i].addEventListener('click', actions.countrySelected);
			}
		},
		fillUniversitiesDiv: function() {
			var universities = uniData[state.selectedYear][state.selectedSpec][state.selectedCountry];
			var filler = "";
			for (var i = 0; i < universities.length; i++) {
				filler += "<li style=\"color: black;\">" + universities[i] + "</li>"
			}
			universitiesList.innerHTML = filler;

			var availableUniversities = document.querySelectorAll('.universities > ul > li');
			for (var i = availableUniversities.length - 1; i >= 0; i--) {
				availableUniversities[i].addEventListener('click', actions.uniSelected);
			}
		},
		fillCoursesDiv: function() {
			var courses = helpers.filterCourses(state);
			// console.log(uniCoursesData);
			var filler = "";
			for (var i = 0; i < courses.length; i++) {
				filler += "<li style=\"color: black;\">" + courses[i][1] + "</li>"
			}
			coursesList.innerHTML = filler;

			// var availableUniversities = document.querySelectorAll('.universities > ul > li');
			// for (var i = availableUniversities.length - 1; i >= 0; i--) {
			// 	availableUniversities[i].addEventListener('click', actions.uniSelected);
			// }
		},
		filterCourses: function(state) {
			return uniCoursesData[state.selectedUni].filter(attribute => attribute[2].includes(state.selectedSpec))
		},
		retrieveYearSpecUniData: function() {
			var url = 'https://etud.insa-toulouse.fr/~zakharov/' + 'yearSpecUni.json';

			fetch(url)
			.then(function(response) { return response.json(); })
			.then(function(data) {
				// console.log(data[3].MIC.Canada);
				uniData = data;
				// localStorage.setItem('uniData', JSON.stringify(data));
			})
			.catch(function(error) { console.log(error) });
		},
		retrieveUniCourseData: function() {
			var url = 'https://etud.insa-toulouse.fr/~zakharov/' + 'uniCourses.json';

			fetch(url)
			.then(function(response) { return response.json(); })
			.then(function(data) {
				// console.log(data[3].MIC.Canada);
				uniCoursesData = data;
				// localStorage.setItem('uniData', JSON.stringify(data));
			})
			.catch(function(error) { console.log(error) });
		},
	};

});