import { NavLink, Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <>
      <header className="pub-header">
        <NavLink to="/" className="logo">⚡ MyBrand</NavLink>
        <nav>
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
          <NavLink to="/admin" className="btn-nav">Admin →</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="pub-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">⚡ MyBrand</span>
            <p>Современные решения для вашего бизнеса. Мы помогаем компаниям расти и развиваться в цифровую эпоху.</p>
          </div>
          <div>
            <h4>Компания</h4>
            <ul>
              <li><NavLink to="/about">О нас</NavLink></li>
              <li><NavLink to="/contact">Контакты</NavLink></li>
              <li><a href="#">Карьера</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          <div>
            <h4>Продукты</h4>
            <ul>
              <li><a href="#">Платформа</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Интеграции</a></li>
              <li><a href="#">Документация</a></li>
            </ul>
          </div>
          <div>
            <h4>Поддержка</h4>
            <ul>
              <li><a href="#">Помощь</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Статус</a></li>
              <li><a href="#">Политика</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 MyBrand. Все права защищены.</p>
        </div>
      </footer>
    </>
  )
}
