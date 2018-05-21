/**
 * Provides super useful general-purpose Utility functions
 */

(function () {

	const Util = {};

	Util.renderConcertCard = (concert) => {
		let past = new Date() > new Date(concert.date);

		let concert_front = renderConcertFront(concert, past);
		let concert_back = renderConcertBack(concert, past);

		return Util.tag('div', {
			'class': 'concert-flipContainer',
			'ontouchstart': 'this.classList.toggle("hover");',
			'id': concert.id
		}, Util.tag('div', {'class': 'flipper'}, [concert_front, concert_back]));
	};

	function renderConcertFront(concert, past) {
		let date = Util.getLocalTime(concert.date);
		let contents = [];
		contents.push(Util.tag('img', {
			'src': !imageExists(concert.image) ? placeholder_image_url : concert.image,
			'class': 'concert-card-image'
		}));
		let concert_info = [];
		concert_info.push(Util.tag('div', {'class': 'concert-info concert-title'}, concert.title));
		// Commented-out stuff in the next few lines make it clear which dates are past
		concert_info.push(Util.tag('div', {
			'class': 'concert-info concert-date',
			// 'style': past ? 'color: red;' : ''
		}, date/* + (past ? ' (past)' : '')*/));
		concert_info.push(Util.tag('div', {'class': 'concert-location'}, [
			Util.tag('span', {}, 'Location: '),
			Util.tag('a', {'class': 'concert-link', 'href': concert.map, 'target': '_blank'}, concert.location)
		]));
		// concert_info.push(Util.tag('div', {'style': 'font-style: italic;'}, '(click for more details)'));
		concert_info.push(Util.tag('div', {'class': 'concert-event'},
			Util.tag('a', {'class': 'concert-link', 'href': concert.event, 'target': '_blank'}, 'Facebook Event')
		));
		// Render the gallery link if the object says that one exists
		if (concert.gallery) {
			concert_info.push(Util.tag('div', {},
				Util.tag('a', {
					'class': 'concert-link concert-gallery',
					'href': 'html/gallery.html',
				}, 'Gallery')
			));
		}
		contents.push(Util.tag('div', {'class': 'concert-card-contents'}, concert_info));
		// if (past) contents.push(getFadeLayer());
		let flex_container = Util.tag('div', {'class': 'flexContainer'}, contents);
		return Util.tag('div', {
			'class': 'concert-card concert-front'
		}, flex_container);
	}

	function renderConcertBack(concert, past) {
		let program = concert.program;
		let contents = [];
		contents.push(Util.tag('div', {'class': 'concert-programHeader'}, 'Program'));
		let rows = [];
		for (let i in program) {
			let piece = program[i];
			let composer = Util.tag('td', {'class': 'concert-programCol concert-composerCol'}, piece.composer);
			let title = Util.tag('td', {'class': 'concert-programCol concert-pieceCol'}, getPieceTitle(piece));
			rows.push(Util.tag('tr', {}, [composer, title]));
		}
		let table = Util.tag('table', {'class': 'concert-programTable'}, rows);
		contents.push(table);
		// if (past) contents.push(getFadeLayer());
		let programInfo = Util.tag('div', {'class': 'concert-programInfo'}, contents);
		let flex_container = Util.tag('div', {'class': 'flexContainer'}, programInfo);
		return Util.tag('div', {
			'class': 'concert-card concert-back'
		}, flex_container);
	}

	function getPieceTitle(piece) {
		let parts = [];
		if (piece.title !== '') {
			parts.push(Util.tag('span', {}, piece.title));
			if (piece.subtitle !== '') {
				parts.push(Util.tag('span', {}, ' "' + piece.subtitle + '"'));
			}
		} else if (piece.subtitle !== '') {
			parts.push(Util.tag('span', {'style': 'font-style: italic;'}, piece.subtitle));
		} else {
			parts.push(Util.tag('div', {}, piece.othertitle, false));
		}
		if (piece.featuring !== '') {
			parts.push(Util.tag('span', {}, ' (' + piece.featuring + ')'));
		}
		return Util.tag('div', {}, parts);
	}

	function getFadeLayer() {
		return Util.tag('div', {'class': 'fadeLayer'}, '');
	}

	/*
	 * Takes in a musician and returns a
	 * Util.tag-formatted musician display card.
	 */
	Util.renderMusician = (musician) => {
		let musician_front = renderMusicianFront(musician);
		let musician_back = renderMusicianBack(musician);

		return Util.tag('div', {
			'class': 'flipContainer',
			'ontouchstart': 'this.classList.toggle("hover");'
		}, Util.tag('div', {'class': 'flipper'}, [musician_front, musician_back]));
	};

	function renderMusicianFront(musician) {
		let contents = [];
		contents.push(Util.tag('div', {'class': 'musician-photoContainer'},
			Util.tag('img', {
				'src': getMusicianPhoto(musician),
				'class': 'musician-photo'
			}, '')
		));
		contents.push(Util.tag('div', {'class': 'musician-infoContainer'},
			Util.tag('div', {'class': 'musician-infoSubcontainer'}, [
				Util.tag('div', {}, [
					Util.tag('strong', {}, getMusicianName(musician) + ', '),
					Util.tag('span', {'class': 'instrument'}, musician.instrument)
				]),
				Util.tag('div', {}, 'Class of ' + musician.class),
				Util.tag('div', {}, getMusicianMajor(musician))
			]
		)));
		let person = Util.tag('div', {'class': 'musician'}, contents);
		return Util.tag('div', {'class': 'musician-card front'}, person);
	}

	/*
	 * Returns the musician's photo url if it exists, otherwise returns a parrot.
	 */
	function getMusicianPhoto(musician) {
		if (imageExists(musician.photo)) return musician.photo;
		else return 'http://cultofthepartyparrot.com/parrots/hd/donutparrot.gif';
	}
	
	/*
	 * Check if an image exists
	 */
	function imageExists(image_url){
		var http = new XMLHttpRequest();
		http.open('HEAD', image_url, false);
		http.send();
		return http.status != 404;
	}

	function renderMusicianBack(musician) {
		let musician_name = Util.tag(
			'div',
			{'class': 'musician_back-item musician-name', 'style': 'width: 100%;'},
			getMusicianName(musician)
		);
		let musician_bio = Util.tag('div', {'class': 'musician_back-item musician-bio'}, getMusicianBio(musician));
		let musician_back_container = Util.tag('div', {'class': 'musician-card back'}, [musician_name, musician_bio]);
		return musician_back_container;
	}

	/*
	 * Returns the musician's full name, including middle (if it exists).
	 */
	function getMusicianName(musician, middle = false) {
		return musician.firstname + (middle ? ' ' + musician.middlename : '') + (' ' + musician.lastname);
	}

	/*
	 * Returns the musician's major, or a random major if they don't have one.
	 */
	function getMusicianMajor(musician) {
		if (musician.major !== '') return musician.major;
		return random_majors[Math.floor(Math.random() * random_majors.length)];
	}

	function getMusicianBio(musician) {
		if (musician.bio !== '') return musician.bio;
		return random_bios[Math.floor(Math.random() * random_bios.length)];
	}

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}

	/*
	 * Comparison function for determining alphabetical order of musicians' names.
	 * Used in populate_musicians.js.
	 */
	Util.compareMusicians = (a, b) => {
		if (a.lastname < b.lastname) return -1;
		else if (b.lastname < a.lastname) return 1;
		else return a.firstname < b.firstname ? -1 : 1;
	};

	/* Creates and returns an HTMLElement representing a tag of the given name.
	 * attrs is an object, where the key-value pairs represent HTML attributes to
	 * set on the tag. contents is an array of strings/HTMLElements (or just
	 * a single string/HTMLElement) that will be contained within the tag.
	 *
	 * Examples:
	 * tag('p', {}, 'this is a paragraph') => <p>this is a paragraph</p>
	 * tag('a', {href: '/blah'}, 'Blah') => <a href="/blah">Blah</a>
	 * tag('ul', {}, tag('li', {}, 'item')) => <ul><li>item</li></ul>
	 * tag('div', {}, [
	 *   tag('h1', {class: 'headline'}, 'SCOr'),
	 *   ' is the best, ',
	 *   tag('span', {}, 'we like waffles.')
	 * ])
	 *    <div>
	 *      <h1 class="headline">SCOr</h1>
	 *      is the best,
	 *      <span>we like waffles</span>
	 *    </div>
	 */
	Util.tag = (name, attrs, contents, quote = true) => {
		const element = document.createElement(name);
		for (const attr in attrs) {
			if (attrs.hasOwnProperty(attr)) element.setAttribute(attr, attrs[attr]);
		}
		// If contents is a single string or HTMLElement, make it an array of one
		// element; this guarantees that contents is an array below.
		if (!(contents instanceof Array)) {
			contents = [contents];
		}

		contents.forEach(piece => {
			if (piece instanceof HTMLElement) {
				element.appendChild(piece);
			} else {
				// must create a text node for a raw string
				if (quote) element.appendChild(document.createTextNode(piece));
				else element.innerHTML += piece;
			}
		});
		return element;
	};

	/*
	 * Returns A string of local time in the form YYYY-MM-DD
	 * @input timestamp in UTC
	 */
	Util.getDateString = timestamp => {
		let date = new Date(timestamp);
		let month = date.getMonth() + 1;
		return date.getFullYear() + '-' + month + '-' + date.getDate();
	};

	/*
	 * Returns a local date string
	 * @input UTC date in the form of milliseconds
	 */
	Util.getLocalTime = UTCTime => {
		const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
			'September', 'October', 'November', 'December'];
		let date = new Date(UTCTime);
		if (isNaN(date.getTime())) return 'Invalid Date';
		let dateString = daysOfWeek[date.getDay()] + ', ';
		dateString += monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ', ';
		dateString += (date.getHours() < 10) ? '0' + date.getHours() : date.getHours() % 12 + ':';
		dateString += (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
		dateString += (date.getHours() < 12) ? 'am' : 'pm';
		return dateString;
	};

	// Used as the compare function with the JS sort function to sort by string
	Util.stringSort = (a, b) => {
		return a.localeCompare(b);
	};

	/*
	 * Returns a string with no space character
	 * @input str with words containing space
	 */
	Util.removeSpace = str => {
		let i = str.indexOf(' ');
		while (i > 0) {
			str = str.substr(0, i) + str.substr(i + 1);
			i = str.indexOf(' ');
		}
		return str;
	};

	const logicSymbols = {
		'&': '&and;',
		'~': '&not;',
		'$': '&rightarrow;',
		'@': '&ForAll;',
		'_': '&sube;',
		'#': '&ne;',
		'|': '&or;',
		'%': '&leftrightarrow;',
		'/': '&exist;',
		'\\': '&isin;'
		/**&perp; Inverted T*/
	};

	String.prototype.replaceAll = function (search, replacement) {
		let target = this;
		return target.split(search).join(replacement);
	};

	/*
	 * Returns the OS type.
	 * Referenced this link to write the code:
	 * https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
	 */
	Util.platformInfo = () => {
		// let os = userInfo.match(/\(((?:macintosh|windows|linux)[^\)]+)\)/i) || null;
		let platform = navigator.platform;
		// If Linux, test for sub platforms (android, etc.)
		if (/linux/i.test(platform)) {
			if (/android/i.test(navigator.userAgent)) {
				return 'Android';
			}
			return 'Linux';
		} else if (/macintosh|macintel|macppc|mac68k/i.test(platform)) {
			return 'Macintosh';
		} else if (/os\/2|pocket pc|windows|win16|win32|wince/i.test(platform)) {
			return 'Windows';
		} else if (/pike/i.test(platform)) {
			return 'iPhone';
		}
		return platform;
	};

	/*
	 * Returns an object containing the browser type and version number of the user.
	 * For example, for a Chrome/59 user, this method returns {browser: "Chrome", version: 59}.
	 */
	Util.browserInfo = () => {
		let userInfo = navigator.userAgent,
			tem,
			browser = userInfo.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if (/trident/i.test(browser[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(userInfo) || [];
			return {'browser': 'IE', 'version': (parseFloat(tem[1]) || -1)};
		}
		if (browser[1] === 'Chrome') {
			tem = userInfo.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem !== null) {
				let slice = tem.slice(1);
				if (slice[0] === 'OPR') slice[0] = 'Opera';
				// for (let i = 0; i < slice.length; i++) {
				//     if (slice[i] === 'OPR') slice[i] = 'Opera';
				// }
				return {'browser': slice[0], 'version': parseFloat(slice[1])};
			}
		}
		browser = browser[2] ? [browser[1], browser[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = userInfo.match(/version\/(\d+)/i)) !== null) browser.splice(1, 1, tem[1]);
		return {'browser': browser[0], 'version': parseFloat(browser[1])};
	};

	/*
	 * Formats the date (in milliseconds) into standard date format (YYYY-MM-DDTHH:MM)
	 */
	function getDateAsString(timestamp) {
		let date = new Date(timestamp);
		date = new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000));
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
		let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
		let monthFormat = (month < 10) ? '-0' : '-';
		let dayFormat = (day < 10) ? '-0' : '-';
		return date.getFullYear() + monthFormat + month + dayFormat + day + 'T' + hours + ':' + minutes;
	}

	window.Util = Util;
})();