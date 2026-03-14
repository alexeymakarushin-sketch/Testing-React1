import {
  CContainer, CCard, CCardBody, CCardHeader,
  CRow, CCol, CTable, CTableHead, CTableBody, CTableRow,
  CTableHeaderCell, CTableDataCell, CBadge, CProgress, CProgressBar,
} from '@coreui/react'

const monthlyData = [
  { month: 'Окт', visits: 8400, orders: 210, revenue: 945000 },
  { month: 'Ноя', visits: 9200, orders: 245, revenue: 1102500 },
  { month: 'Дек', visits: 11500, orders: 320, revenue: 1440000 },
  { month: 'Янв', visits: 7800, orders: 198, revenue: 891000 },
  { month: 'Фев', visits: 10200, orders: 278, revenue: 1251000 },
  { month: 'Мар', visits: 12800, orders: 347, revenue: 1561500 },
]

const topPages = [
  { page: '/', title: 'Главная', visits: 45200, bounce: '42%', time: '2:34' },
  { page: '/about', title: 'О нас', visits: 12800, bounce: '35%', time: '3:12' },
  { page: '/contact', title: 'Контакты', visits: 8900, bounce: '28%', time: '4:05' },
  { page: '/pricing', title: 'Тарифы', visits: 7600, bounce: '31%', time: '3:48' },
  { page: '/blog', title: 'Блог', visits: 5400, bounce: '55%', time: '1:52' },
]

const maxVisits = Math.max(...monthlyData.map(d => d.visits))

export default function AnalyticsPage() {
  return (
    <CContainer fluid>
      <h4 className="mb-1" style={{ fontWeight: 700 }}>Аналитика</h4>
      <p className="text-medium-emphasis mb-4" style={{ fontSize: '.9rem' }}>Статистика за последние 6 месяцев</p>

      {/* Summary cards */}
      <CRow className="g-4 mb-4">
        {[
          { label: 'Всего посещений', value: '59,900', sub: '+18% к прошлому году' },
          { label: 'Уникальные посетители', value: '34,120', sub: '+22% к прошлому году' },
          { label: 'Конверсия', value: '4.6%', sub: '+0.8% к прошлому году' },
          { label: 'Ср. чек', value: '₽4,500', sub: '+5% к прошлому году' },
        ].map((c) => (
          <CCol key={c.label} sm={6} xl={3}>
            <CCard className="border-0 h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
              <CCardBody>
                <div style={{ fontSize: '.85rem', color: '#be123c', marginBottom: '.25rem' }}>{c.label}</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '.25rem', color: '#7f1d1d' }}>{c.value}</div>
                <small style={{ color: '#dc2626' }}>↑ {c.sub}</small>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <CRow className="g-4">
        {/* Bar chart (pure CSS) */}
        <CCol lg={7}>
          <CCard className="border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
            <CCardHeader className="bg-transparent border-bottom-0 pt-3">
              <strong>Посещения по месяцам</strong>
            </CCardHeader>
            <CCardBody>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '180px', padding: '0 8px' }}>
                {monthlyData.map((d) => (
                  <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '.75rem', color: '#be123c' }}>{(d.visits / 1000).toFixed(1)}k</span>
                    <div
                      style={{
                        width: '100%',
                        height: `${(d.visits / maxVisits) * 140}px`,
                        background: 'linear-gradient(180deg, #9f1239, #f43f5e)',
                        borderRadius: '4px 4px 0 0',
                        transition: 'height .3s',
                      }}
                    />
                    <span style={{ fontSize: '.8rem', fontWeight: 600 }}>{d.month}</span>
                  </div>
                ))}
              </div>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Monthly table */}
        <CCol lg={5}>
          <CCard className="border-0 h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
            <CCardHeader className="bg-transparent border-bottom-0 pt-3">
              <strong>Детальная статистика</strong>
            </CCardHeader>
            <CCardBody className="pt-0">
              <CTable align="middle" responsive style={{ fontSize: '.85rem' }}>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Месяц</CTableHeaderCell>
                    <CTableHeaderCell>Визиты</CTableHeaderCell>
                    <CTableHeaderCell>Заказы</CTableHeaderCell>
                    <CTableHeaderCell>Выручка</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {monthlyData.map((d) => (
                    <CTableRow key={d.month}>
                      <CTableDataCell><strong>{d.month}</strong></CTableDataCell>
                      <CTableDataCell>{d.visits.toLocaleString('ru')}</CTableDataCell>
                      <CTableDataCell>{d.orders}</CTableDataCell>
                      <CTableDataCell>₽{(d.revenue / 1000).toFixed(0)}k</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Top pages */}
        <CCol lg={12}>
          <CCard className="border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
            <CCardHeader className="bg-transparent border-bottom-0 pt-3">
              <strong>Топ страниц</strong>
            </CCardHeader>
            <CCardBody>
              {topPages.map((p) => (
                <div key={p.page} className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div>
                      <strong style={{ fontSize: '.9rem' }}>{p.title}</strong>
                      <span style={{ fontSize: '.8rem', color: '#be123c', marginLeft: '.5rem' }}>{p.page}</span>
                    </div>
                    <div className="d-flex gap-3" style={{ fontSize: '.8rem', color: '#be123c' }}>
                      <span>Отказы: {p.bounce}</span>
                      <span>Время: {p.time}</span>
                      <strong style={{ color: '#7f1d1d' }}>{p.visits.toLocaleString('ru')}</strong>
                    </div>
                  </div>
                  <CProgress thin>
                    <CProgressBar value={Math.round(p.visits / topPages[0].visits * 100)} />
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
