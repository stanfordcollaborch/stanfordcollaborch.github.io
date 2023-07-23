#!/bin/sh
echo "Username: "
read USERNAME
HOSTNAME="myth.stanford.edu"
SCRIPT="cd /afs/ir.stanford.edu/group/scor/WWW; git pull"
ssh -l ${USERNAME} ${HOSTNAME} "${SCRIPT}"