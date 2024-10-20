import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import LoginPage from './LoginPage'
import Footer from './Footer'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="App">
   <Header />
      <div className="MainContent">
        <Sidebar />
        
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard