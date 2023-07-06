import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Toaster } from "react-hot-toast";

import PageContainer from './containers/PageContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  const {drawer} = useSelector(state => state.drawer)
  return (
    <div className="App">
      <Toaster position="top-right"/>
      <Navbar/>
      <PageContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="detail/:id" element={<Detail/>}/>
          </Routes>
          {drawer && <Cart/>}
        </BrowserRouter>        
      </PageContainer>
      <Footer/>
    </div>
  );
}

export default App;
