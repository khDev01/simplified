 # React gh pages simplified - [view original](github.com/gitname/react-gh-pages)

1. `npx create-react-app`
2. `npm install gh-pages --save-dev`
3. package.json top level i.e. above dependencies:
```
"homepage": "https://khDev01.github.io/repo",
```

4. In Scripts:
    ```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ```
5. `git remote add origin https://github.com/khDev01/repo.git`
6. `npm run deploy` deploy to gh-pages. view at `https://khdev01.github.io/repo/`
7.  *optional* commit dev code
```
git add .
git commit -m "Create a React app and publish it to GitHub Pages"
git push origin master
```
