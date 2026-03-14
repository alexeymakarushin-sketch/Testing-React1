import { useState } from 'react'
import {
  CContainer, CCard, CCardBody, CCardHeader,
  CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell,
  CBadge, CButton, CFormInput, CInputGroup, CInputGroupText,
  CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter,
  CForm, CFormLabel, CRow, CCol, CFormSelect, CAvatar,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch, cilPlus, cilPencil, cilTrash, cilFilter } from '@coreui/icons'

const initUsers = [
  { id: 1, name: 'Иван Петров', email: 'ivan@example.com', role: 'admin', status: 'active', plan: 'Enterprise', joined: '01.01.2026' },
  { id: 2, name: 'Мария Сидорова', email: 'maria@example.com', role: 'user', status: 'active', plan: 'Pro', joined: '15.01.2026' },
  { id: 3, name: 'Алексей Новиков', email: 'alex@example.com', role: 'editor', status: 'inactive', plan: 'Basic', joined: '20.01.2026' },
  { id: 4, name: 'Ольга Козлова', email: 'olga@example.com', role: 'user', status: 'active', plan: 'Pro', joined: '05.02.2026' },
  { id: 5, name: 'Дмитрий Волков', email: 'dima@example.com', role: 'user', status: 'active', plan: 'Basic', joined: '10.02.2026' },
  { id: 6, name: 'Анна Соколова', email: 'anna@example.com', role: 'editor', status: 'active', plan: 'Pro', joined: '14.02.2026' },
  { id: 7, name: 'Сергей Морозов', email: 'sergey@example.com', role: 'user', status: 'blocked', plan: 'Basic', joined: '28.02.2026' },
  { id: 8, name: 'Наталья Лебедева', email: 'natasha@example.com', role: 'user', status: 'active', plan: 'Enterprise', joined: '01.03.2026' },
]

const emptyForm = { name: '', email: '', role: 'user', status: 'active', plan: 'Basic' }
const statusColor = { active: 'success', inactive: 'secondary', blocked: 'danger' }
const statusLabel = { active: 'Активен', inactive: 'Неактивен', blocked: 'Заблокирован' }
const roleColor = { admin: 'danger', editor: 'warning', user: 'info' }
const roleLabel = { admin: 'Администратор', editor: 'Редактор', user: 'Пользователь' }

function avatarLetters(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}
const colors = ['primary', 'success', 'warning', 'info', 'danger']

export default function UsersPage() {
  const [users, setUsers] = useState(initUsers)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState(null)
  const [deleteId, setDeleteId] = useState(null)

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  const openAdd = () => { setForm(emptyForm); setEditId(null); setModal('form') }
  const openEdit = (u) => { setForm({ name: u.name, email: u.email, role: u.role, status: u.status, plan: u.plan }); setEditId(u.id); setModal('form') }

  const handleSave = () => {
    if (!form.name || !form.email) return
    if (editId) {
      setUsers(users.map(u => u.id === editId ? { ...u, ...form } : u))
    } else {
      setUsers([...users, { ...form, id: Date.now(), joined: new Date().toLocaleDateString('ru-RU') }])
    }
    setModal(false)
  }

  const handleDelete = () => {
    setUsers(users.filter(u => u.id !== deleteId))
    setModal(false)
  }

  return (
    <CContainer fluid>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="mb-0" style={{ fontWeight: 700 }}>Пользователи</h4>
          <small className="text-medium-emphasis">Управление учётными записями</small>
        </div>
        <CButton color="primary" onClick={openAdd}>
          <CIcon icon={cilPlus} className="me-2" />Добавить
        </CButton>
      </div>

      <CCard className="border-0" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)' }}>
        <CCardHeader className="bg-transparent border-bottom py-3">
          <CRow className="align-items-center g-2">
            <CCol md={5}>
              <CInputGroup>
                <CInputGroupText><CIcon icon={cilSearch} /></CInputGroupText>
                <CFormInput
                  placeholder="Поиск по имени или email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CInputGroup>
            </CCol>
            <CCol className="ms-auto text-end">
              <small className="text-medium-emphasis">Показано: {filtered.length} из {users.length}</small>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody className="p-0">
          <CTable align="middle" hover responsive className="mb-0" style={{ fontSize: '.9rem' }}>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell>Пользователь</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableHeaderCell>Роль</CTableHeaderCell>
                <CTableHeaderCell>Тариф</CTableHeaderCell>
                <CTableHeaderCell>Статус</CTableHeaderCell>
                <CTableHeaderCell>Дата</CTableHeaderCell>
                <CTableHeaderCell className="text-end">Действия</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filtered.map((u, i) => (
                <CTableRow key={u.id}>
                  <CTableDataCell>
                    <div className="d-flex align-items-center gap-2">
                      <CAvatar color={colors[i % colors.length]} textColor="white" size="sm">
                        {avatarLetters(u.name)}
                      </CAvatar>
                      <strong>{u.name}</strong>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-medium-emphasis">{u.email}</CTableDataCell>
                  <CTableDataCell><CBadge color={roleColor[u.role]}>{roleLabel[u.role]}</CBadge></CTableDataCell>
                  <CTableDataCell>{u.plan}</CTableDataCell>
                  <CTableDataCell><CBadge color={statusColor[u.status]}>{statusLabel[u.status]}</CBadge></CTableDataCell>
                  <CTableDataCell className="text-medium-emphasis">{u.joined}</CTableDataCell>
                  <CTableDataCell className="text-end">
                    <CButton size="sm" color="light" className="me-1" onClick={() => openEdit(u)}>
                      <CIcon icon={cilPencil} />
                    </CButton>
                    <CButton size="sm" color="danger" variant="ghost" onClick={() => { setDeleteId(u.id); setModal('delete') }}>
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Add/Edit Modal */}
      <CModal visible={modal === 'form'} onClose={() => setModal(false)} size="lg">
        <CModalHeader>
          <CModalTitle>{editId ? 'Редактировать пользователя' : 'Добавить пользователя'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="g-3">
              <CCol md={6}>
                <CFormLabel>Имя *</CFormLabel>
                <CFormInput placeholder="Иван Иванов" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </CCol>
              <CCol md={6}>
                <CFormLabel>Email *</CFormLabel>
                <CFormInput type="email" placeholder="user@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </CCol>
              <CCol md={4}>
                <CFormLabel>Роль</CFormLabel>
                <CFormSelect value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                  <option value="user">Пользователь</option>
                  <option value="editor">Редактор</option>
                  <option value="admin">Администратор</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel>Тариф</CFormLabel>
                <CFormSelect value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })}>
                  <option value="Basic">Basic</option>
                  <option value="Pro">Pro</option>
                  <option value="Enterprise">Enterprise</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel>Статус</CFormLabel>
                <CFormSelect value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                  <option value="active">Активен</option>
                  <option value="inactive">Неактивен</option>
                  <option value="blocked">Заблокирован</option>
                </CFormSelect>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={() => setModal(false)}>Отмена</CButton>
          <CButton color="primary" onClick={handleSave}>
            {editId ? 'Сохранить' : 'Добавить'}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Delete confirm */}
      <CModal visible={modal === 'delete'} onClose={() => setModal(false)} size="sm">
        <CModalHeader><CModalTitle>Удалить пользователя?</CModalTitle></CModalHeader>
        <CModalBody>Это действие нельзя отменить.</CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={() => setModal(false)}>Отмена</CButton>
          <CButton color="danger" onClick={handleDelete}>Удалить</CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  )
}
