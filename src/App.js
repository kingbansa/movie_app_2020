import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
// import { About as Pizza } from "./routes/About";
import Navigation from "./components/Navigation"

// 라우터~~~~~! 밖에서는 Navigation이 작동XXXXXXXX
function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/detail/:id" component={Detail} />
    <Route path="/search" exact={true} component={Search} />
  </HashRouter>
  );
}

export default App;