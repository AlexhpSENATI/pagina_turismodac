import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from "react";
import SecHero from './components/sec_hero.jsx';
import Index from './components/index.jsx';
import Contacto from './components/contact.jsx';

import "bootstrap/dist/css/bootstrap.min.css";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/sec_hero" element={<SecHero />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <SecHero />
//     </div>
//     <div className="XD">
//     <Index />
//   </div>
    
//   );
// }

// export default App;
