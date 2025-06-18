import { HostpotApp } from './routes/HostpotApp';
import { LoginScreen } from './componentes/Login/LoginScreen';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from './componentes/loadin/Loading';
import "./App.css";
import CardCarousel from './carrouselNew/CardCarrousel';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/*" element={<HostpotApp />} />
      {/* <Route path="/*" element={<CardCarousel />} /> */}
    </Routes>
  );
}

export default App;