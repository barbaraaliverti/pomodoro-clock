# Pomodoro Clock

This is a solution to the [25+5 clock challenge](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock). [FreeCodeCamp](https://www.freecodecamp.org/) is a platform to to help people learn to code for free.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to run this project locally](#how-to-run-this-project-locally)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Build a work/break timer based on the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique). The user should be able to:
- Set the work and break session lengths from 1 to 60 minutes
- Start, pause and reset a session
- Hear a beep everytime a session ends and the next session starts
- Identify which session they are currently in 

### Screenshot

![image](https://user-images.githubusercontent.com/64551613/120117598-514fb280-c164-11eb-9b8d-3db79d008431.png)

### Links

- Live Site URL: [Pomodoro Clock at Vercel](https://pomodoro-clock-mocha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- A little bit of Bootstrap
- [React](https://reactjs.org/) - JS library

### How to run this project locally

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:
```npm install``` 

then

```npm start```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### What I learned

This was my first project using React hooks instead of classes and I really liked it. This synthax is way easier to work with and to manage states.

The logic behind this project was quite challenging to me, but I ended up learning a lot. For instance, this was the first time I used the ```setInterval()``` method, which is essential to update the countdown clock when the session is running. 

### Continued development

I loved to worked with React hooks and I want to focus on more projects using these. I also want to improve the componentization of my future projects - as I mentioned before, I started this project on Codepen so I think I could have done a better jobs dividing my application in more components. There are also some features that I want to explore, such as using Font Awesome icons as a package with React.
For this project in particular, I want to add a session counter to indicate accumulated work time, which would be a nice feature :)

### Useful resources

- [How to play an audio sound file in ReactJS](https://coderrocketfuel.com/article/how-to-play-a-mp3-sound-file-in-react-js) - Initially I started this project on [Codepen](https://codepen.io) and when I exported it to VSCode, there was an error with the alarm beep. This article helped me find another way to play my audio file.

## Author

- [Portfolio](https://barbaraaliverti.github.io/)
- [LinkedIn](https://www.linkedin.com/in/barbaraaliverti)
