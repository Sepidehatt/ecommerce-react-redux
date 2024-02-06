import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './default.scss';
import Homepage from './pages/Homepage/Homepage';
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';
import Registration from './pages/Registeration/Registeration';
import Login from './pages/Login/Login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePageLayout>
                            <Homepage />
                        </HomePageLayout>
                    }
                />
                <Route
                    path="/registration"
                    element={
                        <MainLayout>
                            <Registration />
                        </MainLayout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <MainLayout>
                            <Login />
                        </MainLayout>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
