import { useState } from 'react'
import {
  CContainer, CCard, CCardBody, CListGroup, CListGroupItem,
  CBadge, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter,
} from '@coreui/react'

const initMessages = [
  { id: 1, from: 'Иван Петров', email: 'ivan@example.com', subject: 'Вопрос по тарифам', message: 'Добрый день! Хотел бы узнать подробнее о тарифе Enterprise. Какие возможности он включает и есть ли пробный период?', date: '14.03.2026 10:22', read: false },
  { id: 2, from: 'ООО "Технологии Плюс"', email: 'info@techplus.ru', subject: 'Коммерческое предложение', message: 'Здравствуйте! Мы заинтересованы в вашем продукте для корпоративного использования. Можете ли вы подготовить индивидуальное КП для компании в 200 человек?', date: '14.03.2026 09:15', read: false },
  { id: 3, from: 'Мария Сидорова', email: 'maria@gmail.com', subject: 'Техническая проблема', message: 'Добрый день. У меня не работает интеграция с 1С. При попытке синхронизации выдаётся ошибка 503. Пробовала переустановить — не помогает.', date: '13.03.2026 17:45', read: false },
  { id: 4, from: 'Алексей Новиков', email: 'a.novikov@mail.ru', subject: 'Партнёрство', message: 'Приветствую! Я представляю агентство по внедрению CRM-систем. Хотел бы обсудить возможности партнёрской программы и реферальные условия.', date: '13.03.2026 14:30', read: true },
  { id: 5, from: 'Стартап "DataFlow"', email: 'hello@dataflow.io', subject: 'API доступ', message: 'Нам нужен расширенный доступ к API для интеграции с нашей платформой. Каковы лимиты на запросы в плане Pro и есть ли возможность их увеличить?', date: '12.03.2026 11:00', read: true },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState(initMessages)
  const [selected, setSelected] = useState(null)

  const open = (m) => {
    setSelected(m)
    setMessages(msgs => msgs.map(msg => msg.id === m.id ? { ...msg, read: true } : msg))
  }

  const unread = messages.filter(m => !m.read).length

  return (
    <CContainer fluid>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="mb-0" style={{ fontWeight: 700 }}>Сообщения</h4>
          <small className="text-medium-emphasis">Входящие запросы с сайта</small>
        </div>
        {unread > 0 && <CBadge color="danger" style={{ fontSize: '.9rem', padding: '.4rem .75rem' }}>{unread} непрочитанных</CBadge>}
      </div>

      <CCard className="border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
        <CListGroup flush>
          {messages.map((m) => (
            <CListGroupItem
              key={m.id}
              onClick={() => open(m)}
              style={{
                cursor: 'pointer',
                background: m.read ? '#f2f6f3' : '#d8eee4',
                borderLeft: m.read ? '3px solid transparent' : '3px solid #2563eb',
                transition: 'background .15s',
              }}
            >
              <div className="d-flex align-items-start justify-content-between gap-3">
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    {!m.read && <CBadge color="primary" style={{ fontSize: '.7rem' }}>Новое</CBadge>}
                    <strong style={{ fontSize: '.95rem' }}>{m.from}</strong>
                    <span style={{ fontSize: '.8rem', color: '#2a8aaa' }}>— {m.email}</span>
                  </div>
                  <div style={{ fontWeight: m.read ? 400 : 700, marginBottom: '.25rem' }}>{m.subject}</div>
                  <div style={{ fontSize: '.85rem', color: '#2a8aaa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.message}
                  </div>
                </div>
                <div style={{ fontSize: '.8rem', color: '#4aabca', whiteSpace: 'nowrap' }}>{m.date}</div>
              </div>
            </CListGroupItem>
          ))}
        </CListGroup>
      </CCard>

      <CModal visible={!!selected} onClose={() => setSelected(null)} size="lg">
        {selected && (
          <>
            <CModalHeader>
              <CModalTitle>{selected.subject}</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="mb-3 p-3 rounded" style={{ background: '#e0ece6', fontSize: '.9rem' }}>
                <div><strong>От:</strong> {selected.from} ({selected.email})</div>
                <div><strong>Дата:</strong> {selected.date}</div>
              </div>
              <p style={{ lineHeight: 1.8 }}>{selected.message}</p>
            </CModalBody>
            <CModalFooter>
              <CButton color="light" onClick={() => setSelected(null)}>Закрыть</CButton>
              <CButton color="primary">Ответить</CButton>
            </CModalFooter>
          </>
        )}
      </CModal>
    </CContainer>
  )
}
