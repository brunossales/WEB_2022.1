import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CreateStudent from './components/CRUD/student/CreateStudent'
import ListStudent from './components/CRUD/student/ListStudent'
import EditStudent from './components/CRUD/student/EditStudent'
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'
import CreateProfessor from './components/CRUD/professor/CreateProfessor'
import { ListProfessor } from './components/CRUD/professor/ListProfessor'
import EditProfessor from './components/CRUD/professor/EditProfessor'
// npm install react-bootstrap

function App() {

  return (
    <div className="container" >
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to="/" className='navbar-brand dropdawn-menu' style={{ padding: 5 }}>UFC</Link>
        <div className='dropdawn-menu' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='dropdawn-item' >
              <Link to="/" className='nav-link'>
                Inicio
              </Link>
            </li>
            <li className='navitem'>
              <Link to="About" className='nav-link'>
                Sobre
              </Link>
            </li>


            <li>
              {/* react-bootstrap */}
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" menuVariant="dark" title="Estudante">

                  <NavDropdown.Item href="/listStudent">Listar Estudante</NavDropdown.Item>
                  <NavDropdown.Item href="/createStudent">Criar Estudante</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </li>


            {/* usando React puro */}
            <li class="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
                style={{ padding: 10 }}
              >
                <li className="navitem">
                  <Link to="/createProfessor" className="nav-link" >
                    Criar Professor
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listProfessor" className="nav-link">
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />

        {/* Estudent */}
        <Route path='createStudent' element={<CreateStudent />} />
        <Route path='listStudent' element={<ListStudent />} />
        <Route path='editStudent/:id' element={<EditStudent />} />

        {/* Professor */}
        <Route path='createProfessor' element={<CreateProfessor />}/>
        <Route path='listProfessor' element={<ListProfessor />} />
        <Route path='editProfessor/:id' element={< EditProfessor/>} />

      </Routes>
    </div>
  )
}

export default App
