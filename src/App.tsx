import React from 'react';
import './App.css'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from './Components/News/News';

type PropsType = {
    addPost: any
    state: any
    addMessageFromDialog: any
}

export const App = (props: PropsType) => {

    const message = props.state.MessagePage.message
    const dialogs = props.state.MessagePage.dialog
    const ProfilePosts = props.state.ProfilePage.posts

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-contents'>
                    <Routes>
                        {/*exact*/}
                        <Route path='/Profile'
                               element={<Profile usersMessage={ProfilePosts} addPost={props.addPost}/>}/>
                        <Route path='/Dialogs' element={<Dialogs
                            dialogNameData={dialogs}
                            dialogMassageData={message}
                            addMessageFromDialog={props.addMessageFromDialog}
                        />}
                        />
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/News' element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
