import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from './ImageGallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <img className='galleryItem' src='http://green.candypop.jp/candybox/img/350/031228B0081.jpg' />
        <img className='galleryItem' src='http://green.candypop.jp/candybox/img/350/031228B0081.jpg' />
        <img className='galleryItem' src='http://green.candypop.jp/candybox/img/350/031228B0081.jpg' />
        <img className='galleryItem' src='http://green.candypop.jp/candybox/img/350/031228B0081.jpg' />
        <img className='galleryItem' src='http://green.candypop.jp/candybox/img/350/031228B0081.jpg' />
      </div>
      <ImageGallery />
    );
  }
}

export default App;
