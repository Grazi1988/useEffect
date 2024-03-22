import React, { useState, useEffect } from "react"
import Amazon from "./assets/amazon.png"
import Sirio from "./assets/sirio.png"
import Vnw from "./assets/vnw.png"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
`

const Informacao = styled.div`
  border: solid red;
  display: flex;
  justify-content: space-around;
  align-items:center;
`

const Patrocinadores = styled.div`
  display: flex;
  justify-content: space-around;
  align-items:center;
  border: solid green;
`

const Img = styled.img`
  width: 40%;
`

function App() {

  const [marca, setMarca] = useState(Vnw)

  useEffect(() => {

    if (marca === Vnw) {
      document.querySelector("div").style.backgroundColor = "#F8BF15"
    }

    else if (marca === Sirio) {
      document.querySelector("div").style.backgroundColor = "#FF6347"
    }

    else if (marca === Amazon) {
      document.querySelector("div").style.backgroundColor = "#FF0000"
    }

    else {
      document.querySelector("div").style.backgroundColor = "#FF0000"
    }

  })


  return (
    <section>
      <GlobalStyle />

      <Informacao>
        <Img src={marca} alt="" />
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'</h2>
      </Informacao>

      <Patrocinadores>
        <img onClick={() => { setMarca(Amazon) }} src={Amazon} alt="" />
        <img onClick={() => { setMarca(Vnw) }} src={Vnw} alt="" />
        <img onClick={() => { setMarca(Sirio) }} src={Sirio} alt="" />
      </Patrocinadores>

    </section>
  )

}

export default App