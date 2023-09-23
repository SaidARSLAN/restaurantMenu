import './App.css'
import {Hero,Create,Menu,Comments,ChooseUs} from './sections'
import Nav from './components/Nav'
import HiddenNavbar from './components/HiddenNavbar'
function App() {


  return (
    <main className='relative'>
      <HiddenNavbar />  
      <Nav />
      <section>
        <Hero />
      </section>
      <section className='w-full h-screen'>
        <Create />
      </section>
      <section className='py-96'>
        <Menu />
      </section>
      <section className='py-24'>
        <ChooseUs />
      </section>
      <section className='py-24'>
        <Comments />
      </section>
    </main>
  )
}

export default App
