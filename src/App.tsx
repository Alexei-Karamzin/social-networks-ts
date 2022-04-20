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
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';

type PropsType = {
    state: RootStateType
    dispatch: any
    store: any
}

export const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-contents'>
                    <Routes>
                        <Route path='/Profile' element={<Profile
                            store={props.store}
                        />}/>
                        <Route path='/Dialogs' element={<DialogsContainer
                            store={props.store}
                        />}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/News' element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

