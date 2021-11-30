import React from 'react';
import './App.scss';
import {
  Link, Navigate, Route, Routes,
} from 'react-router-dom';
import Posts from './Pages/Posts';
import Users from './Pages/Users';
import UsersDetails from './Pages/UsersDetails';
import PostFilter from './Pages/PostFilter';

const App = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="users">Users</Link></li>
        <li><Link to="posts">All Posts</Link></li>
      </ul>
    </nav>
    <h1>Do something here</h1>
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetails />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostFilter />} />
    </Routes>
  </div>

);

export default App;
