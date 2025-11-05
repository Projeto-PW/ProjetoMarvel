const bannerItems = [
    {
        image: './src/assets/homemAranha.webp',
        title: 'Fantasia do Homem Aranha'
    },
    {
        image: './src/assets/capitãoAmerica.webp',
        title: 'Fantasia do Capitão América'
    },
    {
        image: './src/assets/deadpool.webp',
        title: 'Fantasia do Deadpool'
    },
    {
        image: './src/assets/homemDeFerro.webp',
        title: 'fantasia do HomemDeFerro'
    },
    {
        image: './src/assets/hulk.webp',
        title: 'fantasia do Hulk'
    },
    {
        image: './src/assets/wolverine.webp',
        title: 'fantasia do Wolverine'
    }
];

let i = 0;
const tempo = 5000;
const bannerElement = document.querySelector('.banner');

function slideShow() {
    bannerElement.style.backgroundImage = `url(${bannerItems[i].image})`;
    i++;
    if (i >= bannerItems.length) {
        i = 0;
    }
    setTimeout(slideShow, tempo);
}

slideShow();

function trocarSlide(slide) {
    switch(slide) {
        case "voltar" :
            i--;
            if (i < 0) {
                i = bannerItems.length - 1;
            }
        break;
        case "avançar" :
            i++;
            if (i >= bannerItems.length) {
                i = 0;
            }
        break;
    }
    bannerElement.style.backgroundImage = `url(${bannerItems[i].image})`;
}