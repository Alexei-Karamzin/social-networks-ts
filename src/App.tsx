import React from 'react';
import './App.css'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import { News } from './Components/News/News';

export const App = () => {
    return (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <Navbar />
                <div className= 'app-wrapper-contents'>
                    <Routes>
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/Dialogs' element={<Dialogs />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                        <Route path='/News' element={<News />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
