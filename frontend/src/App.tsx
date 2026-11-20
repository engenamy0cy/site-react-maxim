import './index.css'
import { Main } from './ui/blocks/main'
import { Button } from './ui/components/Button'
import { HeaderLink } from './ui/components/HeaderLink'
import { MainPage } from './ui/pages/MainPage'
import { AboutPage } from './ui/pages/AboutPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <header style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
        <HeaderLink href="/" text="Главная" />
        <HeaderLink href="/about" text="О нас" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Button label="Кнопка 1" disabled />
        <Button label="Купить кальян" />
        <Main />
      </main>
      <footer></footer>
    </>
  )
}

export default App
