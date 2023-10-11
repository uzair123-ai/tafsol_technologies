import React from 'react';
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Services from './services';
import OurBlog from './our-blog';
import WorkWithUs from './work-with-us';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/our-blog' element={<OurBlog />} />
        <Route path='/work-with-us' element={<WorkWithUs />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;