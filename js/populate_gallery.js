function renderGalleryPicker(galleries, concertId) {
	let options = [];
	for (let id in galleries) {
		let gallery = galleries[id];
		localStorage.setItem('gallery-' + id, JSON.stringify(gallery));
		options.push(Util.tag('option', {'value': id}, gallery.pickerTitle));
	}
	let gallery_picker = Util.tag('select', {
		'id': 'galleryPicker',
		'name': 'gallery',
		'class': 'selectpicker',
		'title': 'Select Gallery'
	}, options);
	document.querySelector('#insertGalleryPickerHere').appendChild(gallery_picker);

	addGalleryPickerListener(concertId);
	let gallery = galleries[concertId];
	console.log(gallery);
	loadGallery(gallery);
}

function addGalleryPickerListener(concertId) {
	// Initial value is the current one being shown
	$('#galleryPicker').val(concertId);
	$('#insertGalleryPickerHere').bind('propertychange change', function() {
		let galleryPicker = document.querySelector('#galleryPicker');
		let selection = galleryPicker.options[galleryPicker.selectedIndex].value;
		let gallery = JSON.parse(localStorage.getItem('gallery-' + selection));
		loadGallery(gallery);
	});
}

function loadGallery(gallery) {
	$('#gallery-title').html(gallery.title);
	$('#gallery-date').html(Util.getLocalTime(new Date(gallery.date)));
	Galleria.loadTheme('../galleria/themes/classic/galleria.classic.min.js');
	Galleria.configure({
		dataSource: gallery.data,
		transition: 'fade',
		lightbox: true
	});
	Galleria.run('.galleria');
}

$(document).ready(function() {
	$.getJSON('../res/galleries.json', function(galleries) {
		console.log(galleries);
		let concertId = localStorage.getItem('concert');
		renderGalleryPicker(galleries, concertId);
	});
});