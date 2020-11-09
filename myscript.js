//Gestire navigazione immagini con click su freccie e pallini
//Vi allego sotto le immagini dello slider ma potete tranquillamente usare le vostre se preferite
//Bonus: fare eseguire il loop delle immagini, cambiando immagine ogni 3 secondi


var app = new Vue(
    {
    el: '#container',
    data: {
    n_img: 0,
    immagini: [
        'img/image1.jpg',
        'img/image2.jpg',
        'img/image3.jpg',
        'img/image4.jpg'
    ]
},
//inizio metodi
methods: {
//successiva
next_image() {
 // incremento l'indice dell'immagine corrente
 this.n_img += 1;
 // verifico l'indice è uscito dal range delle posizioni dell'array
 if(this.n_img > this.immagini.length - 1) {
     this.n_img = 0;
 }

},
//precedente
prev_image() {
 this.n_img -=1;
 if (this.n_img > 0) {
     this.n_img=this.n_img.length -1;
 }
},
//indice per pallini 
 set_image(index) {
    this.n_img = index;
 }
}
});
