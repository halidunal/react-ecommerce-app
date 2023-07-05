import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContainer from './containers/PageContainer';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

function App() {
  const {drawer} = useSelector(state => state.drawer)
  return (
    <div className="App">
      <Navbar/>
      <PageContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="detail/:id" element={<Detail/>}/>
          </Routes>
          {drawer && <Cart/>}
          <Footer/>
        </BrowserRouter>        
      </PageContainer>

    </div>
  );
}

export default App;
