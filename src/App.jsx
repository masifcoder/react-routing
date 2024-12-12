import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Notfound from "./pages/Notfound";
import Menu from "./components/Menu";
import User from './pages/User';
import SearchForm from './pages/SearchForm';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import CreateUser from "./pages/dashboard/CreateUser";
import ViewUsers from "./pages/dashboard/ViewUsers";
import Settings from "./pages/dashboard/Settings";
import Login from './pages/Login';

function App() {

  return (
    <>
    <Menu />
     <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contacts />} />
        <Route path='/users/:sid' element={<User />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/form' element={<SearchForm />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='create' element={<CreateUser />} />
          <Route path='view-users' element={<ViewUsers />} />
          <Route path='settings' element={<Settings />} />
        </Route>
          

        <Route path='*' element={<Notfound />} />
     </Routes>
     footer
    </>
  )
}

export default App
