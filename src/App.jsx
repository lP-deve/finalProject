import Header from './components/component4/Header';
import './App.css';
import Home from './components/component1/Home';
import Footer from './components/component4/Footer';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/component2/component1/Portfolio';
import Details from './components/component2/component2/Details';
import Contact from './components/component3/Contact';




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proj1"
          element={
            <Portfolio
              image="/Bitmap.png"
              name="Manage"
              text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
              image2="Group 5(1).jpg"
              name2="Bookmark"
              text2="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section."
              image3="/Group 5(2).jpg"
              name3="Insure"
              text3="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
              image5="/Group 5(3).jpg"
              name5="Fylo"
              text5="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
            />
          }
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
