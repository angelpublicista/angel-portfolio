import AboutMe from './components/about-me/AboutMe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import logo from './logo.svg';
// import './App.css';
import './sass/app.sass';
import "~/../slick-carousel/slick/slick.css"; 
import "~/../slick-carousel/slick/slick-theme.css";
import SocialIcons from './components/social-icons/SocialIcons';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe />
      <SocialIcons />
      <Footer/>
    </div>
  );
}

export default App;
