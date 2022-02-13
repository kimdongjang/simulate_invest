import React from 'react';
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
      <p><a className='link__style' href='#home'>Home</a></p>
      <p><a className='link__style' href='#menu'>Menu</a></p>
      <p><a className='link__style' href='#about'>About</a></p>
    </div>
  );
}
