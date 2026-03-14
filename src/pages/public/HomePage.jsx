import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const features = [
  { icon: '🚀', title: 'Высокая скорость', desc: 'Оптимизированная производительность для максимально быстрой работы ваших приложений.' },
  { icon: '🔒', title: 'Безопасность', desc: 'Надёжная защита данных и соответствие современным стандартам безопасности.' },
  { icon: '📊', title: 'Аналитика', desc: 'Детальная статистика и отчёты для принятия обоснованных бизнес-решений.' },
  { icon: '🔗', title: 'Интеграции', desc: 'Готовые интеграции с популярными сервисами и открытый API.' },
  { icon: '🎨', title: 'Кастомизация', desc: 'Гибкая настройка под стиль и требования вашего бизнеса.' },
  { icon: '💬', title: 'Поддержка 24/7', desc: 'Наша команда всегда готова помочь решить любую задачу.' },
]

const stats = [
  { value: '10,000+', label: 'Клиентов' },
  { value: '99.9%', label: 'Uptime' },
  { value: '150+', label: 'Интеграций' },
  { value: '24/7', label: 'Поддержка' },
]

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-inner">
          <div>
            <h1>Современная платформа для <span>вашего бизнеса</span></h1>
            <p>Управляйте, автоматизируйте и масштабируйте ваши процессы с нашей мощной платформой. Быстрый старт, гибкие настройки.</p>
            <div className="hero-btns">
              <NavLink to="/contact" className="btn-primary">Начать бесплатно →</NavLink>
              <NavLink to="/about" className="btn-outline">Узнать больше</NavLink>
            </div>
          </div>
          <div className="hero-visual">🖥️</div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="section-header">
          <h2>Всё что нужно для работы</h2>
          <p>Мощный набор инструментов, который поможет вашему бизнесу расти быстрее</p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Свяжитесь с нами</h2>
            <p>Готовы ответить на любые вопросы и помочь вам начать работу с нашей платформой.</p>
            <div className="contact-detail"><span className="icon">📍</span><span>Москва, ул. Тверская, 12</span></div>
            <div className="contact-detail"><span className="icon">📞</span><span>+7 (495) 123-45-67</span></div>
            <div className="contact-detail"><span className="icon">📧</span><span>hello@mybrand.ru</span></div>
            <div className="contact-detail"><span className="icon">⏰</span><span>Пн–Пт: 9:00–18:00</span></div>
          </div>
          <div className="contact-form">
            <h3 style={{ marginBottom: '1.5rem', fontWeight: 700 }}>Написать сообщение</h3>
            {status === 'success' && <div className="form-alert success">✅ Сообщение отправлено! Мы свяжемся с вами в течение 24 часов.</div>}
            {status === 'error' && <div className="form-alert error">⚠️ Пожалуйста, заполните все поля.</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Имя *</label>
                <input
                  type="text" placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email" placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Сообщение *</label>
                <textarea
                  placeholder="Расскажите о вашем проекте..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
