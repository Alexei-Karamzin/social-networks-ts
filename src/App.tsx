import React from 'react';
import './App.css'


const App = () => {
  return (
      <div className = 'app-wrapper'>
        <header className='header'>
            <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'/>
        </header>
         <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
             <div>
                 <a>Messeges</a>
             </div>
             <div>
                 <a>News</a>
             </div>
             <div>
                 <a>Music</a>
             </div>
             <div>
                 <a>Settings</a>
             </div>
         </nav>
          <div className='content'>
              <div>
                  <img src='https://images.unsplash.com/photo-1643054370512-3e1ab5e181ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'/>
              </div>
              <div>
                  ava  + discription
              </div>
              <div>
                  My posts
                  <div>post1</div>
                  <div>post2</div>
              </div>
              </div>
          </div>
  );
}

export default App;
