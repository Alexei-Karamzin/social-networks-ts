import React from 'react';
import './App.css'
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from './Components/News/News';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";



export const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-contents'>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer/>}>
                            <Route path=':id' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

