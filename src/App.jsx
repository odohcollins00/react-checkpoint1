import CardCom from "./components/Card"
import Navigationbar from "./components/navigationbar"
import './App.CSS'

function App() {
  
  return (
    <>
      <Navigationbar />
      <h1>Welcome to my component</h1>
      <div className="grid">
        <CardCom title="home gadgets" imgurl="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg " desc="blue" />
        <CardCom title="home gadgets" imgurl="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg " desc="blue" />
        <CardCom title="home gadgets" imgurl="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg " desc="blue" />
        <CardCom title="home gadgets" imgurl="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg " desc="blue" />
         
       
      </div>

 
    </>
  )
}

export default App
