import { Routes, Route } from 'react-router-dom'
import Blue from './Blue';
import Red from  './Red';
import Home from './Home';
import Green from './Green';
import Orange from './Orange';

function MainSection() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
                <Route path="/green" element={<Green />} />
                <Route path="/orange" element={<Orange />} />
            </Routes>
    </div>
  );
}

export default MainSection;