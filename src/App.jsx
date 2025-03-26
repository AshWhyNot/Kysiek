import './App.css'

function App() {

const komp = 2;
const x = 2, y = 3;
let v1 = komp*(x*x*x)+1-komp*y;
let v2 = 2*x+3*komp-4*(y*y);
let v3 = x**komp-2*x*(y**komp)+100;
let v4 = 3*(y*y)-komp*(x*x)*y-7*y;
let v5 = 2*x*y+komp*x*y;
let v6 = 3*(x*x)+komp*y+2;

  return (
    <>
      <div>
        <p>Równanie = {komp}</p>
      </div>

      <div>
        <li>{komp}x<sup>3</sup>+1-{komp}y={v1}</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>

    </>
  )
}

export default App
