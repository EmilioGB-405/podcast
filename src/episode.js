'use strict';
let global = {
  episodes: [
    {
      number: "Episode 1",
      tittle: "",
      information: "In this very first episode of TechPulse, we dive into the fascinating world of digital connections powering the internet, artificial intelligence, and neural networks.",
      img: "../img/episodeOne.jpg",
      imgCell: "../img/episodeOneCell.jpg",
      url:"https://www.youtube.com/watch?v=Gi8LUnhP5yU",
      year: "2023"
    },
    {
      number: "Episode 2",
      tittle: "",
      information: "Unlock the incredible potential of merging human biology with advanced technology...",
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
      information: "A deep dive into digital manufacturing and 3D printing...",
      img: "../img/episodeFour.jpg",
      imgCell: "../img/episodeFourCell.jpg",
      url: "https://www.youtube.com/watch?v=j4aw7mI5w4o",
      year: "2023"
    },
    {
      number: "Episode 5",
      tittle: "",
      information: "Explore cutting-edge wearable devices reshaping our lives...",
      img: "../img/episodeFive.jpg",
      imgCell: "../img/episodeFiveCell.jpg",
      url: "https://www.youtube.com/watch?v=1Bd3KfncpPQ",
      year: "2023"
    },
    {
      number: "Episode 6",
      tittle: "",
      information: "Dive into blockchain and the future of secure digital transactions.",
      img: "../img/episodeSix.jpg",
      imgCell: "../img/episodeSixCell.jpg",
      url: "https://www.youtube.com/watch?v=ywccQSPF2CU",
      year: "2023"
    },
    {
      number: "Episode 7",
      tittle: "",
      information: "Explore the impact of quantum computing in data processing.",
      img: "../img/episodeSeven.jpg",
      imgCell: "../img/episodeSevenCell.jpg",
      url: "https://www.youtube.com/watch?v=EMvNfL7H23U",
      year: "2023"
    },
    {
      number: "Episode 8",
      tittle: "",
      information: "Smart cities and how technology is transforming urban living.",
      img: "../img/episodeEight.jpg",
      imgCell: "../img/episodeEightCell.jpg",
      url: "https://www.youtube.com/watch?v=5tAUJTL3_K8",
      year: "2023"
    },
    {
      number: "Episode 9",
      tittle: "",
      information: "A journey into biotechnology and future medicine.",
      img: "../img/episodeNine.jpg",
      imgCell: "../img/episodeNineCell.jpg",
      url: "https://www.youtube.com/watch?v=RR1SPaFyFJ4",
      year: "2023"
    },
    {
      number: "Episode 10",
      tittle: "",
      information: "Discover the power of big data and predictive analytics.",
      img: "../img/episodeTen.jpg",
      imgCell: "../img/episodeTenCell.jpg",
      url: "https://www.youtube.com/watch?v=1aKICxDgbmM",
      year: "2023"
    },
    {
      number: "Episode 11",
      tittle: "",
      information: "Unveiling the mysteries of machine learning algorithms.",
      img: "../img/episodeEleven.jpg",
      imgCell: "../img/episodeElevenCell.jpg",
      url: "https://www.youtube.com/watch?v=6QivDFlrJcg",
      year: "2024"
    },
    {
      number: "Episode 12",
      tittle: "",
      information: "Exploring how drones are changing logistics and photography.",
      img: "../img/episodeTwelve.jpg",
      imgCell: "../img/episodeTwelveCell.jpg",
      url: "https://www.youtube.com/watch?v=Kp23RxF-7vU",
      year: "2024"
    },
    {
      number: "Episode 13",
      tittle: "",
      information: "A look at sustainable tech and the green revolution.",
      img: "../img/episodeThirteen.jpg",
      imgCell: "../img/episodeThirteenCell.jpg",
      url: "https://www.youtube.com/watch?v=z2GDhESfV64",
      year: "2024"
    },
    {
      number: "Episode 14",
      tittle: "",
      information: "The future of robotics in everyday life.",
      img: "../img/episodeFourteen.jpg",
      imgCell: "../img/episodeFourteenCell.jpg",
      url: "https://www.youtube.com/watch?v=wGeKDaNUN6g",
      year: "2024"
    },
    {
      number: "Episode 15",
      tittle: "",
      information: "Exploring the ethics of artificial intelligence.",
      img: "../img/episodeFifteen.jpg",
      imgCell: "../img/episodeFifteenCell.jpg",
      url: "https://www.youtube.com/watch?v=dDK0A5K_oNM",
      year: "2024"
    },
    {
      number: "Episode 16",
      tittle: "",
      information: "How virtual and augmented reality are reshaping experiences.",
      img: "../img/episodeSixteen.jpg",
      imgCell: "../img/episodeSixteenCell.jpg",
      url: "https://www.youtube.com/watch?v=RoOK5U8z_U0",
      year: "2024"
    },
    {
      number: "Episode 17",
      tittle: "",
      information: "Discover innovations in nanotechnology.",
      img: "../img/episodeSeventeen.jpg",
      imgCell: "../img/episodeSeventeenCell.jpg",
      url: "https://www.youtube.com/watch?v=SmPhtJCHN5U",
      year: "2024"
    },
    {
      number: "Episode 18",
      tittle: "",
      information: "How 5G is accelerating global connectivity.",
      img: "../img/episodeEighteen.jpg",
      imgCell: "../img/episodeEighteenCell.jpg",
      url: "https://www.youtube.com/watch?v=olB8nUQBRHE",
      year: "2024"
    },
    {
      number: "Episode 19",
      tittle: "",
      information: "Exploring the security challenges in digital transformation.",
      img: "../img/episodeNineteen.jpg",
      imgCell: "../img/episodeNineteenCell.jpg",
      url: "https://www.youtube.com/watch?v=jYm2GMsZTCY",
      year: "2024"
    },
    {
      number: "Episode 20",
      tittle: "",
      information: "The impact of technology on education and e-learning.",
      img: "../img/episodeTwenty.jpg",
      imgCell: "../img/episodeTwentyCell.jpg",
      url: "https://www.youtube.com/watch?v=Qemc9aHBo8c",
      year: "2024"
    },
    {
      number: "Episode 21",
      tittle: "",
      information: "Neuroscience meets AI: can machines think like us?",
      img: "../img/episodeTwentyOne.jpg",
      imgCell: "../img/episodeTwentyOneCell.jpg",
      url: "https://www.youtube.com/watch?v=3pl3FFvVBOs",
      year: "2024"
    },
    {
      number: "Episode 22",
      tittle: "",
      information: "Fascinating innovations in space tech and satellites.",
      img: "../img/episodeTwentyTwo.jpg",
      imgCell: "../img/episodeTwentyTwoCell.jpg",
      url: "https://www.youtube.com/watch?v=bpvFiF2F8sI",
      year: "2024"
    },
    {
      number: "Episode 23",
      tittle: "",
      information: "Wearables for health: the rise of bio-monitoring.",
      img: "../img/episodeTwentyThree.jpg",
      imgCell: "../img/episodeTwentyThreeCell.jpg",
      url: "https://www.youtube.com/watch?v=d-wJhSEiQe0",
      year: "2024"
    },
    {
      number: "Episode 24",
      tittle: "",
      information: "Deepfake technology: innovation or danger?",
      img: "../img/episodeTwentyFour.jpg",
      imgCell: "../img/episodeTwentyFourCell.jpg",
      url: "https://www.youtube.com/watch?v=Gd7E-QUehsU",
      year: "2024"
    },
    {
      number: "Episode 25",
      tittle: "",
      information: "How startups are pushing the boundaries of innovation.",
      img: "../img/episodeTwentyFive.jpg",
      imgCell: "../img/episodeTwentyFiveCell.jpg",
      url: "https://www.youtube.com/watch?v=rDb4qDuZiAU",
      year: "2024"
    },
    {
      number: "Episode 26",
      tittle: "",
      information: "Self-driving cars and the road to autonomy.",
      img: "../img/episodeTwentySix.jpg",
      imgCell: "../img/episodeTwentySixCell.jpg",
      url: "https://www.youtube.com/watch?v=q-F5J0Axtw0",
      year: "2024"
    },
    {
      number: "Episode 27",
      tittle: "",
      information: "How cloud computing reshapes businesses today.",
      img: "../img/episodeTwentySeven.jpg",
      imgCell: "../img/episodeTwentySevenCell.jpg",
      url: "https://www.youtube.com/watch?v=s2Hu8kLnHxA",
      year: "2024"
    },
    {
      number: "Episode 28",
      tittle: "",
      information: "Exploring AI-generated art and its implications.",
      img: "../img/episodeTwentyEight.jpg",
      imgCell: "../img/episodeTwentyEightCell.jpg",
      url: "https://www.youtube.com/watch?v=y8-S06jA9Mc",
      year: "2024"
    },
    {
      number: "Episode 29",
      tittle: "",
      information: "Tech for good: innovations solving global challenges.",
      img: "../img/episodeTwentyNine.jpg",
      imgCell: "../img/episodeTwentyNineCell.jpg",
      url: "https://www.youtube.com/watch?v=fNzfxBqqmFY",
      year: "2025"
    },
    {
      number: "Episode 30",
      tittle: "",
      information: "Exploring brain-computer interfaces and their future.",
      img: "../img/episodeThirty.jpg",
      imgCell: "../img/episodeThirtyCell.jpg",
      url: "https://www.youtube.com/watch?v=3JHvsyJvMk4",
      year: "2025"
    },
    {
      number: "Episode 31",
      tittle: "",
      information: "Digital twins: virtual replicas of the real world.",
      img: "../img/episodeThirtyOne.jpg",
      imgCell: "../img/episodeThirtyOneCell.jpg",
      url: "https://www.youtube.com/watch?v=yM2BQFj7Gmc",
      year: "2025"
    },
    {
      number: "Episode 32",
      tittle: "",
      information: "How AI is enhancing creative processes in music and film.",
      img: "../img/episodeThirtyTwo.jpg",
      imgCell: "../img/episodeThirtyTwoCell.jpg",
      url: "https://www.youtube.com/watch?v=Sm2Ad2X7pKw",
      year: "2025"
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


