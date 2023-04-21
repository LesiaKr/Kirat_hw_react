import Counter from '../Counter/Counter';
import ErrorPage from '../ErrorPage/ErrorPage';
import Contacts from '../Contacts/Contacts';
import Goods from '../Goods/Goods';
import GoodsItem from '../GoodsItem/GoodsItem';
import Main from '../Main/Main';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </header>

      <nav className="App-nav">  
        <BrowserRouter >
          <Navigation />

          <Routes>
            <Route path="/main" element={
              <ErrorPage>
                <Main />
              </ErrorPage>} />
          </Routes>

          <Routes>
            <Route path="/contacts" element={
              <ErrorPage>
                <Contacts />
              </ErrorPage>} />
          </Routes>

          <Routes>
            <Route path="/goods" element={
              <ErrorPage>
                <Goods />
              </ErrorPage> } >
                <Route path="/goods/:goodsId" element={
                  <ErrorPage>
                    <GoodsItem /> 
                  </ErrorPage>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
