import { BrowserRouter } from 'react-router';
import './App.css';



import TestCounterComponent from './components/TestCounterComponent';
import NavbarComponent from './components/HeaderFooter/NavbarComponent';
import { CreateProductFormComponent } from './components/Form/CreateProductForm';
import DataTableComponent from './components/DataTable';

function App() {

  return (
    <>
    <BrowserRouter>
    {/* <NavbarComponent/> */}
      {/* <TestCounterComponent/> */}
      {/* <CreateProductFormComponent/> */}
      {/* <DataTableComponent/> */}
    </BrowserRouter>
    </>
  )
}

export default App;
