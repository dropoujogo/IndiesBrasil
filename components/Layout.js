import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Indies do Brasil</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Indies do Brasil
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/status">
                  Server Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo da página */}
      <main className="container mt-4">{children}</main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5 border-top">
        <p className="mb-0">&copy; {new Date().getFullYear()} Indies Brasil.</p>
      </footer>
    </>
  );
}
