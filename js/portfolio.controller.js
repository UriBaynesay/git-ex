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
  $(`#portfolioModal h2`).text(proj.name);
  $(`#portfolioModal .item-intro`).text(proj.title);
  $(`#portfolioModal .item-desc`).text(proj.desc);
  var projMonth = MONTH_NAME[new Date(proj.publishedAt).getMonth() - 1];
  var projYear = new Date(proj.publishedAt).getFullYear();
  $(`#portfolioModal .date`).text(`Date : ${projMonth} ${projYear}`);
  $(`#portfolioModal .category`).text(`category : ${(proj.labels.join(','))}`);
}

function renderModal(modalNum){

}