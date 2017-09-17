/*
 * After loading the initial static stuff, this code is run to fill in the parts
 * that must be loaded in dynamically.
 */

// Determines how many concert cards to load
const NUM_CONCERTS = 10;

function addConcerts() {
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
	let excerpt_picker = Util.tag('select', {'id': 'instrument', 'name': 'instrument'}, options);
	document.querySelector('#excerpt_picker').appendChild(excerpt_picker);
}

function addBootstrapExcerptPicker() {
	let options = [];
	for (let i in instruments) {
		let instrument = instruments[i];
		options.push(Util.tag('option', {'value': instrument}, instrument));
	}
	let excerpt_picker = Util.tag('select', {
		'id': 'instrument',
		'name': 'instrument',
		'class': 'selectpicker',
		'data-live-search': 'true',
		'title': 'Select Instrument'
	}, options);
	document.querySelector('#excerpt_picker').appendChild(excerpt_picker);
}

function addExcerptPickerListener() {
	$('#excerpt_picker').bind('propertychange change', function() {
		$('#download_link').html('');
		let download_link = document.querySelector('#download_link');
		let instrument = document.querySelector('#instrument');
		let selection = instrument.options[instrument.selectedIndex].value;
		if (selection === 'na') {
			download_link.innerHTML = '(Download link will appear here)';
		} else {
			download_link.appendChild(Util.tag(
				'a',
				{'href': 'files/audition_excerpts/' + selection + '.pdf', 'target': '_blank'},
				'Download ' + selection + '.pdf'
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
	for (let i in concerts) {
		if (concerts[i].gallery) return concerts[i].id;
	}
	return 'debut';
}

$(document).ready(function() {
	localStorage.clear();
	addConcerts();
	addConcertListeners();
	addBootstrapExcerptPicker();
	addExcerptPickerListener();
	addContactFormButtonListener();
	localStorage.setItem('concert', getLatestGalleryId());
});









