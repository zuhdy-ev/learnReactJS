import './App.css'
import Article from './components/Article'

function App() {
  return (
    <>
      <Article name="Ahmad" status="UI/UX Designer" jobdesc={["Design UI", "Design UX", "Meeting with client"]}/>
      <br />
      <hr />
      <br />
      <Article name="Rudi" status="Developer" jobdesc={["Ngoding", "Ngoding", "Ngoding"]}/>
    </>
  )
}

export default App
