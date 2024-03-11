#!/bin/sh
echo "Pull..."
git pull
echo "Adding all changes..."
git add .
echo "Done."
echo "Committing changes..."
NOW=$(date +"%Y-%m-%d %T")
git commit -m "Updates on $NOW"
echo "Done."
echo "Pushing changes..."
git push -u origin master
echo "Done."