import React from "react";
import {Header} from '../layout/Header';
import {Navbar} from '../layout/Navbar';
import {Footer} from '../layout/Footer';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Navbar />
            <main className="main-content">
                <div className="content-container">
                    <h1>Bienvenidos al Sindicato Unico del Personal Académico de Conalep Nuevo León </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos nesciunt deserunt tempora adipisci ducimus, aliquam aut, eius cupiditate consequuntur dolorum id. Itaque voluptatem ipsa quidem laborum, cupiditate vero mollitia.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;