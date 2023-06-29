import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import PageContainer from './components/containers/PageContainer/PageContainer';
import Home from './components/home/Home';
import BorderContainer from './components/containers/borderContainer/BorderContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <PageContainer>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    ></Route>
                    <Route
                        path="/about"
                        element={<About />}
                    />
                </Routes>
            </PageContainer>
        </BrowserRouter>
    );
}

export default App;
