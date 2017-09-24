import sys
from subprocess import call

"""
USAGE:

	python gitstuff.py -acp "<commit message>"

* a runs 'git add .'
* c runs 'git commit -m <commit message here>'
	(REQUIRES A COMMIT MESSAGE)
* p runs 'git push'
"""
def main(argv):
	if len(argv) <= 2:
		print('Please choose one or more of the add, commit, and push options.')
		print('Usage:\n\tgitstuff -acp "<commit message>"')
	else:
		params = argv[1]
		if 'a' in params:
			call(['git', 'add', '.'])
		if 'c' in params:
			if len(argv) > 2:
				message = argv[2]
				call(['git', 'commit', '-m', message])
			else:
				print('Please include a commit message as a second parameter.')
				print('Usage: gitstuff -acp "<commit message>"')
		if 'p' in params:
			call(['git', 'push'])

if __name__ == '__main__':
	main(sys.argv)