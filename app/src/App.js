// Components
import ViewMoreCTA from './components/view-more-button'
import NavMenu from './components/menu'

// Page being worked on
import Contact from './pages/contact'

// Styling
import './assets/styles/index.css';



function App() {
  return (
      <div>
          <h1>Welcome</h1>
          <NavMenu/>
          <Contact/>
          <ViewMoreCTA/>
      </div>
    )
}

export default App;