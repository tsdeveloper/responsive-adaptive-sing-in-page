import './App.css'

function App() {
    return (
        <>
            <main className="signin-page">
                <section className="signin">
                    <header className="signin__header">
                        <h1 className="signin__header--title">Evolutive Learning</h1>
                    </header>
                    <form className="signin__form">
                        <div className="signin__form-field">
                            <input className="signin__form-field--input" type="email" placeholder="Email"/>
                            <input className="signin__form-field--input" type="password" placeholder="Password"/>
                        </div>
                        <div className="signin__form-button">
                            <input className="signin__form-button--submit" type="submit" />
                        </div>
                    </form>

                    <div className="signin__divider">
                        <p className="signin__divider-text">Or connect with</p>
                    </div>

                    <ul className="signin__social-list">
                        <li className="signin__social-item">
                            <a className="signin__social-link" href="#">Facebook</a>
                        </li>
                        <li className="signin__social-item">
                            <a className="signin__social-link" href="#">Twitter</a>
                        </li>
                        <li className="signin__social-item">
                            <a className="signin__social-link" href="#">Google</a>
                        </li>
                    </ul>

                    <div className="signin__signup">
                        <a className="signin__signup-link" href="#">Forgot Password</a>
                        <p className="signin__signup-text">
                            Not a member yet?
                            <a className="signin__signup-text--link" href="#">Sign Up</a>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
