"use strict";

class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  setInicio(time) {
    console.log("debe recibir id y url y llamar a funcion interna");
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  setInicio(time) {
    this._url += `?start=${time}`;
  }

  PlayMultimedia() {
    const openVideo = document.querySelector(this.id);
    openVideo.setAttribute('src', this.url);
  }
}
//llamar a los elementos del DOM

const musicFrame = document.querySelector("#musica");
const peliculaFrame = document.querySelector("#peliculas");
const serieFrame = document.querySelector("#series");

//Instancias con las urls

const videoMusic = new Reproductor(
  "https://www.youtube.com/embed/wktxNYjfvEg",
  "#musica"
);

const videoMovie = new Reproductor(
  "https://www.youtube.com/embed/0QpjEoVddH8",
  "#peliculas"
);

const videoSerie = new Reproductor(
  "https://www.youtube.com/embed/W4bsQ6nsEZ8",
  "#series"
);

//evento click

const clickMusic = document.querySelector("#headingOne");
clickMusic.addEventListener('click', function () {
  videoMusic.setInicio(7);
  videoMusic.PlayMultimedia();
});

const clickMovie = document.querySelector("#headingTwo");
clickMovie.addEventListener("click", function () {
  videoMovie.setInicio(7);
  videoMovie.PlayMultimedia();
});

const clickSerie = document.querySelector("#headingThree");
clickSerie.addEventListener("click", function () {
  videoSerie.setInicio(1);
  videoSerie.PlayMultimedia();
});