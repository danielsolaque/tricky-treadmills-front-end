import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import ReviewsList from "./pages/ReviewsList/ReviewsList";
import NewReview from "./pages/NewReview/NewReview";
import EditReview from "./pages/EditReview/EditReview";
import ShowOneReview from "./pages/ShowOneReview/ShowOneReview";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<ReviewsList />} />
            <Route path="/reviews/:id" element={<ShowOneReview />} />
            <Route path="/reviews/new" element={<NewReview />} />
            <Route path="/reviews/:id/edit" element={<EditReview />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
