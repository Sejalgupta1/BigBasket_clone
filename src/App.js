 import './App.css';
import Content from './components/content/Content';
 import Header from './components/Header/Header';
import Populas from './components/Populas/Populas';
 import Product from './components/Product/Product';
import Seller from './components/Seller/Seller';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Product/>
      <Seller/>
      <Populas/>
      <Footer/>
    </div>
  );
}

export default App;
