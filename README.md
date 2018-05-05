# meu.starter.ionic-v3

# Starting a project with Ionic CLI

```
$ ionic config set -g features.project-angular true

$ ionic start meu-starter.ionic-v3 sidemenu
? Project type: ionic-angular
? Starter template: sidemenu
? Would you like to integrate your new app with Cordova to target native iOS and Android: Yes
? Install the free Ionic Pro SDK and connect your app: Yes
```

# Create a new repository on the command line

```
echo "# meu.starter.ionic-v3" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/meumobi/meu.starter.ionic-v3.git
git push -u origin master
```

# Connect app to Ionic Pro

Push your code to [Ionic Pro](https://ionicframework.com/pro) to perform real-time updates (skip the app store queue), and more: git push ionic master.

Ionic Pro uses a git-based workflow to manage app updates. If you're not familiar with on working with branches in GitHub you can read about them [here](https://guides.github.com/introduction/flow/).

```
? Install the free Ionic Pro SDK and connect your app? Yes
? What would you like to do? Link an existing app on Ionic Pro
? Which app would you like to link meu-starter
? Which git host would you like to use? GitHub
? Does the repository exist on GitHub? Yes
? Which GitHub repository would you like to link? meumobi / meu.starter.ionic-v3
? Which would you like to do? Link to master branch only
```
