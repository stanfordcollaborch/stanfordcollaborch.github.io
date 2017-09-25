import sys
from os import listdir
from os.path import isfile, join

"""
NOTE: might have to reorder the data afterwards

python galleryGen.py <concertID> <title> <pickerTitle> <date> <description (optional)>
	   0			 1			 2		 3			   4	  5
"""

def processFiles(argv):
	if len(argv) is 5:
		script, concertID, title, pickerTitle, date = argv
		description = ''
	else:
		script, concertID, title, pickerTitle, date, description = argv
		description = argv[5]
	# print('%s\n%s\n%s\n%s\n%s' % (concertID, title, pickerTitle, date, description))

	path = 'img/performance/' + concertID

	filenames = [f for f in listdir(path) if isfile(join(path, f))]
	if '.DS_Store' in filenames:
		filenames.remove('.DS_Store')

	newFile = open('output.json', 'w')
	newFile.write('\t"%s": {\n' % concertID)
	newFile.write('\t\t"title": "%s",\n' % title)
	newFile.write('\t\t"pickerTitle": "%s",\n' % pickerTitle)
	newFile.write('\t\t"date": "%s",\n' % date)
	newFile.write('\t\t"data": [\n')
	for i, file in enumerate(filenames):
		newFile.write('\t\t\t{\n')
		newFile.write('\t\t\t\t"image": "../img/performance/%s/%s",\n' % (concertID, file))
		newFile.write('\t\t\t\t"thumb": "../img/performance/%s/thumbs/%s",\n' % (concertID, file))
		newFile.write('\t\t\t\t"description": "%s"\n' % description)
		newFile.write('\t\t\t}')
		if i is not len(filenames) - 1:
			newFile.write(',')
		newFile.write('\n')
	newFile.write('\t\t]\n')
	newFile.write('\t},')
	newFile.close()

def finalInstructions():
	print('\nDone. Your output is in a file called "output.json".')
	print('Copy the contents into "res/galleries.json" and then delete "output.json".')
	print('Notice that you may need to do a bit of manual reordering of the data items.\n')

def main(argv):
	if len(argv) < 5:
		print('Usage:\n\tpython galleryGen.py <id> <title> <pickerTitle> <date> <description (optional)>')
	else:
		processFiles(argv)
		finalInstructions()

if __name__ == '__main__':
	main(sys.argv)