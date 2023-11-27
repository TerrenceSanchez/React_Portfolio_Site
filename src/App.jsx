import './App.css'
import Homepage from './pages/Homepage.jsx';
import {Helmet} from 'react-helmet';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import TokyoHomePage from './pages/TokyoHomePage.jsx';
import Day1Page from './pages/Day1Page.jsx';
import Day2Page from './pages/Day2Page.jsx';
import Day3Page from './pages/Day3Page.jsx';
import Day4Page from './pages/Day4Page.jsx';
import Day5Page from './pages/Day5Page.jsx';




function App() {
  

  return (
    <>
      <Helmet>
                <style>{'body { background-color: #FAFAD2; }'}</style>
      </Helmet>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='TokyoHomePage' element={<TokyoHomePage/>} />
          <Route path='Day1Page' element={<Day1Page/>} />
          <Route path='Day2Page' element={<Day2Page/>} />
          <Route path='Day3Page' element={<Day3Page/>} />
          <Route path='Day4Page' element={<Day4Page/>} />
          <Route path='Day5Page' element={<Day5Page/>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
