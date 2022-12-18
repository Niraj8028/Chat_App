
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {  Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <ChakraProvider>
        <Routes>
          <Route path="/home" element={<Home/>} />             
                       

        </Routes>       
    
    </ChakraProvider>
    </BrowserRouter>
    </div>

  );
}

export default App;
