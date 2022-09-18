import React from 'react';
import s from './App.module.css'
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from './Components/News/News';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {TestComponent} from './trash/TestComponent';
import 'antd/dist/antd.css'
import {Col, Row} from "antd";

export const App = () => {

    return (
        <BrowserRouter>
            <Row justify="center">
                <Col span={20}>
                    {/*<div className={s.appWrapper}>*/}
                    <Row justify="center">
                        <Col className={s.appWrapper} flex={"auto"}>
                            <HeaderContainer/>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col span={2}>
                            <Navbar/>
                        </Col>
                        <Col flex="auto" span={28}>
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
                                <Route path='/*' element={<ErrorPage/>}/>
                            </Routes>
                        </Col>
                    </Row>
                    {/*</div>*/}
                </Col>
            </Row>
        </BrowserRouter>
    );
}

export const ErrorPage = () => {
    return <div>
        <h1>ERROR: PAGE NOT FOUND</h1>
    </div>
}