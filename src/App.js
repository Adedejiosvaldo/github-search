import { Routes, Route } from "react-router-dom";
import { AlertProvider } from "./context/alert/AlertContext";
import { Provider } from "./context/github/GithubContext";
import Alert from "./layout/Alert";
import { Footer } from "./layout/Footer";
import NavBar from "./layout/NavBar";
import { AboutPage } from "./pages/AboutPage";

import { Home } from "./pages/Home";
import NotFound from "./pages/notFound";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  return (
    <Provider>
      <AlertProvider>
        <div className='flex flex-col justify-between h-screen'>
          <NavBar />
          <Alert />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:login' element={<Users />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </AlertProvider>
    </Provider>
  );
}

export default App;
