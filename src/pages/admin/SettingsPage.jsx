import { useState } from 'react'
import {
  CContainer, CCard, CCardBody, CCardHeader,
  CNav, CNavItem, CNavLink, CTabContent, CTabPane,
  CForm, CFormLabel, CFormInput, CFormTextarea, CFormSelect,
  CFormCheck, CButton, CRow, CCol, CAlert, CAvatar, CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilLockLocked, cilBell, cilShieldAlt } from '@coreui/icons'

export default function SettingsPage() {
  const [tab, setTab] = useState('profile')
  const [saved, setSaved] = useState(null)

  const [profile, setProfile] = useState({
    firstName: 'Иван', lastName: 'Администратор',
    email: 'admin@mybrand.ru', phone: '+7 (495) 123-45-67',
    company: 'MyBrand', position: 'Системный администратор',
    bio: '',
  })

  const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' })
  const [notifications, setNotifications] = useState({
    emailNew: true, emailOrders: true, emailWeekly: false,
    browserAlerts: true, smsOrders: false,
  })

  const save = (section) => {
    setSaved(section)
    setTimeout(() => setSaved(null), 3000)
  }

  const handlePasswordSave = () => {
    if (!passwords.current || !passwords.newPass) return
    if (passwords.newPass !== passwords.confirm) { setSaved('error'); setTimeout(() => setSaved(null), 3000); return }
    save('password')
    setPasswords({ current: '', newPass: '', confirm: '' })
  }

  return (
    <CContainer fluid style={{ maxWidth: '900px' }}>
      <h4 className="mb-4" style={{ fontWeight: 700 }}>Настройки</h4>

      <CCard className="border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
        <CCardBody className="p-0">
          <CNav variant="underline" className="px-4 pt-3 border-bottom">
            {[
              { key: 'profile', icon: cilUser, label: 'Профиль' },
              { key: 'password', icon: cilLockLocked, label: 'Пароль' },
              { key: 'notifications', icon: cilBell, label: 'Уведомления' },
              { key: 'security', icon: cilShieldAlt, label: 'Безопасность' },
            ].map((t) => (
              <CNavItem key={t.key}>
                <CNavLink
                  active={tab === t.key}
                  onClick={() => setTab(t.key)}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.4rem' }}
                >
                  <CIcon icon={t.icon} />
                  {t.label}
                </CNavLink>
              </CNavItem>
            ))}
          </CNav>

          <div className="p-4">
            {saved === 'profile' && <CAlert color="success" className="mb-4">✅ Профиль сохранён</CAlert>}
            {saved === 'password' && <CAlert color="success" className="mb-4">✅ Пароль изменён</CAlert>}
            {saved === 'notifications' && <CAlert color="success" className="mb-4">✅ Настройки уведомлений сохранены</CAlert>}
            {saved === 'error' && <CAlert color="danger" className="mb-4">⚠️ Пароли не совпадают</CAlert>}

            {/* Profile tab */}
            {tab === 'profile' && (
              <CForm>
                <div className="d-flex align-items-center gap-4 mb-4 p-3 rounded" style={{ background: '#dceae2' }}>
                  <CAvatar color="primary" textColor="white" size="xl" style={{ fontSize: '1.5rem' }}>ИА</CAvatar>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{profile.firstName} {profile.lastName}</div>
                    <div style={{ color: '#2a8aaa', fontSize: '.9rem' }}>{profile.email}</div>
                    <CBadge color="danger" className="mt-1">Администратор</CBadge>
                  </div>
                  <CButton color="light" size="sm" className="ms-auto">Сменить фото</CButton>
                </div>

                <CRow className="g-3">
                  <CCol md={6}>
                    <CFormLabel>Имя</CFormLabel>
                    <CFormInput value={profile.firstName} onChange={e => setProfile({ ...profile, firstName: e.target.value })} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel>Фамилия</CFormLabel>
                    <CFormInput value={profile.lastName} onChange={e => setProfile({ ...profile, lastName: e.target.value })} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel>Email</CFormLabel>
                    <CFormInput type="email" value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel>Телефон</CFormLabel>
                    <CFormInput value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel>Компания</CFormLabel>
                    <CFormInput value={profile.company} onChange={e => setProfile({ ...profile, company: e.target.value })} />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel>Должность</CFormLabel>
                    <CFormInput value={profile.position} onChange={e => setProfile({ ...profile, position: e.target.value })} />
                  </CCol>
                  <CCol md={12}>
                    <CFormLabel>О себе</CFormLabel>
                    <CFormTextarea rows={3} placeholder="Краткая информация..." value={profile.bio} onChange={e => setProfile({ ...profile, bio: e.target.value })} />
                  </CCol>
                </CRow>
                <div className="mt-4 d-flex gap-2">
                  <CButton color="primary" onClick={() => save('profile')}>Сохранить изменения</CButton>
                  <CButton color="light">Отмена</CButton>
                </div>
              </CForm>
            )}

            {/* Password tab */}
            {tab === 'password' && (
              <CForm style={{ maxWidth: '480px' }}>
                <div className="mb-4">
                  <h6 style={{ fontWeight: 700 }}>Изменить пароль</h6>
                  <p style={{ fontSize: '.9rem', color: '#2a8aaa' }}>Используйте надёжный пароль длиной не менее 8 символов.</p>
                </div>
                <CRow className="g-3">
                  <CCol md={12}>
                    <CFormLabel>Текущий пароль *</CFormLabel>
                    <CFormInput type="password" value={passwords.current} onChange={e => setPasswords({ ...passwords, current: e.target.value })} />
                  </CCol>
                  <CCol md={12}>
                    <CFormLabel>Новый пароль *</CFormLabel>
                    <CFormInput type="password" value={passwords.newPass} onChange={e => setPasswords({ ...passwords, newPass: e.target.value })} />
                  </CCol>
                  <CCol md={12}>
                    <CFormLabel>Подтверждение *</CFormLabel>
                    <CFormInput type="password" value={passwords.confirm} onChange={e => setPasswords({ ...passwords, confirm: e.target.value })} />
                  </CCol>
                </CRow>
                <div className="mt-4">
                  <CButton color="primary" onClick={handlePasswordSave}>Изменить пароль</CButton>
                </div>
              </CForm>
            )}

            {/* Notifications tab */}
            {tab === 'notifications' && (
              <CForm>
                <div className="mb-4">
                  <h6 style={{ fontWeight: 700 }}>Email уведомления</h6>
                </div>
                {[
                  { key: 'emailNew', label: 'Новые пользователи', desc: 'Получать письмо при регистрации нового пользователя' },
                  { key: 'emailOrders', label: 'Новые заказы', desc: 'Уведомление о каждом новом заказе' },
                  { key: 'emailWeekly', label: 'Еженедельный отчёт', desc: 'Сводный отчёт по пятницам' },
                ].map((n) => (
                  <div key={n.key} className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                    <div>
                      <div style={{ fontWeight: 600 }}>{n.label}</div>
                      <div style={{ fontSize: '.85rem', color: '#2a8aaa' }}>{n.desc}</div>
                    </div>
                    <CFormCheck
                      type="switch"
                      checked={notifications[n.key]}
                      onChange={e => setNotifications({ ...notifications, [n.key]: e.target.checked })}
                    />
                  </div>
                ))}
                <div className="mt-4 mb-3">
                  <h6 style={{ fontWeight: 700 }}>Другие уведомления</h6>
                </div>
                {[
                  { key: 'browserAlerts', label: 'Браузерные уведомления', desc: 'Push-уведомления в браузере' },
                  { key: 'smsOrders', label: 'SMS при заказах', desc: 'SMS-уведомление при новом заказе' },
                ].map((n) => (
                  <div key={n.key} className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                    <div>
                      <div style={{ fontWeight: 600 }}>{n.label}</div>
                      <div style={{ fontSize: '.85rem', color: '#2a8aaa' }}>{n.desc}</div>
                    </div>
                    <CFormCheck
                      type="switch"
                      checked={notifications[n.key]}
                      onChange={e => setNotifications({ ...notifications, [n.key]: e.target.checked })}
                    />
                  </div>
                ))}
                <div className="mt-4">
                  <CButton color="primary" onClick={() => save('notifications')}>Сохранить</CButton>
                </div>
              </CForm>
            )}

            {/* Security tab */}
            {tab === 'security' && (
              <div>
                <div className="mb-4">
                  <h6 style={{ fontWeight: 700 }}>Двухфакторная аутентификация</h6>
                  <p style={{ fontSize: '.9rem', color: '#2a8aaa' }}>Повысьте безопасность вашего аккаунта.</p>
                  <div className="d-flex align-items-center gap-3 p-3 rounded border">
                    <span style={{ fontSize: '2rem' }}>🔐</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>Authenticator App</div>
                      <div style={{ fontSize: '.85rem', color: '#2a8aaa' }}>Используйте Google Authenticator или Authy</div>
                    </div>
                    <CBadge color="secondary">Не настроено</CBadge>
                    <CButton size="sm" color="primary">Настроить</CButton>
                  </div>
                </div>
                <div>
                  <h6 style={{ fontWeight: 700, marginBottom: '1rem' }}>Активные сессии</h6>
                  {[
                    { device: 'Chrome на Windows', ip: '192.168.1.1', time: 'Сейчас', current: true },
                    { device: 'Safari на iPhone', ip: '91.122.45.67', time: '2 часа назад', current: false },
                    { device: 'Firefox на macOS', ip: '185.77.22.1', time: 'Вчера', current: false },
                  ].map((s, i) => (
                    <div key={i} className="d-flex align-items-center gap-3 mb-3 p-3 rounded border">
                      <span style={{ fontSize: '1.5rem' }}>💻</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{s.device}</div>
                        <div style={{ fontSize: '.8rem', color: '#2a8aaa' }}>IP: {s.ip} · {s.time}</div>
                      </div>
                      {s.current ? <CBadge color="success">Текущая</CBadge> : <CButton size="sm" color="danger" variant="ghost">Завершить</CButton>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}
