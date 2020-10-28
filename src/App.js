import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
