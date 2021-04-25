import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header/Index';
import MainBlock from './Components/MainBlock/Index';
import Footer from './Components/Footer/Index';

import foto1 from './img/blog-image1.jpg';
import foto2 from './img/blog-image2.jpg';
import foto3 from './img/blog-image3.jpg';
import foto4 from './img/blog-image4.jpg';
import foto5 from './img/blog-image5.jpg';
import fotoAutor1 from './img/author-image1.jpg';
import fotoAutor2 from './img/author-image2.jpg';
import fotoIcon1 from './img/co.ico';
import { Main } from './Components/style';

import { textA1, text2A1, mainTextA1, textComentA1, textA2, text2A2, textComentA2,
  textA3, text2A3, textComentA3, textA4, text2A4, textComentA4,textA5, text2A5, textComentA5} from './Components/MainBlock/MainBlockData';


function App() {
  return (
   <>
   <Header /> 
     <Main>
      <MainBlock 
                text1 = {textA1}
                text2 = {text2A1}
                mainText ={mainTextA1}
                textComent = {textComentA1}
                foto = {foto1}
                fotoAutor = {fotoAutor1}
                fotoIcon = {fotoIcon1} 

        />
         <MainBlock 
                text1 = {textA2}
                text2 = {text2A2}
                mainText ={mainTextA1}
                textComent = {textComentA2}
                foto = {foto2}
                fotoAutor = {fotoAutor2}
                fotoIcon = {fotoIcon1} 

        />
         <MainBlock 
                text1 = {textA3}
                text2 = {text2A3}
                mainText ={mainTextA1}
                textComent = {textComentA3}
                foto = {foto3}
                fotoAutor = {fotoAutor1}
                fotoIcon = {fotoIcon1} 

        />
         <MainBlock 
                text1 = {textA4}
                text2 = {text2A4}
                mainText ={mainTextA1}
                textComent = {textComentA4}
                foto = {foto4}
                fotoAutor = {fotoAutor2}
                fotoIcon = {fotoIcon1} 

        />
         <MainBlock 
                text1 = {textA5}
                text2 = {text2A5}
                mainText ={mainTextA1}
                textComent = {textComentA5}
                foto = {foto5}
                fotoAutor = {fotoAutor1}
                fotoIcon = {fotoIcon1}
         /> 
    </Main>
    
     <Footer />
   </>
  );
}

export default App;
