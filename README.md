# SCOr website

This repository is the source code for the [Stanford Collaborative Orchestra's website](scor.stanford.edu), in a truly democratic fashion! Feel free to submit pull requests if you'd like to change anything about the website, but make sure to follow the guidelines outlined below.

## Contents

1. [Add a new musician](#add-a-new-musician)
2. [Add a new concert](#add-a-new-concert)

## Add a new musician

To add a new musician, please complete all of these steps:
### 1. Add musician photo
* Find a photo and crop it into a square. Save as `FirstnameLastname.jpg` (or `.png` or whatever other filetype)
* Add photo to the `img/musicians` directory

### 2. Edit `res/musicians.json`
* Open `res/musicians.json`
* Copy the following musician template, paste it into the file, and fill in as many fields as possible. See existing musicians for examples.
```json
{
	"firstname": "",
	"lastname": "",
	"middlename": "",
	"instrument": "",
	"class": "",
	"major": "",
	"bio": "",
	"photo": "../img/musicians/""
},
```
_NOTE: If a musician has a name with non-standard characters (í, ñ, etc.), use the correct character for their name, but use a standard version (i, n, etc.) for the photo filename._

## Add a new concert

### 1. Add concert photo
* Find a photo respresentative of the concert, crop it to a 3:2 width-to-height ratio, and resize it to 300x200px. Name the file using the theme of the concert if there is one. Otherwise, use a short, descriptive, and unique title (e.g. debut, spring2016) -- this will be the concert ID.
* Add photo to the `img/concertcovers` directory

### 2. Edit `res/concerts.json`
* Open `res/concerts.json`
* Copy the following concert template, paste it into the file (newest event on top!), and replace as many fields as possible. See existing concerts for examples.
```json
{
	"title": "",
	"date": "",
	"location": "",
	"map": "",
	"image": "img/concertcovers/",
	"event": "",
	"id": "",
	"description": "",
	"gallery": false,
	"program": [
		{
			"title": "",
			"subtitle": "",
			"othertitle": "",
			"featuring": "",
			"composer": ""
		}
	]
},
```
* `title` is the full concert title **(required)**
* `date` is the date and time of the concert, formatted as `MM/DD/YYYY, HH:MM AM/PM` **(required)**
* `location` is the concert venue **(required)**
* `map` is a link to the location in Google Maps **(required)**
* `image` is the path to the image file
* `event` is a link to the Facebook event page **(required)**
* `id` is the concert ID that you chose in Step 1 **(required)**
* `description` is currently not being used
* `gallery` indicates whether or not a gallery exists for the concert. Leave as false until the gallery actually exists (see `res/galleries.json`).
* `program` is an array of sub-objects representing each piece in the program. Fill in those fields according to the following rules:
	* `title`, `subtitle`, and `othertitle` **(at least one required)** are slightly complicated
		* The `title` field is for titles such as 'Symphony No. 1'. The `subtitle` field is for piece names such as 'Appalachian Spring'. Use one or both.
		* If the title is more unique or complicated, use `othertitle` and write it out in raw HTML.
			* For Mozart's Symphony No. 41 "Jupiter", set `title` to `Symphony No. 41`, and the subtitle to `Jupiter`.
			* For Copland's _Appalachian Spring_, set just `subtitle` to `Appalachian Spring`.
			* For Rossini's _Overture_ to _La gazza ladra_, set `othertitle` to `<i>Overture</i> to <i>La gazza ladra</i>`
	* `featuring` is the name of any featured artists
	* `composer` is the last name of the composer

_NOTE: Notice that the image name must be exactly the same as the concert ID (plus the image filetype ending, of course)._





