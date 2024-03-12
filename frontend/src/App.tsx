

import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'

function App() {


  return (
   <Routes>
    <Route path='/' element={<Layout showHero>
      <HomePage />

    </Layout>} />


   </Routes>
  )
}

export default App
