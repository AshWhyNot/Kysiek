import './App.css'

function App() {

const komp = 10;
const x = 2, y = 3;

let v1 = komp*(x*x*x)+1-komp*y;
let v2 = 2*x+3*komp-4*(y*y);
let v3 = x**komp-2*x*(y**komp)+100;
let v4 = 3*(y*y)-komp*(x*x)*y-7*y;
let v5 = 2*x*y+komp*x*y;
let v6 = 3*(x*x)+komp*y+2;

  return (
    <>
    <div className='app'>
      <div className='center-box'>
        <div className='first-box'>
          <p>Równanie = {komp}</p>
        </div>
      </div>

    <div className='left-boxes'>
      <div className='second-box'>
        {komp} * 1 = {komp * 1}<br />
        {komp} * 2 = {komp * 2}<br />
        {komp} * 3 = {komp * 3}<br />
        {komp} * 4 = {komp * 4}<br />
        {komp} * 5 = {komp * 5}<br />
        {komp} * 6 = {komp * 6}<br />
        {komp} * 7 = {komp * 7}<br />
        {komp} * 8 = {komp * 8}<br />
        {komp} * 9 = {komp * 9}<br />
        {komp} * 10 = {komp * 10}<br />
      </div>

      <div className='third-box'>
        <li>{komp}x<sup>3</sup> + 1 - {komp}y = {v1}</li>
        <li>2x + 3*{komp} - 4y<sup>2</sup> = {v2}</li>
        <li>x<sup>{komp}</sup> - 2xy<sup>{komp}</sup> + 100 = {v3}</li>
        <li>3y<sup>2</sup> - {komp}x<sup>2</sup>y - 7y = {v4}</li>
        <li>2xy + {komp}xy = {v5}</li>
        <li>3x<sup>2</sup> + {komp}y + 2 = {v6}</li>
      </div>
    </div>
    </div>
    </>
  )
}

export default App