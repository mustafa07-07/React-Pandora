import "./App.css";
import Contact from "./Components/CONTACT/Contact";
import About from "./Components/ABOUT/About";
import Seo from "./Components/SEO/Seo";
import Index from "./Components/INDEX/Index";
import Social from "./Components/SOCIAL/Social";
import EmailMarketing from "./Components/EMAILMARKETING/EmailMarketing";
import React from "react";
import Gotop from "react-go-top";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Influencer from "./Components/INFLUENCER/Influencer";
import InfluencerMarketing from "./Components/INFLUENCERMARKETING/InfluencerMarketing";
import Outreach from "./Components/OUTREACH/Outreach";
import ContentMarketing from "./Components/CONTENTMARKETING/ContentMarketing";
import VideoAdvertising from "./Components/VIDEOADVERTISING/VideoAdvertising";
import Ourpartners from "./Components/OURPARTNERS/Ourpartners";

function App() {
  return (
    <Router>
      <div className="App">
        <Gotop
          style={{ width: "55px", height: "55px" }}
          imgSrc={"../img/gototop.png"}
          visibilityHeight={500}
          target={() => document.getElementById("app")}
        />
        <Switch>
          <Route exact={true} path="/About">
            <About />
          </Route>
          <Route exact={true} path="/">
            <Index />
          </Route>
          <Route exact={true} path="/Contact">
            <Contact />
          </Route>
          <Route exact={true} path="/Social">
            <Social />
          </Route>
          <Route exact={true} path="/Seo">
            <Seo />
          </Route>
          <Route exact={true} path="/VideoAdvertising">
            <VideoAdvertising />
          </Route>
          <Route exact={true} path="/Partners">
            <Ourpartners />
          </Route>
          <Route exact={true} path="/EmailMarketing">
            <EmailMarketing />
          </Route>
          <Route exact={true} path="/ContentMarketing">
            <ContentMarketing />
          </Route>
          <Route exact={true} path="/Outreach">
            <Outreach />
          </Route>
          <Route exact={true} path="/InfluencerMarketing">
            <InfluencerMarketing />
          </Route>
          <Route exact={true} path="/Influencer">
            <Influencer />
          </Route>
          <Route exact={true} path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
