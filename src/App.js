import AboutMe from './components/about-me/AboutMe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import logo from './logo.svg';
// import './App.css';
import './sass/app.sass';
import "~/../slick-carousel/slick/slick.css"; 
import "~/../slick-carousel/slick/slick-theme.css";
import SocialIcons from './components/social-icons/SocialIcons';
import Portfolio from './components/Portfolio/Portfolio';
import TalkUs from './components/TalkUs/TalkUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
            <Switch>
                <Route path="/talk-us">
                  <TalkUs />
                </Route>

                <Route path="/portfolio">
                  <Portfolio />
                </Route>

                <Route path="/" exact>
                  <AboutMe />
                </Route>
            </Switch>
          <SocialIcons />
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
