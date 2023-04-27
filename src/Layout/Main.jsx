import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import './Main.css'


const Main = () => {

    return (
        <div className='App'>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;