const team = [
  { name: 'Алексей Петров', role: 'CEO & Co-founder', emoji: '👨‍💼', bg: '#eff6ff', desc: 'Более 15 лет опыта в IT-индустрии. Выпускник МГУ, серийный предприниматель.' },
  { name: 'Мария Соколова', role: 'CTO', emoji: '👩‍💻', bg: '#f0fdf4', desc: 'Архитектор высоконагруженных систем. Ранее работала в Яндекс и Mail.ru Group.' },
  { name: 'Дмитрий Ким', role: 'Head of Design', emoji: '🎨', bg: '#fdf4ff', desc: 'Дизайнер с 10-летним опытом. Создавал интерфейсы для Fortune 500 компаний.' },
  { name: 'Анна Волкова', role: 'Head of Sales', emoji: '📈', bg: '#fff7ed', desc: 'Построила продажи с нуля до $5M ARR за 2 года. Эксперт в B2B продажах.' },
  { name: 'Сергей Новиков', role: 'Lead Engineer', emoji: '⚙️', bg: '#f0f9ff', desc: 'Fullstack разработчик. Open-source контрибьютор, спикер на tech-конференциях.' },
  { name: 'Ольга Чернова', role: 'Head of Support', emoji: '💬', bg: '#fef9c3', desc: 'Выстроила систему поддержки с NPS 85+. Специалист по Customer Success.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>О нас</h1>
        <p>Мы — команда профессионалов, создающих инновационные решения для бизнеса с 2018 года</p>
      </section>

      <div className="about-content">
        {/* Mission */}
        <div className="about-grid">
          <div>
            <h2>Наша миссия</h2>
            <p>Мы верим, что технологии должны быть доступны каждому бизнесу — от стартапа до крупной корпорации. Наша цель — создавать простые и мощные инструменты, которые помогают компаниям расти.</p>
            <p>С 2018 года мы помогли более 10 000 компаний автоматизировать процессы, увеличить выручку и сократить операционные расходы.</p>
          </div>
          <div className="about-visual">🎯</div>
        </div>

        {/* Values */}
        <div className="about-grid" style={{ direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <h2>Наши ценности</h2>
            <p>Мы строим долгосрочные отношения с клиентами, основанные на доверии и прозрачности. Каждое наше решение создаётся с учётом реальных потребностей бизнеса.</p>
            <p>Инновации, качество и забота о клиенте — три столпа, на которых держится вся наша работа.</p>
          </div>
          <div className="about-visual" style={{ direction: 'ltr' }}>💡</div>
        </div>
      </div>

      {/* Team */}
      <section className="team-section">
        <div className="section-header">
          <h2>Наша команда</h2>
          <p>Опытные специалисты, объединённые общей целью</p>
        </div>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-card">
              <div className="team-avatar" style={{ background: m.bg, fontSize: '2rem' }}>{m.emoji}</div>
              <h3>{m.name}</h3>
              <div className="role">{m.role}</div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
