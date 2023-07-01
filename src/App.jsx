import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import PageContainer from './components/containers/PageContainer/PageContainer';
import Home from './components/home/Home';
import BorderContainer from './components/containers/borderContainer/BorderContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Books from './components/books/Books';
import Services from './components/services/Services';
import Companies from './components/companies/Companies';

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <PageContainer>
                <BorderContainer>
                    <Nav />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Home />
                                    <Services />
                                    <Companies />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/work"
                            element={<Work />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/books"
                            element={<Books />}
                        />
                    </Routes>
                </BorderContainer>
                <Footer />
            </PageContainer>
        </BrowserRouter>
    );
}

export default App;
