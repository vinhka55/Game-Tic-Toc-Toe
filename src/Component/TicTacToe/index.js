
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Tutorial from './Tutorial'
import Contact from "./Contact"
import Home from './Home'
import './game.scss'


function TicTacToe(){
    const navLinkClass = ({ isActive }) => {
        return isActive ? 'active-menu' : ''
      }
    return (
        <>
            <div className='menu-page'>
                <nav className="game-nav">
                    <ul className="game-nav-list">
                        <li className="game-nav-item"><NavLink to='/' className={navLinkClass}>Home</NavLink></li>
                        <li className="game-nav-item"><NavLink to='/tutorial' className={navLinkClass}>Tutorial</NavLink></li>
                        <li className="game-nav-item"><NavLink to='/contact' className={navLinkClass}>Contact</NavLink></li>
                    </ul>            
                </nav>         
            </div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="tutorial" element={ <Tutorial/> } />
                <Route path="contact" element={ <Contact/> } />
            </Routes>
        </>
    )
}
export default TicTacToe