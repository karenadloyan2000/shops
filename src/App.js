import logo from './logo.svg';
import './App.css';
import './costom.css';
import './media.css';
import Header from './Header';
import Main from './Main';
import Carts from './Carts';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Carts />
      <Footer />
    </div>
  );
}

export default App;
