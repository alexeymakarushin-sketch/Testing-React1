import {
  CCard, CCardBody, CCardHeader, CCol, CRow, CContainer,
  CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell,
  CBadge, CProgress, CProgressBar,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilCart, cilDollar, cilArrowTop } from '@coreui/icons'

const stats = [
  { title: 'Пользователи', value: '12,489', change: '+12%', icon: cilPeople, color: 'danger', bg: '#ffe4e6' },
  { title: 'Заказы', value: '3,247', change: '+8%', icon: cilCart, color: 'danger', bg: '#fecdd3' },
  { title: 'Выручка', value: '₽2.4M', change: '+23%', icon: cilDollar, color: 'danger', bg: '#fda4af' },
  { title: 'Конверсия', value: '4.6%', change: '+1.2%', icon: cilArrowTop, color: 'danger', bg: '#ffe4e6' },
]

const orders = [
  { id: '#1042', user: 'Иван Петров', product: 'Pro Plan', date: '14.03.2026', amount: '₽4,990', status: 'Оплачен' },
  { id: '#1041', user: 'Мария Сидорова', product: 'Basic Plan', date: '14.03.2026', amount: '₽990', status: 'В обработке' },
  { id: '#1040', user: 'Алексей Новиков', product: 'Enterprise', date: '13.03.2026', amount: '₽24,990', status: 'Оплачен' },
  { id: '#1039', user: 'Ольга Козлова', product: 'Pro Plan', date: '13.03.2026', amount: '₽4,990', status: 'Отменён' },
  { id: '#1038', user: 'Дмитрий Волков', product: 'Basic Plan', date: '12.03.2026', amount: '₽990', status: 'Оплачен' },
]

const statusColor = { 'Оплачен': 'success', 'В обработке': 'warning', 'Отменён': 'danger' }

const channels = [
  { name: 'Органика (SEO)', value: 42, color: 'primary' },
  { name: 'Прямые переходы', value: 28, color: 'success' },
  { name: 'Реклама', value: 18, color: 'warning' },
  { name: 'Email', value: 8, color: 'info' },
  { name: 'Соцсети', value: 4, color: 'danger' },
]

export default function DashboardPage() {
  return (
    <CContainer fluid>
      <h4 className="mb-1" style={{ fontWeight: 700 }}>Dashboard</h4>
      <p className="text-medium-emphasis mb-4" style={{ fontSize: '.9rem' }}>Добро пожаловать! Вот сводка за сегодня.</p>

      {/* Stat cards */}
      <CRow className="g-4 mb-4">
        {stats.map((s) => (
          <CCol key={s.title} sm={6} xl={3}>
            <CCard className="h-100 border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
              <CCardBody>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <div className="text-medium-emphasis" style={{ fontSize: '.85rem', marginBottom: '.25rem' }}>{s.title}</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{s.value}</div>
                  </div>
                  <div style={{ background: s.bg, borderRadius: '12px', padding: '.75rem', display: 'flex' }}>
                    <CIcon icon={s.icon} size="xl" style={{ color: `var(--cui-${s.color})` }} />
                  </div>
                </div>
                <CBadge color={s.color} className="me-1">↑ {s.change}</CBadge>
                <span style={{ fontSize: '.8rem', color: '#be123c' }}>vs прошлый месяц</span>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <CRow className="g-4">
        {/* Recent orders table */}
        <CCol lg={8}>
          <CCard className="border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
            <CCardHeader className="bg-transparent border-bottom-0 pt-3 pb-0">
              <strong>Последние заказы</strong>
            </CCardHeader>
            <CCardBody className="pt-2">
              <CTable align="middle" hover responsive style={{ fontSize: '.9rem' }}>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell>Клиент</CTableHeaderCell>
                    <CTableHeaderCell>Продукт</CTableHeaderCell>
                    <CTableHeaderCell>Дата</CTableHeaderCell>
                    <CTableHeaderCell>Сумма</CTableHeaderCell>
                    <CTableHeaderCell>Статус</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {orders.map((o) => (
                    <CTableRow key={o.id}>
                      <CTableDataCell><strong>{o.id}</strong></CTableDataCell>
                      <CTableDataCell>{o.user}</CTableDataCell>
                      <CTableDataCell>{o.product}</CTableDataCell>
                      <CTableDataCell className="text-medium-emphasis">{o.date}</CTableDataCell>
                      <CTableDataCell><strong>{o.amount}</strong></CTableDataCell>
                      <CTableDataCell>
                        <CBadge color={statusColor[o.status]}>{o.status}</CBadge>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Traffic sources */}
        <CCol lg={4}>
          <CCard className="border-0 h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
            <CCardHeader className="bg-transparent border-bottom-0 pt-3 pb-0">
              <strong>Источники трафика</strong>
            </CCardHeader>
            <CCardBody>
              {channels.map((c) => (
                <div key={c.name} className="mb-3">
                  <div className="d-flex justify-content-between mb-1" style={{ fontSize: '.85rem' }}>
                    <span>{c.name}</span>
                    <strong>{c.value}%</strong>
                  </div>
                  <CProgress thin>
                    <CProgressBar color={c.color} value={c.value} />
                  </CProgress>
                </div>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}
