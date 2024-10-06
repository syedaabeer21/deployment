import { useState } from "react"
import { useRef } from "react"
import "./App.css"
import Card from "./card"


function App(){
   return(
    <>
      <Card title = 'Card 1' description='abc' />
      <Card title = 'Card 2' description='def' />
    </>
   )

          
}
export default App;



