
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:alugo1209/aicad_practica.git master:gh-pages
#git push -f https://github.com/alugo1209/aicad_practica.git master:gh-pages

cd ..