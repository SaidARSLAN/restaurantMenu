import './App.css'
import {Hero,Create,Menu,Comments,ChooseUs} from './sections'
import Nav from './components/Nav'
import HiddenNavbar from './components/HiddenNavbar'
import { Provider } from './context/MainContext'
import Footer from './components/Footer'
function App() {


  return (
    <Provider>
    <main className='relative overflow-x-hidden'>
      <HiddenNavbar />  
      <Nav />
      <section>
        <Hero />
      </section>
      <section className='w-full h-screen' id='create'>
        <Create />
      </section>
      <section className='pt-48 pb-4 lg:pt-[350px] lg:pb-20  w-full'>
        <Menu />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section className='lg:py-24'>
        <Comments />
      </section>
      <Footer />
    </main>
    </Provider>
  )
}

export default App
