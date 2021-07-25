import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ContactUs from './ContactUs';

const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
    </Switch>
  );
};

export default MainContent;
