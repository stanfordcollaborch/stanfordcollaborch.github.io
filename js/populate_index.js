/*
 * After loading the initial static stuff, this code is run to fill in the parts
 * that must be loaded in dynamically.
 */

// Determines how many concert cards to load
const NUM_CONCERTS = 10;

function addConcerts() {
	$.getJSON('res/concerts.json', function(data) {
		let concerts = data.concerts;
		const concertSlider = document.querySelector('#concert-slider');
		for (let i = 0; i < NUM_CONCERTS; i++) {
			if (i < concerts.length) {
				concertSlider.appendChild(Util.renderConcertCard(concerts[i]));
			}
		}
		// if (concerts.length > NUM_CONCERTS) {
		// 	concertSlider.appendChild(Util.tag('div', {'style': 'height: 350px; display: inline-block; top: 0;'},
		// 		Util.tag('button', {
		// 			'type': 'button',
		// 			'class': 'btn btn-secondary',
		// 			'style': 'margin: auto;'
		// 		}, 'Older')
		// 	));
		// }
		addConcertListeners();
	});
}

function addConcertListeners() {
	$('.concert-flipContainer').on('click', function(e) {
		// e.preventDefault();
		$(this).toggleClass('hover');
	});
	// $('.flexContainer').on('click', function(e) {
	// 	// e.preventDefault();
	// 	$(this).closest('.concert-flipContainer').toggleClass('hover');
	// });
	// Reverse the flip if they just clicked on one of the concert card links
	$('.concert-link').on('click', function() {
		const flipContainer = $(this).closest('.concert-flipContainer');
		if ($(this).html() === 'Gallery') {
			// console.log('setting localStorage[\'concert\'] to ' + flipContainer.attr('id'));
			localStorage.setItem('concert', flipContainer.attr('id'));
		}
		flipContainer.toggleClass('hover');
	});
}

function addExcerptPicker() {
	let options = [];
	options.push(Util.tag('option', {'value': 'na', 'selected': ''}, '(Choose One)'));
	for (let i in instruments) {
		let instrument = instruments[i];
		options.push(Util.tag('option', {'value': instrument}, instrument));
	}
	let excerptPicker = Util.tag('select', {'id': 'instrument', 'name': 'instrument'}, options);
	document.querySelector('#excerptPicker').appendChild(excerptPicker);
}

function addBootstrapExcerptPicker() {
	let options = [];
	for (let i in instruments) {
		let instrument = instruments[i];
		// let instrumentName = instrument.replace(/ /g, '_');
		options.push(Util.tag('option', {'value': instrument}, instrument));
	}
	let excerptPicker = Util.tag('select', {
		'id': 'instrument',
		'name': 'instrument',
		'class': 'selectpicker',
		'data-live-search': 'true',
		'title': 'Select Instrument'
	}, options);
	document.querySelector('#excerptPicker').appendChild(excerptPicker);
}

function addExcerptPickerListener() {
	$('#excerptPicker').bind('propertychange change', function() {
		$('#downloadLink').html('');
		let downloadLink = document.querySelector('#downloadLink');
		let instrument = document.querySelector('#instrument');
		let selection = instrument.options[instrument.selectedIndex].value;
		if (selection === 'na') {
			downloadLink.innerHTML = '(Download link will appear here)';
		} else {
			let instrumentFilename = selection.replace(/ /g, '_');
			downloadLink.appendChild(Util.tag(
				'a',
				{'href': 'files/audition_excerpts/' + instrumentFilename + '.pdf', 'target': '_blank'},
				'Download ' + instrumentFilename + '.pdf'
			));
		}
	});
}

function addContactFormButtonListener() {
	document.querySelector('#btnContactUs').addEventListener('click', (event) => {
		event.preventDefault();
		let name = document.querySelector('#name').value;
		let email = document.querySelector('#email').value;
		let subjectPicker = document.querySelector('#subject');
		let subject = subjectPicker.options[subjectPicker.selectedIndex].value;
		let message = document.querySelector('#message').value;
		emailjs.send('stanfordcollaborch', 'scor_email_template', {
			'name': name,
			'email': email,
			'subject': subject,
			'message': message
		}).then(function(response) {
			alert('Thank you for contacting us; we will get back to you soon!');
			window.location.href = 'index.html';
		}, function(err) {
			alert('Something went wrong. Please try again.');
		});
	});
}

function getLatestGalleryId() {
	$.getJSON('res/concerts.json', function(data) {
		let concerts = data.concerts;
		for (let i in concerts) {
			if (concerts[i].gallery) return concerts[i].id;
		}
	});
	return 'debut';
}

function notifBar() {
	$('#notifBar-dismiss, #notifBar-auditionsLink').on('click', (event) => {
		$('#notifBar').fadeOut();
	});
}

$(document).ready(function() {
	localStorage.clear();
	addConcerts();
	addBootstrapExcerptPicker();
	addExcerptPickerListener();
	addContactFormButtonListener();
	localStorage.setItem('concert', getLatestGalleryId());
	console.log(localStorage.setItem('concert'));
	notifBar();
});









