import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <Header whatsappNumber="5515991047579" />
      <Outlet />
      <Footer />
    </>
  )
}
