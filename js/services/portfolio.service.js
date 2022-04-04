"use strict";

var gPortf = [];

function createPortfolio() {
    gPortf.push(
    _createPortfolio(
      "Mine Sweeper",
      "Careful! There are mines here",
      'The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.',
      "https://uribaynesay.github.io/Mine-Sweeper/",
      ["Matrix", "Intervals", "Conditions"]
    )
  );
//   gportf.push(_createPortfolio(projName, title, txt, url, labels));
//   gportf.push(_createPortfolio(projName, title, txt, url, labels));
//   gportf.push(_createPortfolio(projName, title, txt, url, labels));
//   gportf.push(_createPortfolio(projName, title, txt, url, labels));
//   gportf.push(_createPortfolio(projName, title, txt, url, labels));
}

function getProject(projIdx){
  return gPortf[projIdx-1];
}

function _createPortfolio(projName, title, txt, url, labels) {
  return {
    id: projName.toLowerCase(),
    name: projName,
    title,
    desc: txt,
    url: url,
    publishedAt: Date.now(),
    labels: labels,
  };
}

