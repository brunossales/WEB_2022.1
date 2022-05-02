import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div align='center' style={{border:'solid'}}>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Home