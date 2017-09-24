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

### 2. Edit `js/musicians.json`
* Open `js/musicians.json`
* Copy the following musician template, paste it into the file, and fill in as many fields as possible. See existing musicians for examples.
```json
{
	'firstname': '',
	'lastname': '',
	'middlename': '',
	'instrument': '',
	'class': '',
	'major': '',
	'bio': '',
	'photo': '../img/musicians/'
}
```

## Add a new concert

