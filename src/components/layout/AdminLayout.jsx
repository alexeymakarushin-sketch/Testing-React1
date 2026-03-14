import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler,
  CNavItem, CNavTitle,
  CHeader, CHeaderNav, CHeaderToggler, CHeaderBrand,
  CContainer, CDropdown, CDropdownToggle, CDropdownMenu,
  CDropdownItem, CDropdownDivider, CAvatar, CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer, cilPeople, cilSettings, cilBell,
  cilAccountLogout, cilUser, cilMenu, cilHome,
  cilEnvelopeOpen, cilChart,
} from '@coreui/icons'

export default function AdminLayout() {
  const [sidebarShow, setSidebarShow] = useState(true)
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#e6edea' }}>
      {/* Sidebar */}
      <CSidebar
        position="fixed"
        visible={sidebarShow}
        onVisibleChange={setSidebarShow}
        style={{ zIndex: 1030 }}
      >
        <CSidebarBrand
          style={{ background: 'var(--cui-sidebar-brand-bg, #2563eb)', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          ⚡ MyBrand Admin
        </CSidebarBrand>

        <CSidebarNav>
          <CNavTitle>Главное</CNavTitle>
          <CNavItem>
            <NavLink to="/admin" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
              Dashboard
            </NavLink>
          </CNavItem>

          <CNavTitle>Управление</CNavTitle>
          <CNavItem>
            <NavLink to="/admin/users" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <CIcon icon={cilPeople} customClassName="nav-icon" />
              Пользователи
              <CBadge color="primary" className="ms-auto">12</CBadge>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/admin/analytics" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <CIcon icon={cilChart} customClassName="nav-icon" />
              Аналитика
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/admin/messages" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />
              Сообщения
              <CBadge color="danger" className="ms-auto">3</CBadge>
            </NavLink>
          </CNavItem>

          <CNavTitle>Настройки</CNavTitle>
          <CNavItem>
            <NavLink to="/admin/settings" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <CIcon icon={cilSettings} customClassName="nav-icon" />
              Настройки
            </NavLink>
          </CNavItem>
        </CSidebarNav>

        <CSidebarToggler onClick={() => setSidebarShow(!sidebarShow)} />
      </CSidebar>

      {/* Main content area */}
      <div style={{ flex: 1, marginLeft: sidebarShow ? '256px' : '0', transition: 'margin .15s' }}>
        {/* Header */}
        <CHeader position="sticky" style={{ top: 0, zIndex: 1020 }}>
          <CContainer fluid>
            <CHeaderToggler onClick={() => setSidebarShow(!sidebarShow)}>
              <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>
            <CHeaderBrand className="d-md-none">⚡ Admin</CHeaderBrand>
            <CHeaderNav className="ms-auto gap-2">
              {/* Notifications */}
              <CDropdown variant="nav-item">
                <CDropdownToggle caret={false}>
                  <div style={{ position: 'relative', cursor: 'pointer', padding: '0 .5rem' }}>
                    <CIcon icon={cilBell} size="lg" />
                    <CBadge color="danger" shape="rounded-pill" style={{ position: 'absolute', top: 0, right: 0, fontSize: '.6rem' }}>5</CBadge>
                  </div>
                </CDropdownToggle>
                <CDropdownMenu style={{ minWidth: '280px' }}>
                  <CDropdownItem header>Уведомления</CDropdownItem>
                  <CDropdownItem>📋 Новый заказ #1042</CDropdownItem>
                  <CDropdownItem>👤 Новый пользователь зарегистрирован</CDropdownItem>
                  <CDropdownItem>⚠️ Сервер: 85% загрузка CPU</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem className="text-center text-primary">Все уведомления</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>

              {/* User menu */}
              <CDropdown variant="nav-item">
                <CDropdownToggle caret={false}>
                  <CAvatar color="primary" textColor="white" size="md" style={{ cursor: 'pointer' }}>
                    АД
                  </CAvatar>
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem header>Администратор</CDropdownItem>
                  <CDropdownItem><CIcon icon={cilUser} className="me-2" />Профиль</CDropdownItem>
                  <CDropdownItem><CIcon icon={cilSettings} className="me-2" />Настройки</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem onClick={() => navigate('/')}>
                    <CIcon icon={cilHome} className="me-2" />На сайт
                  </CDropdownItem>
                  <CDropdownItem className="text-danger">
                    <CIcon icon={cilAccountLogout} className="me-2" />Выйти
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CHeaderNav>
          </CContainer>
        </CHeader>

        {/* Page content */}
        <div style={{ padding: '1.5rem' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
