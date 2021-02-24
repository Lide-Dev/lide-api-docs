#!/usr/bin/env sh

# abort on errors
# set -e

rm deploy -R

mkdir deploy

# build
npm run build


# navigate into the build output directory
cd dist

mv ./* ../deploy
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
git checkout deploy
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push origin gh-pages

git checkout main

cd ../
