'use strict'
let global ={
    episodes: [
        {
            number: "Episode 1",
            tittle: "",
            information: "In this very first episode of TechPulse, we dive into the fascinating world of digital connections powering the internet, artificial intelligence, and neural networks.",
            img: "/img/episodeOne.jpg",
            imgCell: "/img/episodeOneCell.jpg",
            url:"https://www.youtube.com/watch?v=Gi8LUnhP5yU",
            year: "2023"
        },
        {
            number: "Episode 2",
            tittle: "",
            information: "Unlock the incredible potential of merging human biology with advanced technology. This episode delves into the cutting-edge world of brain-computer interfaces, neuro-prosthetics, and how we're pushing the boundaries of human intelligence and capability.",
            img: "/img/episodeTwo.jpg",
            imgCell: "/img/episodeTwoCell.jpg",
            url: "https://www.youtube.com/watch?v=piHkfmeU7Wo",
            year: "2023"
        },
        {
            number: "Episode 3",
            tittle: "",
            information: "From news feeds to interactive magazines, this episode explores how tablets and digital platforms have transformed the way we consume information and entertainment. Dive into the world of touch-screen interfaces and the evolution of digital publishing.",
            img: "/img/episodeThree.jpg",
            imgCell: "/img/episodeThreeCell.jpg",
            url: "https://www.youtube.com/watch?v=epQxfSp-rdU",
            year: "2023"
        },
        {
            number: "Episode 4",
            tittle: "",
            information: "Discover the fundamental building blocks of all digital technology. This episode zeroes in on the microchip, exploring how the simplest binary states of '0' and '1' form the complex basis of modern computing and every piece of software we use.",
            img: "/img/episodeFour.jpg",
            imgCell: "/img/episodeFourCell.jpg",
            url:"https://www.youtube.com/watch?v=azOmzumh0vQ",
            year: "2023"
        },
        {
            number: "Episode 5",
            tittle: "",
            information: "Discover the tiny powerhouses that drive our entire technological world. This episode takes a deep dive into the intricate design and incredible capabilities of microchips and integrated circuits, exploring how these miniature marvels enable everything from smartphones to supercomputers.",
            img: "/img/episodeFive.jpg",
            imgCell: "/img/episodeFiveCell.jpg",
            url:"https://www.youtube.com/watch?v=STFcvzoxVw4",
            year: "2023"
        },
        {
            number: "Episode 6",
            tittle: "",
            information: "Get an insider's look at the art and science of software development. This episode dives into the world of coding, discussing the languages, frameworks, and creative problem-solving that bring our digital applications and platforms to life.",
            img: "/img/episodeSixe.jpg",
            imgCell: "/img/episodeSixeCell.jpg",
            url: "https://www.youtube.com/watch?v=ghwaIiE3Nd8",
            year: "2023"
        },
        {
            number: "Episode 7",
            tittle: "",
            information: "Get ready for a glimpse into the next generation of urban logistics. This episode explores the rise of autonomous delivery vehicles, discussing how these smart machines are set to revolutionize last-mile transport, e-commerce, and the efficiency of city life.",
            img: "/img/episodeSeven.jpg",
            imgCell: "/img/episodeSevenCell.jpg",
            url: "https://www.youtube.com/watch?v=KZkYSSE8HHI",
            year: "2023"
        },
        {
            number: "Episode 8",
            tittle: "",
            information: "Immerse yourself in the vibrant currents of the digital world. This episode explores the invisible flow of data, the speed of modern networks, and the intricate pathways that connect us all in an increasingly fast-paced technological landscape.",
            img: "/img/episodeEight.jpg",
            imgCell: "/img/episodeEightCell.jpg",
            url: "https://www.youtube.com/watch?v=hIC9FQpxVwQ",
            year: "2023"
        },
        {
            number: "Episode 9",
            tittle: "",
            information: "Unpack the essence of modern technology's interconnectedness. This episode dives into the intricate networks, seamless integrations, and powerful connections that define our digital world, from high-speed data transfer to the devices that keep us constantly linked.",
            img: "/img/episodeNine.jpg",
            imgCell: "/img/episodeNineCell.jpg",
            url: "https://www.youtube.com/watch?v=KsZI5oXBC0k",
            year: "2023"
        },
        {
            number: "Episode 10",
            tittle: "",
            information: "Step onto the runway where technology meets haute couture. This episode explores the exciting world of wearable technology in fashion, from smart fabrics and integrated lighting to the future of interactive and personalized clothing.",
            img: "/img/episodeTen.jpg",
            imgCell: "/img/episodeTenCell.jpg",
            url: "https://www.youtube.com/watch?v=l-mYLq6eZPY",
            year: "2023"
        },
        {
            number: "Episode 11",
            tittle: "",
            information: "Beyond efficiency and capability, what does the future of robotics look like? This episode explores the advancements in robotic design and human-like interaction, discussing how aesthetics and subtle details are becoming key components in the development of intelligent machines.",
            img: "/img/episodeEleven.jpg",
            imgCell: "/img/episodeElevenCell.jpg",
            url: "https://www.youtube.com/watch?v=3FIo6evmweo",
            year: "2023"
        },
        {
            number: "Episode 12",
            tittle: "",
            information: "What does it mean when artificial intelligence begins to emulate human thought and emotion? This episode delves into the advancements in AI that suggest a future where machines not only think but also exhibit characteristics we associate with consciousness.",
            img: "/img/episodeTwelve.jpg",
            imgCell: "/img/episodeTwelveCell.jpg",
            url: "https://www.youtube.com/watch?v=b7bStIQovcY",
            year: "2023"
        },
        {
            number: "Episode 13",
            tittle: "",
            information: "Step into the world of cutting-edge scientific and technological research. This episode takes you inside the meticulously controlled environments where breakthroughs happen, exploring the innovations in microfabrication, biotechnology, or advanced materials that are shaping our future.",
            img: "/img/episodeThirteen.jpg",
            imgCell: "/img/episodeThirteenCell.jpg",
            url: "https://www.youtube.com/watch?v=aSyZvBrPAyk",
            year: "2023"
        },
        {
            number: "Episode 14",
            tittle: "",
            information: "How does the digital world shape our very being? This episode explores the pervasive influence of data on human identity, examining everything from digital footprints and biometric data to the philosophical implications of living in an increasingly coded reality.",
            img: "/img/episodeFourteen.jpg",
            imgCell: "/img/episodeFourteenCell.jpg",
            url: "https://www.youtube.com/watch?v=YUYagvESisE",
            year: "2023"
        },
        {
            number: "Episode 15",
            tittle: "",
            information: "Witness the next generation of humanoid robotics as we explore the design, capabilities, and societal impact of advanced robots interacting in human spaces. This episode delves into the advancements that are bringing science fiction closer to reality.",
            img: "/img/episodefifteen.jpg",
            imgCell: "/img/episodefifteenCell.jpg",
            url: "https://www.youtube.com/watch?v=Er7Dy8rvqOc",
            year: "2023"
        },
        {
            number: "Episode 16",
            tittle: "",
            information: "Get an exclusive look inside the intricate machinery that powers our world. This episode breaks down the complex components, wiring, and engineering marvels hidden beneath the surface of advanced technology, from spacecraft to cutting-edge robotics.",
            img: "/img/episodeSexteen.jpg",
            imgCell: "/img/episodeSexteenCell.jpg",
            url: "https://www.youtube.com/watch?v=2wq9x2QcZN0",
            year: "2024"
        },
        {
            number: "Episode 17",
            tittle: "",
            information: "Step into the heart of industrial innovation. This episode explores how advanced technology, from digital design and simulation to automated systems, is revolutionizing modern manufacturing and shaping the next generation of industrial engineering.",
            img: "/img/episodeSeventeen.jpg",
            imgCell: "/img/episodeSeventeenCell.jpg",
            url: "https://www.youtube.com/watch?v=bIrEM2FbOLU",
            year: "2024"
        },
        {
            number: "Episode 18",
            tittle: "",
            information: "Step into the future of system administration. This episode explores how virtual reality is revolutionizing the way IT professionals monitor, manage, and interact with complex data centers and digital infrastructure, offering unprecedented immersive control.",
            img: "/img/episodeEighteen.jpg",
            imgCell: "/img/episodeEighteenCell.jpg",
            url: "https://www.youtube.com/watch?v=dEv99vxKjVI",
            year: "2024"
        },
        {
            number: "Episode 19",
            tittle: "",
            information: "Beyond functionality, how does design shape our interaction with technology? This episode takes a closer look at the intersection of minimalist aesthetics and cutting-edge innovation, showcasing how sleek design is becoming as crucial as performance in the world of modern gadgets and devices.",
            img: "/img/episodeNinteen.jpg",
            imgCell: "/img/episodeNinteenCell.jpg",
            url: "https://www.youtube.com/watch?v=Z6rxFNMGdn0",
            year: "2024"
        },
        {
            number: "Episode 20",
            tittle: "",
            information: "Step inside the offices of tomorrow. This episode explores how technology is transforming the modern workspace, from collaborative digital tools and data visualization to flexible environments designed for innovation and efficiency. Discover what's next for how we work.",
            img: "/img/episodeTewnty.jpg",
            imgCell: "/img/episodeTewntyCell.jpg",
            url: "https://www.youtube.com/watch?v=Kedt2or9xlo",
            year: "2024"
        },
        {
            number: "Episode 21",
            tittle: "",
            information: "Step into the vibrant future of virtual and augmented reality. This episode explores how cutting-edge VR headsets are creating incredibly immersive digital experiences, transforming everything from gaming and entertainment to training and social interaction. Get ready to plug into a new reality.",
            img: "/img/episodeTewntyOne.jpg",
            imgCell: "/img/episodeTewntyOneCell.jpg",
            url: "https://www.youtube.com/watch?v=yCd3CzGSte8",
            year: "2024"
        },
        {
            number: "Episode 22",
            tittle: "",
            information: "Explore the incredible advancements in prosthetic technology, where engineering meets human potential. This episode dives into the innovations in robotic limbs, brain-computer interfaces, and how these breakthroughs are enhancing capabilities and redefining human-machine integration.",
            img: "/img/episodeTewntyTwo.jpg",
            imgCell: "/img/episodeTewntyTwoCell.jpg",
            url: "https://www.youtube.com/watch?v=NERNE4UThHU",
            year: "2024"
        },
        {
            number: "Episode 23",
            tittle: "",
            information: "Step into the world of advanced manufacturing and explore the revolutionary impact of 3D printing and additive technologies. This episode delves into how these innovations are transforming design, production, and the very concept of physical creation, pushing the boundaries of what's possible.",
            img: "/img/episodeTewntyThree.jpg",
            imgCell: "/img/episodeTewntyThreeCell.jpg",
            url: "https://www.youtube.com/watch?v=q0mokx-iiws",
            year: "2024"
        },
        {
            number: "Episode 24",
            tittle: "",
            information: "Can machines truly create? This episode explores the surprising intersection of artificial intelligence and creativity, examining how robots and AI are learning to write, compose, and even generate art. We'll discuss the future of human-machine collaboration in creative fields.",
            img: "/img/episodeTewntyFour.jpg",
            imgCell: "/img/episodeTewntyFourCell.jpg",
            url: "https://www.youtube.com/watch?v=kq0VO1FqE6I",
            year: "2024"
        },
        {
            number: "Episode 25",
            tittle: "",
            information: "What does the future of work look like when robots are part of the team? This episode explores the growing collaboration between humans and machines, delving into automation, AI's role in the workplace, and how robotics is changing industries.",
            img: "/img/episodeTewntyFive.jpg",
            imgCell: "/img/episodeTewntyFiveCell.jpg",
            url: "https://www.youtube.com/watch?v=-EVqrDlAqYo", 
            year: "2024"
        },
        {
            number: "Episode 26",
            tittle: "",
            information: "Step back in time to the foundational moments of computing. This episode explores the critical work done in labs and research facilities, highlighting the dedicated minds and innovative machines that built the bedrock of our modern technological world.",
            img: "/img/episodeTewntySixe.jpg",
            imgCell: "/img/episodeTewntySixeCell.jpg",
            url: "https://www.youtube.com/watch?v=l-NJrvyRo0c",
            year: "2024"
        },
        {
            number: "Episode 27",
            tittle: "",
            information: "Take a nostalgic trip back to the early days of personal computing. This episode explores the iconic machines that paved the way for today's technology, discussing their impact and the evolution of the digital world.",
            img: "/img/episodeTewntySeven.jpg",
            imgCell: "/img/episodeTewntySevenCell.jpg",
            url: "https://www.youtube.com/watch?v=cQ48rP_Rs4g",
            year: "2024"
        },
        {
            number: "Episode 28",
            tittle: "",
            information: "Immerse yourself in the world of data and algorithms that underpin our digital lives. This episode explores the fundamental language of computers, how information is processed, and the ever-increasing flow of data that shapes our modern world.",
            img: "/img/episodeTewntyNightEight.jpg",
            imgCell: "/img/episodeTewntyNightEightCell.jpg",
            url: "https://www.youtube.com/watch?v=Tj6NOfdfa4o",
            year: "2024"
        },
        {
            number: "Episode 29",
            tittle: "",
            information: "Explore the cutting edge of virtual reality and immersive experiences. This episode delves into how VR technology is creating new realities, transforming entertainment, education, and the way we interact with digital content.",
            img: "/img/episodeTewntyNine.jpg",
            imgCell: "/img/episodeTewntyNineCell.jpg",
            url: "https://www.youtube.com/watch?v=v-9Mpe7NhkM",
            year: "2025"
        },
        {
            number: "Episode 30",
            tittle: "",
            information: "Explore the future of urban living in the age of smart technology. This episode delves into the concept of interconnected cities, examining how data, networks, and automation are transforming infrastructure, transportation, and the very fabric of our urban environments.",
            img: "/img/episodeThirty.jpg",
            imgCell: "/img/episodeThirtyCell.jpg",
            url: "https://www.youtube.com/watch?v=QDN6xvhAw94",
            year: "2025"
        },
        {
            number: "Episode 31",
            tittle: "",
            information: "Immerse yourself in the next frontier of digital interaction. This episode explores the power of virtual and augmented reality, discussing how these technologies are reshaping industries, revolutionizing work, and redefining how we connect with information and each other.",
            img: "/img/episodeThirtyOne.jpg",
            imgCell: "/img/episodeThirtyOneCell.jpg",
            url: "https://www.youtube.com/watch?v=iwcYp-XT7UI",
            year: "2025"
        },
        {
            number: "Episode 32",
            tittle: "",
            information: "Take a journey inside the complex mind of artificial intelligence. We explore the intricate networks, algorithms, and data that power modern AI, and discuss the implications of these advanced systems for our future. It's an inside look at the technology shaping tomorrow",
            img: "/img/episodeThirtyTwo.jpg",
            imgCell: "/img/episodeThirtyTwoCell.jpg",
            url: "https://www.youtube.com/watch?v=lVHRs3uTHNI",
            year: "2025"
        },
        {
            number: "Episode 33",
            tittle: "",
            information: "This episode delves into the fascinating frontier where artificial intelligence meets consciousness. We explore the blurring lines between silicon and sentience, the implications of self-aware AI, and the ethical challenges we face as technology increasingly mirrors the human mind.",
            img: "/img/episodeThirtyThree.jpg",
            imgCell: "/img/episodeThirtyThreeCell.jpg",
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


