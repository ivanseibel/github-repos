# Github Repos

## Description

This app is the response to a [challenge proposed on GoStack 10.0](https://github.com/Rocketseat/bootcamp-gostack-desafio-05#desafio-05-aplica%C3%A7%C3%A3o-com-reactjs), a bootcamp about Node.js, ReactJS and React Native, offered by [Rocketseat](http://rocketseat.com.br). You will find more thecnical information in the [project repository](https://github.com/ivanseibel/github-repos) that is hosted at Github.

The project consists of a single page application (SPA) that implements a integration with the Github api to get information about repositories.

Basically, user can create a list of repositories and then access the details of the desired repository. If user add an invalid repository, or a repeated repository, the app will show a warning.

The repository details page consists in basic informations about the repository a list of issues registered in the repository. The presented issues have the user avatar, user login, issue title and issue tags.

Users can filter issues by status. The list have a limit of 5 records per page, but the user can browse between the pages using the prev and nex buttons.

The title of the listed issues have a link that redirects the user to original issue page on Github.

## Objectives

- Review some concepts about routing using react-router-dom
- Experiments with styled components
- Experiments with free Github api

## Tools and Libraries

- styled-components
- axios
- react-icons

## App Screens

**Main Page**

![Main Page](https://github.com/ivanseibel/assets/blob/master/img/github-repos/main-page.png?raw=true)

**Warning about invalid repository**

![Wrong Repo](https://github.com/ivanseibel/assets/blob/master/img/github-repos/wrong-repo.png?raw=true)

**Warning about repeated repository**

![Repeated Repository](https://github.com/ivanseibel/assets/blob/master/img/github-repos/repo-already-exists.png?raw=true)

**Repository Details Page**

![Repository Details Page](https://github.com/ivanseibel/assets/blob/master/img/github-repos/repository-details.png?raw=true)

