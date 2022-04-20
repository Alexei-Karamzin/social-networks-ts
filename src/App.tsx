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
import {actionType, RootStateType} from "./Redux/store";

type PropsType = {
    state: RootStateType
    dispatch: any
    store: any
}

export const App = (props: PropsType) => {
    const message = props.store.getState().MessagePage.message
    const dialogs = props.store.getState().MessagePage.dialog
    const ProfilePosts = props.store.getState().ProfilePage.posts
    const newMessageDialog = props.store.getState().MessagePage.newMessageDialog
    const newPostText = props.store.getState().ProfilePage.newPostText
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-contents'>
                    <Routes>
                        <Route path='/Profile' element={<Profile
                            usersMessage={ProfilePosts}
                            dispatch={props.dispatch}
                            newPostText={newPostText}
                        />}/>
                        <Route path='/Dialogs' element={<Dialogs
                            dialogNameData={dialogs}
                            dialogMassageData={message}
                            dispatch={props.dispatch}
                            newMessageDialog={newMessageDialog}
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

