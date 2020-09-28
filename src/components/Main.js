import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Responses from './Resume';



const Main = () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/responses" component={Responses} />
  </Switch>
)

export default Main;