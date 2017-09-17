/*
	BLANK CONCERT:
	{
		title: '',
		date: '',
		location: '',
		map: '',
		image: 'img/concertcovers/',
		event: '',
		id: '',
		description: '',
		gallery: false,
		program: [
			{
				title: '',
				subtitle: '',
				othertitle: '',
				featuring: '',
				composer: ''
			}
		],
	},
*/

/*
GUIDE:

	title: 'Full Concert Title',
	date: 'MM/DD/YYYY, HH:MM AM/PM',
	location: 'Somewhere',
	map: 'google-maps-link',
	image: 'img/concertcovers/<ID HERE>.jpg',
	event: 'link-to-fb-event-page',
	id: '<ID HERE>',
	description: '',
	gallery: <true ONLY if we have a gallery for it (see galleries.js), otherwise false>,
	program: [
		<see instructions below>
	]

NOTE: When adding new concerts, make sure of the following:
1. Crop the image so that dimensions are 3:2 (w:h)
2. Date should be in the form 'MM/DD/YYYY, HH:MM AM/PM'
3. Set the id field to the concert theme (e.g., 'scorytime' or 'memes'),
   or to a descriptive title if there was no theme (e.g. 'debut')
4. The program title field is for titles such as 'Symphony No. 1'. The subtitle
   field is for piece names such as 'Appalachian Spring'. Use one or both.
5. If the title is more unique, then use othertitle and write it out in raw HTML
   Examples:
   - For Mozart Symphony No. 41 "Jupiter", we set the title to
     'Symphony No. 41', and the subtitle to 'Jupiter'.
   - For Copland Appalachian Spring, we would set just the subtitle to
     'Appalachian Spring'.
   - For Rossini Overture to La gazza ladra, we set the othertitle to
     '<i>Overture</i> to <i>La gazza ladra</i>'.
6. Put the newest event on top!
*/

