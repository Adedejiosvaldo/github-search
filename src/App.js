import { Routes, Route } from "react-router-dom";
import { Provider } from "./context/github/GithubContext";
import { Footer } from "./layout/Footer";
import NavBar from "./layout/NavBar";
import { AboutPage } from "./pages/AboutPage";

import { Home } from "./pages/Home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Provider>
      <div className='flex flex-col justify-between h-screen'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/notfound' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
