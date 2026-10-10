import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import ArtistDetails from "./pages/ArtistDetails/ArtistDetails";
import Favorites from "./pages/Favorites/Favorites";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import MobileTabBar from "./components/MobileTabBar/MobileTabBar";
import PublicOnlyRoute from "./components/PublicOnlyRoute/PublicOnlyRoute";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
<ScrollToTop />
        <div className="app">
          <Navbar />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/signup"
                element={
                  <PublicOnlyRoute>
                    <SignUp />
                  </PublicOnlyRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  <PublicOnlyRoute>
                    <Login />
                  </PublicOnlyRoute>
                }
              />
              <Route
                path="/search"
                element={
                  <ProtectedRoute>
                    <SearchResults />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/artist/:name"
                element={
                  <ProtectedRoute>
                    <ArtistDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <MobileTabBar />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
