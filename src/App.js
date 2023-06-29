import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import ironhackMenu from './images/menu-top-xs.png';
import './App.css';


const heading=  <h1> Say hello to <br />ReactJS</h1>;
const introParagraph= <p>You will learn how to use<br/> the most popular frotend library,<br/> and become a super Ninja developer.</p>


function App() {
  return (
    <div className="App">

    <div className="body">
      <img src= {ironhackLogo} className="ironhackLogo" alt= "ironhackLogo"/> <br/>
      <img src= {ironhackMenu} className="ironhackMenu" alt= "ironhackMenu"/> <br/>
      <div className="textContainer">
      {heading}
      {introParagraph}
      </div>
      <button id="awesome"> Awesome!</button>
      </div>
     

      <br/> 
     <div className="footerContainer">
    
    <div className="icons">

    <img src={icon1} alt="icon1"/>
    <h3>Declaritive</h3>
    <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
    </div>
    
    <div className="icons">
    <img src={icon2} alt="icon2"/>
    <h3>Components</h3>
    <p>Build encapsulated <br/> components that <br/> manage their state.</p>
    </div>
    
    <div className="icons">
    <img src={icon3} alt="icon3"/>
    <h3>Single-way</h3>
    <p>A set of immutable <br/> value are passed to <br/> components.</p>
    </div>
    
    <div className="icons">
    <img src={icon4} alt="icon4"/>
    <h3>JSX</h3>
    <p>Statistically-typed, <br/> designed to run on <br/>modern browsers.</p>
    </div>

   </div>
    </div>
  );
}

export default App;
