import './App.css'
import {Hero,Create,Menu,Comments,ChooseUs} from './sections'
import Nav from './components/Nav'
import HiddenNavbar from './components/HiddenNavbar'
import { Provider } from './context/MainContext'
function App() {


  return (
    <Provider>
    <main className='relative'>
      <HiddenNavbar />  
      <Nav />
      <section>
        <Hero />
      </section>
      <section className='w-full h-screen' id='create'>
        <Create />
      </section>
      <section className='pt-48 lg:py-[350px]  w-full'>
        <Menu />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section className='py-24'>
        <Comments />
      </section>
    </main>
    </Provider>
  )
}

export default App