var concerts = [
	{
		title: 'FilmSCOr: Miyazaki, Snacks, Beethoven, and More!',
		date: '6/3/2017, 8:45 PM',
		location: 'Toyon Hall',
		map: 'https://www.google.com/maps/place/Toyon+Hall,+455+Arguello+Way,+Stanford,+CA+94305/@37.4260274,-122.1634602,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbad760bbd92b:0xa2216fdefa25e298!8m2!3d37.4260274!4d-122.1634602?hl=en&source=opensearch',
		image: 'img/concertcovers/filmscor.jpg',
		event: 'https://www.facebook.com/events/489463388052574/',
		id: 'filmscor',
		description: '',
		gallery: true,
		program: [
			{
				title: 'Clarinet Quintet',
				subtitle: '',
				othertitle: '',
				featuring: '',
				composer: 'Brahms'
			},
			{
				title: '',
				subtitle: 'Requiem',
				othertitle: '',
				featuring: '',
				composer: 'Popper'
			},
			{
				title: '',
				subtitle: '',
				othertitle: 'Selections from <i>Spirited Away</i> and <i>Howl\'s Moving Castle</i>',
				featuring: '',
				composer: 'Hisaishi'
			},
			{
				title: 'Symphony No. 6',
				subtitle: 'Pastorale',
				othertitle: '',
				featuring: '',
				composer: 'Beethoven'
			}
		]
	},
	{
		title: 'Glassdances: Collaboration Bent Spoon Dance Company',
		date: '3/5/2017, 4:30 PM',
		location: 'Bing Concert Hall Studio',
		map: 'https://www.google.com/maps/place/Bing+Concert+Hall/@37.4320543,-122.1660855,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbb291ded7f7d:0xf5f2c6a783cabf93!8m2!3d37.4320543!4d-122.1660855?hl=en&source=opensearch',
		image: 'img/concertcovers/glassdances.jpg',
		event: 'https://www.facebook.com/events/204536416690504/',
		id: 'glassdances',
		description: '',
		gallery: false,
		program: [
			{
				title: '',
				subtitle: 'Glassworks',
				othertitle: '',
				featuring: '',
				composer: 'Glass'
			}
		]
	},
	{
		title: 'SCOr Memes for Edgy Teens',
		date: '2/04/2017, 8:30 PM',
		location: 'Toyon Hall',
		map: 'https://www.google.com/maps/place/Toyon+Hall,+455+Arguello+Way,+Stanford,+CA+94305/@37.4260274,-122.1634602,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbad760bbd92b:0xa2216fdefa25e298!8m2!3d37.4260274!4d-122.1634602?hl=en&source=opensearch',
		image: 'img/concertcovers/memes.jpg',
		event: 'https://www.facebook.com/events/189056958240169/',
		id: 'memes',
		description: '',
		gallery: false,
		program: [
			{
				title: '',
				subtitle: 'Marche pour la Cérémonie des Turcs',
				othertitle: '',
				featuring: '',
				composer: 'Lully'
			},
			{
				title: 'Trio for Viola, Clarinet, and Piano',
				subtitle: 'Kegelstatt',
				othertitle: '',
				featuring: '',
				composer: 'Mozart'
			},
			{
				title: 'Sextet in E-flat',
				subtitle: '',
				othertitle: '',
				featuring: '',
				composer: 'Beethoven'
			},
			{
				title: '',
				subtitle: 'The Unanswered Question',
				othertitle: '',
				featuring: '',
				composer: 'Ives'
			},
			{
				title: '',
				subtitle: 'Pavane in F-sharp Minor',
				othertitle: '',
				featuring: '',
				composer: 'Fauré'
			},
			{
				title: '',
				subtitle: '',
				othertitle: '<i>Overture</i> to <i>La gazza ladra</i>',
				featuring: '',
				composer: 'Rossini'
			}
		]
	},
	{
		title: 'In C by Terry Riley',
		date: '11/18/2016, 5:00 PM',
		location: 'Meyer Green',
		map: 'https://www.google.com/maps/dir//J.+Henry+Meyer+Memorial+Library,+560+Escondido+Mall,+Stanford,+CA+94305/@37.4258953,-122.16847,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fbad6f4a6db53:0x7c238e9610b01173!2m2!1d-122.1674532!2d37.4257251',
		image: 'img/concertcovers/inc.jpg',
		event: 'https://www.facebook.com/events/1571006816246394/',
		id: 'inc',
		description: '',
		gallery: false,
		program: [
			{
				title: '',
				subtitle: 'In C',
				othertitle: '',
				featuring: '',
				composer: 'Riley'
			}
		]
	},
	{
		title: 'Spring Concert',
		date: '5/25/2016, 5:30 PM',
		location: 'Toyon Hall',
		map: 'https://www.google.com/maps/place/Toyon+Hall,+455+Arguello+Way,+Stanford,+CA+94305/@37.4260274,-122.1634602,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbad760bbd92b:0xa2216fdefa25e298!8m2!3d37.4260274!4d-122.1634602?hl=en&source=opensearch',
		image: 'img/concertcovers/spring2016.png',
		event: 'https://www.facebook.com/events/1027523117321840/',
		id: 'spring2016',
		description: '',
		gallery: true,
		program: [
			{
				title: '',
				subtitle: 'More Old Wine in New Bottles',
				othertitle: '',
				featuring: '',
				composer: 'Jacob'
			},
			{
				title: '',
				subtitle: 'Knoxville: Summer of 1915',
				othertitle: '',
				featuring: 'Mia Farinelli, soprano',
				composer: 'Barber'
			},
			{
				title: '',
				subtitle: '',
				othertitle: '<i>Larghetto</i> from the <i>Serenade for Strings</i>',
				featuring: '',
				composer: 'Dvořák'
			},
			{
				title: '',
				subtitle: '',
				othertitle: '<i>Overture</i> to <i>The Barber of Seville</i>',
				featuring: '',
				composer: 'Rossini'
			}
		]
	},
	{
		title: 'SCOry Time',
		date: '3/6/2016, 2:30 PM',
		location: 'Toyon Hall',
		map: 'https://www.google.com/maps/place/Toyon+Hall,+455+Arguello+Way,+Stanford,+CA+94305/@37.4260274,-122.1634602,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbad760bbd92b:0xa2216fdefa25e298!8m2!3d37.4260274!4d-122.1634602?hl=en&source=opensearch',
		image: 'img/concertcovers/scorytime.jpg',
		event: 'https://www.facebook.com/events/1720530971492613/',
		id: 'scorytime',
		description: '',
		gallery: true,
		program: [
			{
				title: '',
				subtitle: 'Romanian Folk Dances',
				othertitle: '',
				featuring: '',
				composer: 'Bartók'
			},
			{
				title: '',
				subtitle: 'Pavane for a Dead Princess',
				othertitle: '',
				featuring: '',
				composer: 'Ravel'
			},
			{
				title: '',
				subtitle: 'Petite Suite',
				othertitle: '',
				featuring: '',
				composer: 'Debussy'
			}
		]
	},
	{
		title: 'Mozart & Mendelssohn',
		date: '1/13/2016, 7:30 PM',
		location: 'Toyon Hall',
		map: 'https://www.google.com/maps/place/Toyon+Hall,+455+Arguello+Way,+Stanford,+CA+94305/@37.4260274,-122.1634602,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbad760bbd92b:0xa2216fdefa25e298!8m2!3d37.4260274!4d-122.1634602?hl=en&source=opensearch',
		image: 'img/concertcovers/mandm.png',
		event: 'https://www.facebook.com/events/1686547071614550/',
		id: 'mandm',
		description: '',
		gallery: false,
		program: [
			{
				title: '',
				subtitle: 'Hebrides Overture (Fingal\'s Cave)',
				othertitle: '',
				featuring: '',
				composer: 'Mendelssohn'
			},
			{
				title: 'Symphony No. 39',
				subtitle: '',
				othertitle: '',
				featuring: '',
				composer: 'Mozart'
			}
		]
	},
	{
		title: 'El Niño',
		date: '11/18/2015, 4:00 PM',
		location: 'Main Quad',
		map: 'https://www.google.com/maps/place/Main+Quad/@37.4274821,-122.1702636,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbb2a75232257:0x43f0ff0d7a1cde66!8m2!3d37.4274821!4d-122.1702636?hl=en',
		image: 'img/concertcovers/elnino.jpg',
		event: 'https://www.facebook.com/events/1650432188565493/',
		id: 'elnino',
		description: '',
		gallery: false,
		program: [
			{
				title: '',
				subtitle: 'Water Music',
				othertitle: '',
				featuring: '',
				composer: 'Handel'
			}
		]
	},
	{
		title: 'Stanford Collaborative Orchestra Debut Concert',
		date: '5/31/2015, 5:00 PM',
		location: 'Toyon Hall',
		map: 'https://www.google.com/maps/place/Toyon+Hall,+455+Arguello+Way,+Stanford,+CA+94305/@37.4260274,-122.1634602,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbad760bbd92b:0xa2216fdefa25e298!8m2!3d37.4260274!4d-122.1634602?hl=en&source=opensearch',
		image: 'img/concertcovers/debut.jpg',
		event: 'https://www.facebook.com/events/626483244153175/',
		id: 'debut',
		description: '',
		gallery: true,
		program: [
			{
				title: '',
				subtitle: 'Appalachian Spring',
				othertitle: '',
				featuring: '',
				composer: 'Copland'
			},
			{
				title: 'Symphony No. 1',
				subtitle: 'Classical',
				othertitle: '',
				featuring: '',
				composer: 'Prokofiev'
			}
		]
	}
];