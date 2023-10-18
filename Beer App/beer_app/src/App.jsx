import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Beers from "./Pages/Beers/Beers";
import RandomBeer from "./Pages/RandomBeer/RandomBeer";
import SingleBeer from "./Pages/SingleBeer/SingleBeer";
import { BeersContextProvider } from "./BeersContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <BeersContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/random_beer" element={<RandomBeer />} />
            <Route path="/beers/:id" element={<SingleBeer />} />
          </Routes>
        </BeersContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
