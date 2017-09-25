# SCOr website

This repository is the source code for the [Stanford Collaborative Orchestra's website](scor.stanford.edu), in a truly democratic fashion! Feel free to submit pull requests if you'd like to change anything about the website, but make sure to follow the guidelines outlined below.

## Contents

1. [Add a new musician](#add-a-new-musician)
2. [Add a new concert](#add-a-new-concert)
3. [Add a new gallery](#add-a-new-gallery)
4. [Other](#other)

## Add a new musician

To add a new musician, please complete all of these steps:
### 1. Add musician photo
* Find a photo and crop it into a square. Save as `FirstnameLastname.jpg` (or `.png` or whatever other filetype).
* Add photo to the `img/musicians` directory.

### 2. Edit `res/musicians.json`
* Open `res/musicians.json`.
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
* Add photo to the `img/concertcovers` directory.

_NOTE: The concert ID should be all lowercase._

### 2. Edit `res/concerts.json`
* Open `res/concerts.json`.
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
* `title` **(required)** is the full concert title.
* `date` **(required)** is the date and time of the concert, formatted as `MM/DD/YYYY, HH:MM AM/PM`.
* `location` **(required)** is the concert venue.
* `map` **(required)** is a link to the location in Google Maps.
* `image` is the path to the image file.
* `event` **(required)** is a link to the Facebook event page.
* `id` **(required)** is the concert ID that you chose in Step 1.
* `description` is currently not being used.
* `gallery` indicates whether or not a gallery exists for the concert. Leave as false until the gallery actually exists (see `res/galleries.json`).
* `program` is an array of sub-objects representing each piece in the program. Fill in those fields according to the following rules:
	* `title`, `subtitle`, and `othertitle` **(at least one required)** are slightly complicated:
		* The `title` field is for titles such as 'Symphony No. 1'. The `subtitle` field is for piece names such as 'Appalachian Spring'. Use one or both.
		* If the title is more unique or complicated, use `othertitle` and write it out in raw HTML.
			* For Mozart's Symphony No. 41 "Jupiter", set `title` to `Symphony No. 41`, and the subtitle to `Jupiter`.
			* For Copland's _Appalachian Spring_, set just `subtitle` to `Appalachian Spring`.
			* For Rossini's _Overture_ to _La gazza ladra_, set `othertitle` to `<i>Overture</i> to <i>La gazza ladra</i>`.
	* `featuring` is the name of any featured artists.
	* `composer` is the last name of the composer.

_NOTE: Notice that the image name must be exactly the same as the concert ID (plus the image filetype ending, of course)._

## Add a new gallery

### 1. Add all photos and thumbnails
* Descend into `img/performance` and create a new directory, naming it with the concert ID of the gallery. If the gallery is for an event other than a concert, then give it a short, unique, and descriptive name.
* Copy all of the desired photos into the new directory, making sure that none of them exceed 2000px in width.
* Create another directory inside the new one, and name it `thumbs`. This is where the resized thumbnails will be kept.
* Make copies of the photos, resize them all to a width of 200px (let the height stay proportional), and place them into the new `thumbs` directory. These smaller images will be used as the gallery thumbnails, and dramatically increase the loading time.

### 2. Generate JSON for the gallery
* From the command line, `cd` into the website home directory (the one containing `index.html`).
* Run the script `galleryGen.py`, passing in parameters as follows:
```shell
python galleryGen.py <id> <title> <pickerTitle> <date> <description (optional)>
```
* `id` **(required)** is the ID of the gallery. This should be identical to the name of the directory that you created in Step 1.
* `title` **(required)** is the full title of the concert.
* `pickerTitle` **(required)** is a shortened version of the title that will show up in the gallery picker.
* `date` **(required)** is the date and time of the concert, formatted as `MM/DD/YYYY, HH:MM AM/PM`.
* `description` is an optional description to display with every single photo. Include this to insert universal things like photo credits, and then edit individual photos later (if desired).

A proper usage of the script looks something like this:
```shell
python galleryGen.py filmscor "FilmSCOr: Miyazaki, Snacks, Beethoven, and More" FilmSCOr "6/3/2017, 8:45 PM" "Photographer: Harrison Truong"
```

_NOTE: Notice that the `title`, `date`, and `description` fields were put in quotes, since they have spaces._

### 3. Edit `res/galleries.json`
* After running the above script, there will be a new file in your website home directory called `output.json`.
* Open `output.json`, copy its contents, and paste them into `res/galleries.json` (most recent event first).

## Other











