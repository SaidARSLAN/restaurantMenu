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
      <section className='pt-48 pb-4 lg:pt-[350px] lg:pb-20  w-full'>
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
