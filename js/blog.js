"use strict";

let global = {
  news: [
    {
      newsTitle: "AI Tutors Transform Virtual Learning",
      information: "AI-based tutors now personalize lessons for students...",
      img: "./img/AiNewOne.jpg",
      imgCell: "./img/AiNewOneCell.jpg"
    },
    {
      newsTitle: "Cyberattack on Grid Blocked by AI",
      information: "European power grids were targeted by hackers...",
      img: "./img/cyberSecurityOne.jpg",
      imgCell: "./img/cyberSecurityOneCell.jpg"
    },
    {
      newsTitle: "Quantum Chip Solves Logistics Problem",
      information: "A new quantum chip optimized global shipping routes...",
      img: "./img/quantumOne.jpg",
      imgCell: "./img/quantumOneCell.jpg"
    },
    {
      newsTitle: "AI and Jobs",
      information: "AI cuts routine jobs but boosts efficiency...",
      img: "./img/economyOne.jpg",
      imgCell: "./img/economyOneCellphone.jpg"
    }
  ],
  index: 0,

  renderNews: function () {
    const title = document.getElementById("news-title");
    const info = document.getElementById("news-info");
    const img = document.getElementById("news-main-img");
    const sourceCell = document.getElementById("sourceCell");
    const sourceDesktop = document.getElementById("sourceDesktop");

    const currentNews = this.news[this.index];

    title.textContent = currentNews.newsTitle;
    info.textContent = currentNews.information;
    img.src = currentNews.img;
    sourceCell.srcset = currentNews.imgCell;
    sourceDesktop.srcset = currentNews.img;
  },

  next: function () {
    this.index = (this.index + 1) % this.news.length;
    this.renderNews();
  },

  previous: function () {
    this.index = (this.index - 1 + this.news.length) % this.news.length;
    this.renderNews();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  global.renderNews();

  document.getElementById("right").addEventListener("click", () => {
    global.next();
  });

  document.getElementById("left").addEventListener("click", () => {
    global.previous();
  });
});