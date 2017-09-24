import sys
from subprocess import call

def main(argv):
	params = argv[1]
	if 'a' in params:
		call(['git', 'add', '.'])
	if 'c' in params:
		if len(argv) > 2:
			message = argv[2]
			call(['git', 'commit', '-m', message])
		else:
			print('Please include a commit message as a second parameter.')
	if 'p' in params:
		call(['git', 'push'])

if __name__ == '__main__':
	main(sys.argv)