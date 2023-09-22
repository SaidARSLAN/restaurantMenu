import './App.css'
import { Title,FilterNavbar,ProductList,Product,BuyBox,Footer } from './components'
import InfoModal from './components/InfoModal'
import { Provider } from './context/MainContext'
function App() {

  return (
    <Provider>
    <main className='relative bg-white'>
      <InfoModal />
      <section className='pt-12 pb-4 px-4'>
        <Title />
      </section>
      <section className='flex flex-col lg:flex-row'>
      <section className='py-4 px-4'>
        <FilterNavbar />
      </section>
      <section className='px-4'>
        <ProductList />
      </section>
      </section>
      <section className='py-12 px-4'>
        <Footer />
      </section>
    </main>
    </Provider>
  )
}

export default App
