import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', type: '' })
  const [status, setStatus] = useState(null)

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm({ name: '', email: '', phone: '', subject: '', message: '', type: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <>
      <section className="page-hero">
        <h1>Контакты</h1>
        <p>Готовы ответить на ваши вопросы и обсудить сотрудничество</p>
      </section>

      <section className="contact-section" style={{ background: '#fff' }}>
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Как нас найти</h2>
            <p>Выберите удобный способ связи. Мы отвечаем в течение одного рабочего дня.</p>
            <div className="contact-detail"><span className="icon">📍</span><div><strong>Офис</strong><br /><span>Москва, ул. Тверская, 12, оф. 301</span></div></div>
            <div className="contact-detail"><span className="icon">📞</span><div><strong>Телефон</strong><br /><span>+7 (495) 123-45-67</span></div></div>
            <div className="contact-detail"><span className="icon">📧</span><div><strong>Email</strong><br /><span>hello@mybrand.ru</span></div></div>
            <div className="contact-detail"><span className="icon">💬</span><div><strong>Telegram</strong><br /><span>@mybrand_support</span></div></div>
            <div className="contact-detail"><span className="icon">⏰</span><div><strong>Часы работы</strong><br /><span>Пн–Пт: 9:00–18:00 МСК</span></div></div>
          </div>

          <div className="contact-form">
            <h3 style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.25rem' }}>Отправить запрос</h3>

            {status === 'success' && (
              <div className="form-alert success">✅ Ваш запрос принят! Мы свяжемся с вами в течение 24 часов.</div>
            )}
            {status === 'error' && (
              <div className="form-alert error">⚠️ Заполните обязательные поля: Имя, Email и Сообщение.</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Имя *</label>
                  <input type="text" placeholder="Иван Иванов" value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label>Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="your@company.ru" value={form.email} onChange={set('email')} />
              </div>
              <div className="form-group">
                <label>Тип обращения</label>
                <select value={form.type} onChange={set('type')}>
                  <option value="">— Выберите —</option>
                  <option value="sales">Коммерческое предложение</option>
                  <option value="support">Техническая поддержка</option>
                  <option value="partnership">Партнёрство</option>
                  <option value="press">Пресса и СМИ</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="form-group">
                <label>Тема</label>
                <input type="text" placeholder="Кратко опишите вопрос" value={form.subject} onChange={set('subject')} />
              </div>
              <div className="form-group">
                <label>Сообщение *</label>
                <textarea
                  placeholder="Подробно расскажите о вашем запросе, задаче или вопросе..."
                  value={form.message}
                  onChange={set('message')}
                  style={{ minHeight: '140px' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                📨 Отправить запрос
              </button>
              <p style={{ textAlign: 'center', marginTop: '.75rem', fontSize: '.8rem', color: 'var(--text-light)' }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
