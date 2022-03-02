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
import state from '../src/Redux/state'

export const App = () => {

    const message = state.MessagePage.message
    const dialogs = state.MessagePage.dialog
    const ProfilePosts = state.ProfilePage.posts

    return (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <Navbar />
                <div className= 'app-wrapper-contents'>
                    <Routes>
                        {/*exact*/}
                        <Route path='/Profile' element={<Profile usersMessage={ProfilePosts} />} />
                        <Route path='/Dialogs' element={<Dialogs
                            dialogNameData={dialogs}
                            dialogMassageData={message} />}
                        />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                        <Route path='/News' element={<News />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
