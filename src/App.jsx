import './App.css'
import { Title,FilterNavbar,ProductList,Product,BuyBox,Footer } from './components'
function App() {

  return (
    <main className='relative'>
      <section className='py-12 px-4'>
        <Title />
      </section>
      <section className='py-12 px-4'>
        <FilterNavbar />
      </section>
      <section className='py-12 px-4'>
        <ProductList />
      </section>
      <section className='py-12 px-4'>
        <Footer />
      </section>
    </main>
  )
}

export default App
