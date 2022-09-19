import './scss/app.scss';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';

const App =()=> {
  return (
    <main>
      <Header/>
      <ItemListContainer greeting="itemListContainer"/>
    </main>
  )
}

export default App;
