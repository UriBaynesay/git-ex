"use strict";

const MONTH_NAME = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log($(".portfolio-link").click(onPortfolioClick));

function onPortfolioClick() {
//   debugger;
  var projNum = +this.dataset.id;
  var proj = getProject(projNum);
  $(`#portfolioModal${projNum} h2`).text(proj.name);
  $(`#portfolioModal${projNum} .item-intro`).text(proj.title);
  $(`#portfolioModal${projNum} .item-desc`).text(proj.desc);
  var projMonth = MONTH_NAME[new Date(proj.publishedAt).getMonth() - 1];
  var projYear = new Date(proj.publishedAt).getFullYear();
  $(`#portfolioModal${projNum} .date`).text(`Date : ${projMonth} ${projYear}`);
  $(`#portfolioModal${projNum} .category`).text(`category : ${(proj.labels.join(','))}`);
}
