import "./NavBar.css";

interface NavBarProps {
  userName: string;
}

function NavBar({ userName }: NavBarProps) {
  return (
    <header className="navbar">
      <nav className="navbar__content" aria-label="Navegación principal">
        <a className="navbar__brand" href="/" aria-label="Ir al inicio">
          <span className="navbar__logo" aria-hidden="true">H</span>
          <span>Hospital</span>
        </a>

        <div className="navbar__actions">
          <span className="navbar__user-name">{userName}</span>
          <div className="navbar__links">
            <button className="navbar__link" type="button">Perfil</button>
            <button className="navbar__link" type="button">Entrevistas</button>
            <button className="navbar__link" type="button">
              Notificaciones
              <span className="navbar__notification-dot" aria-label="Notificaciones nuevas" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
