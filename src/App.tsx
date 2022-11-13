import React, {useEffect} from 'react';
import s from './App.module.css'
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from './Components/News/News';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import 'antd/dist/antd.css'
import {Col, Row} from "antd";
import {initializeAppTC} from "./Redux/reducer/app-reducer";
import {AppRootStateType, useAppDispatch} from "./Redux/redux-store";
import { Login } from './Components/Login/Login';
import {useSelector} from "react-redux";
import { Spin } from 'antd';

export const App = () => {

    const dispatch = useAppDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    /*if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }*/

    if(!isInitialized) {
        return  <div className={s.spin}>
            <Spin size="large" />
        </div>
    }

    return (
            <Row justify="center">
                <Col span={20}>
                    <Row justify="center" style={{paddingTop: '5px', paddingBottom: '10px'}}>
                        <Col className={s.appWrapper} flex={"auto"}>
                            <HeaderContainer/>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col span={3} style={{marginRight: '10px'}}>
                            <Navbar/>
                        </Col>
                        <Col flex="auto" span={27} style={{backgroundColor: '#d0f3f3', border: '1px solid black'}}>
                            <Routes>
                                <Route path='/' element={<StartPage />}/>
                                <Route path='profile' element={<ProfileContainer/>}>
                                    <Route path=':id' element={<ProfileContainer/>}/>
                                </Route>
                                <Route path='dialogs' element={<DialogsContainer/>}/>
                                <Route path='music' element={<Music/>}/>
                                <Route path='settings' element={<Settings/>}/>
                                <Route path='news' element={<News/>}/>
                                <Route path='users' element={<UsersContainer/>}/>
                                <Route path='login' element={<Login/>}/>
                                <Route path='/*' element={<ErrorPage/>}/>
                            </Routes>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}

export const ErrorPage = () => {
    return <div>
        <h1>ERROR: PAGE NOT FOUND</h1>
    </div>
}

export const StartPage = () => {
    return <div>start page</div>
}