import { useState } from 'react'

// Pages
import About from './pages/about'
import Brands from './pages/brands'
import Contact from './pages/contact'

// Components
import ViewMoreCTA from './components/view-more-button'

// Styling
import './assets/styles/index.css';

const App = () => {
  const [currentPage, setCurrentPage ] = useState('about')
  
  const renderPage = () => {
    switch(currentPage) {
      case 'brands':
        return <Brands/>
      case 'contact':
        return <Contact/>
      case 'about':
      default:
        return <About/>
    }
  }

  return (
    <div>
        <h1>Welcome</h1>
        <nav>
          <ul>
            <li> <button onClick={() => setCurrentPage('about')}>About </button></li>
            <li> <button onClick={() => setCurrentPage('brands')}>Brands </button></li>
            {/* <li> <button onClick={() => setCurrentPage('')}>Services </button></li> */}
            {/* <li> <button onClick={() => setCurrentPage('')}>Portfolio </button></li> */}
            <li> <button onClick={() => setCurrentPage('contact')}>Contact </button></li>
            {/* <li> <button onClick={() => setCurrentPage('')}>Reviews </button></li> */}
          </ul>
        </nav>

        {renderPage()}
    </div>
  )
}

export default App;