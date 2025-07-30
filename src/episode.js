"use strict";
let global = {
  episodes: [
    {
      number: "Episode 1",
      tittle: "",
      information: "In this very first episode of TechPulse...",
      img: "../img/episodeOne.jpg",
      imgCell: "../img/episodeOneCell.jpg",
      url: "https://www.youtube.com/watch?v=Gi8LUnhP5yU",
      year: "2023"
    },
    {
      number: "Episode 2",
      tittle: "",
      information: "Unlock the incredible potential of merging human biology...",
      img: "../img/episodeTwo.jpg",
      imgCell: "../img/episodeTwoCell.jpg",
      url: "https://www.youtube.com/watch?v=piHkfmeU7Wo",
      year: "2023"
    },
    {
      number: "Episode 3",
      tittle: "",
      information: "From news feeds to interactive magazines...",
      img: "../img/episodeThree.jpg",
      imgCell: "../img/episodeThreeCell.jpg",
      url: "https://www.youtube.com/watch?v=epQxfSp-rdU",
      year: "2023"
    },
    {
      number: "Episode 4",
      tittle: "",
      information: "Explore the impact of global connectivity...",
      img: "../img/episodeFour.jpg",
      imgCell: "../img/episodeFourCell.jpg",
      url: "https://www.youtube.com/watch?v=lMEzIhzyOz8",
      year: "2023"
    },
    {
      number: "Episode 5",
      tittle: "",
      information: "How smart cities are reshaping the future...",
      img: "../img/episodeFive.jpg",
      imgCell: "../img/episodeFiveCell.jpg",
      url: "https://www.youtube.com/watch?v=VZLrZbQ6ZPQ",
      year: "2023"
    },
    {
      number: "Episode 6",
      tittle: "",
      information: "The rise of wearable tech and its applications...",
      img: "../img/episodeSix.jpg",
      imgCell: "../img/episodeSixCell.jpg",
      url: "https://www.youtube.com/watch?v=8xzR3G7MB5M",
      year: "2023"
    },
    {
      number: "Episode 7",
      tittle: "",
      information: "Artificial Intelligence in education...",
      img: "../img/episodeSeven.jpg",
      imgCell: "../img/episodeSevenCell.jpg",
      url: "https://www.youtube.com/watch?v=dClW7gsED9s",
      year: "2023"
    },
    {
      number: "Episode 8",
      tittle: "",
      information: "Explore quantum computing fundamentals...",
      img: "../img/episodeEight.jpg",
      imgCell: "../img/episodeEightCell.jpg",
      url: "https://www.youtube.com/watch?v=wPH0HLg_J_o",
      year: "2023"
    },
    {
      number: "Episode 9",
      tittle: "",
      information: "Drones in daily life and their regulations...",
      img: "../img/episodeNine.jpg",
      imgCell: "../img/episodeNineCell.jpg",
      url: "https://www.youtube.com/watch?v=n6COYmNpHk4",
      year: "2023"
    },
    {
      number: "Episode 10",
      tittle: "",
      information: "The ethical side of AI and automation...",
      img: "../img/episodeTen.jpg",
      imgCell: "../img/episodeTenCell.jpg",
      url: "https://www.youtube.com/watch?v=PYZKwW9WHTs",
      year: "2023"
    },
    {
      number: "Episode 11",
      tittle: "",
      information: "Space tech breakthroughs and private space travel...",
      img: "../img/episodeEleven.jpg",
      imgCell: "../img/episodeElevenCell.jpg",
      url: "https://www.youtube.com/watch?v=ZJhU3msyZVw",
      year: "2024"
    },
    {
      number: "Episode 12",
      tittle: "",
      information: "Green energy tech innovations...",
      img: "../img/episodeTwelve.jpg",
      imgCell: "../img/episodeTwelveCell.jpg",
      url: "https://www.youtube.com/watch?v=iW9cY_xvB5U",
      year: "2024"
    },
    {
      number: "Episode 13",
      tittle: "",
      information: "Augmented Reality in the workplace...",
      img: "../img/episodeThirteen.jpg",
      imgCell: "../img/episodeThirteenCell.jpg",
      url: "https://www.youtube.com/watch?v=0BzQmdo1F54",
      year: "2024"
    },
    {
      number: "Episode 14",
      tittle: "",
      information: "How big data is shaping decision-making...",
      img: "../img/episodeFourteen.jpg",
      imgCell: "../img/episodeFourteenCell.jpg",
      url: "https://www.youtube.com/watch?v=fe4O1QDN0G8",
      year: "2024"
    },
    {
      number: "Episode 15",
      tittle: "",
      information: "Biometric technology in everyday devices...",
      img: "../img/episodeFifteen.jpg",
      imgCell: "../img/episodeFifteenCell.jpg",
      url: "https://www.youtube.com/watch?v=gEp5Ez5ZqeU",
      year: "2024"
    },
    {
      number: "Episode 16",
      tittle: "",
      information: "Digital privacy and surveillance in 2024...",
      img: "../img/episodeSixteen.jpg",
      imgCell: "../img/episodeSixteenCell.jpg",
      url: "https://www.youtube.com/watch?v=nqAxXKkFQZY",
      year: "2024"
    },
    {
      number: "Episode 33",
      tittle: "",
      information: "This episode delves into the fascinating frontier where artificial intelligence meets consciousness...",
      img: "../img/episodeThirtyThree.jpg",
      imgCell: "../img/episodeThirtyThreeCell.jpg",
      url: "https://www.youtube.com/watch?v=anXep8kBOCg&t=4s",
      year: "2025"
    }
  ],




i:0,
page:6,
cardLoad: function () {
   const reversedEpisodes = [...this.episodes].reverse();
    const cards = document.querySelectorAll("#episodes .card");
Array.from(cards).forEach((card, index) => {
  const episodeIndexInReversed =   this.i + index;


            if (reversedEpisodes[episodeIndexInReversed]) {
                const episode = reversedEpisodes[episodeIndexInReversed]; 

                const imagenCell = card.querySelector(".imagenCell"); 
                const imagenCompu = card.querySelector(".imagenCompu"); 
                const img = card.querySelector("img");
                const title = card.querySelector(".title");
                const text = card.querySelector(".text");
                // Get the button within this specific card
                const watchButton = card.querySelector(".circleButton"); 
                
                img.src = episode.img;
                img.alt = episode.tittle || episode.number;
                title.textContent = episode.number;
                text.textContent = episode.information;
                
                if (imagenCell) imagenCell.srcset = episode.imgCell;
                if (imagenCompu) imagenCompu.srcset = episode.img;

                // Set the data-url on the button and add the click listener
                if (watchButton) {
                    watchButton.dataset.url = episode.url; // Set the URL from your data
                    watchButton.onclick = (event) => {
                        event.stopPropagation(); // Prevent card click if card also has a listener
                        window.open(watchButton.dataset.url, '_blank'); 
                    };
                }

            } else {
                card.style.display = 'none';
            }
        });
 
    },
    numbers: document.querySelectorAll('.numbers'),
    numberValue: 0,
    numberIndex: function () {
        
       this.numbers[this.numberValue].style.color = "#1E90FF"; 
       console.log(this.numbers)
    },
    rightButton: function () {
         let right = document.querySelector('#right');
         right.addEventListener('click', () => {
           const totalEpisodes = this.episodes.length;
                if ((this.i + this.page) < totalEpisodes) {
                    this.i += this.page;
                     // Recarga las tarjetas con el nuevo índice
                }
                if (this.numberValue < this.numbers.length - 1) {
                        this.numbers[this.numberValue].style.color = "";
                        this.numberValue++;
                    }

            this.numberIndex();
            this.cardLoad();
         })
    },
    LeftButton: function () {
        let left = document.querySelector('#left')
        left.addEventListener('click', () => {
              if (this.i > 0) {
                    this.i -= this.page;
                    if (this.i < 0) this.i = 0; // Asegura que 'i' no sea negativo
                     // Recarga las tarjetas con el nuevo índice
                }
                if (this.numberValue >= 1) {
                    this.numbers[this.numberValue].style.color = "";
                    this.numberValue--;
                    
                }
                
            this.numberIndex(); 
            this.cardLoad();
        })
         
    },
    seacrhLoad: function () {
    let search = document.querySelector('#search');
    search.addEventListener('input', (e) => {
        let value = e.target.value.trim().toLowerCase();

        const cards = document.querySelectorAll("#episodes .card");

        if (value) {
            const resultado = this.episodes.filter(ep => 
                ep.number.toLowerCase().includes(value) ||
                ep.information.toLowerCase().includes(value)
            );

            cards.forEach((card, index) => {
                const episode = resultado[index];
                if (episode) {
                    const imagenCell = card.querySelector(".imagenCell");
                    const imagenCompu = card.querySelector(".imagenCompu");
                    const img = card.querySelector("img");
                    const title = card.querySelector(".title");
                    const text = card.querySelector(".text");

                    img.src = episode.img;
                    img.alt = episode.tittle || episode.number;
                    title.textContent = episode.number;
                    text.textContent = episode.information;

                    if (imagenCell) imagenCell.srcset = episode.imgCell;
                    if (imagenCompu) imagenCompu.srcset = episode.img;
                } else {
                    card.style.display = "none";
                }
            });
        } else {
            cards.forEach(card => {
                card.style.display = "";
            });
            this.cardLoad(); 
        }
    });
}

}




 document.addEventListener('DOMContentLoaded', () => {
    global.cardLoad();
    global.numberIndex();
    global.rightButton();
    global.LeftButton();
    global.seacrhLoad()
});


