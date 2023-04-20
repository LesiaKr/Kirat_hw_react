import Contacts from '../Contacts/Contacts';
import Goods from '../Goods/Goods';
import GoodsItem from '../GoodsItem/GoodsItem';
import Main from '../Main/Main';
import Privat from '../Privat/Privat';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {

  const goodsIds = ["apple", "orange", "banana", "plum", "pear"];
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <ul>
            <li>
              <NavLink to="/">
                Main 
              </NavLink>
            </li>

            <li>
              <NavLink to="/contacts">
                Contacts
              </NavLink>
            </li>

            <li>
              <NavLink to="/goods">
                Goods
              </NavLink>
            </li>
            
            {goodsIds.map(goodsId => {
              return(
                <li key={goodsId}>
                  <NavLink to={`/goods/${goodsId}`}>
                    {goodsId}
                  </NavLink>
                </li>
              )
            })}

            <li>
              <NavLink to="/privat">
                Private page
              </NavLink>
            </li>
            
          </ul>

          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/contacts" element={<Contacts /> } />
            <Route path="/goods" element={<Goods /> } >
              <Route path="/goods/:goodsId" element={<GoodsItem /> } />
            </Route>

            <Route path='/privat' element={<Privat /> } />

          </Routes>

        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
