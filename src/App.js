import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ReviewsList from "./ReviewsList";
import New from "./New";
import ShowOne from "./ShowOne";
import Edit from "./Edit";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/reviews/new" element={<New />} />
          <Route path="/reviews/:id" element={<ShowOne />} />
          <Route path="/reviews/:id/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
