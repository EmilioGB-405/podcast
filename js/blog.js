"use strict"

let global={
    news:[
        {
            newsTitle:"AI Tutors Transform Virtual Learning",
            information:"AI-based tutors now personalize lessons for students, improving scores and attention in remote classrooms across the globe.Teachers report a 30% increase in math and science retention using these adaptive learning systems.",
            img:"./img/AiNewOne.jpg",
            imgCell:"./img/AiNewOneCell.jpg"
        },
        {
            newsTitle:"Cyberattack on Grid Blocked by AI",
            information:"European power grids were targeted by hackers but protected by real-time AI defense systems.Authorities credit machine learning models for identifying and stopping the breach before major damage occurred.",
            img:"./img/cyberSecurityOneCell.jpg",
            imgCell:"./img/cyberSecurityOne.jpg"
        },
        {
            newsTitle:"Quantum Chip Solves Logistics Problem",
            information:"A new quantum chip optimized global shipping routes in seconds—far faster than traditional supercomputers.Logistics companies are exploring how quantum algorithms can save costs and reduce transit delays worldwide.",
            img:"./img/quantumOneCell.jpg",
            imgCell:"./img/quantumOne.jpg"
        },
        {
            newsTitle:"AI and Jobs",
            information:"AI cuts routine jobs but boosts efficiency.Workers need digital skills to stay employed.Governments must support retraining programs.",
            img:"./img/economyOneCellphone.jpg",
            imgCell:"./img/economyOne.jpg"
        }
    ],
    i:0,
    newlenght:4,
    newsLoad:function(){
        const reverseNews = [...this.news].reverse();
        const  NEWS = document.querySelectorAll('')
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    global.newsLoad();
    global.numberIndex();
    global.rightButton();
    global.LeftButton()
})