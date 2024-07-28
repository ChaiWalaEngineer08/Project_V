// import React from 'react';
// import Home from './components/home';
// import './index.css';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './components/home';
// import  Navbar  from './components/Navbar';
// import './index.css'; // Import your global styles here
// function App(){
//   return(
// ReactDOM.render(
//   <Router>
//     <Navbar/>
//     <Home />
//   </Router>,
//   document.getElementById('root')
// )
// );}

// export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Forecast from './components/Forecast'; // Import the Forecast component
import CityCard from './components/CityCard'; // Import the CityCard component
import './index.css'; // Import your global styles here

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/city-card" element={<CityCard />} /> {/* Add any additional routes here */}
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
