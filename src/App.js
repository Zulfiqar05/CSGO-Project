// import Items from here
import logo from './images/logo.png'
// Import Components from here
import Mission from './components/mission/Mission';
import Navbar from './components/Navbar/Navbar';
import Content from './components/content/content';
import Csgo from './components/content/csgoteam/csgo';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
     <Mission />
     <Content />
     <Csgo /> 
     <Footer />
    </>

  );
}

export default App;
