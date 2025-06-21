
import './App.css'
import { AppLayout } from './page/appLayout/appLayout'
import { BrowserRouter } from "react-router-dom";
import '../src/i18n/i18n' // Just import it


function App() {
  return (

    <>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>

  )
}

export default App
