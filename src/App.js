import './App.css';
import React from "react";
import Menu from './Header/Menu/Menu';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
