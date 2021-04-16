import Navbar from "./components/Navbar"
import { BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom"
import Home from "./components/pages/Home"
import Footer from "./components/Footer"
import About from "./components/pages/About"
import Reason from "./components/pages/Reason"
import './app.css'

const App = () => {
  return(
    <div className="main">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/reason'>
            <Reason/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
