import './App.css';
import ItemDetails from './components/ItemDetails/ItemDetails';
import SubmittedData from './components/SubmittedData/SubmittedData';
import SupplierDetails from './components/SupplierDetails/SupplierDetails';

function App() {
  return (
    <div className='container'>
      <div className='check-container'>
        <div>
          <input type="checkbox" name="inventory" id="item" checked />
          <label htmlFor="item">Item</label>
        </div>
        <div>
          <input type="checkbox" name="inventory" id="supplier" />
          <label htmlFor="supplier">Supplier</label>
        </div>
      </div>
      <ItemDetails />
      <SupplierDetails />
      <SubmittedData />
    </div>
  );
}

export default App;
