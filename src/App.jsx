import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  // const [id, setId] = useState('');
  const [count, setCount] = useState(0);

  useEffect(function () {
    getAdvice();
  }, []);

  // async function getAdvice() {
  //   const res = await fetch('https://api.adviceslip.com/advice');
  //   const data = await res.json();
  //   setAdvice(data.slip.advice);
  //   setId(data.slip.id);
  //   setCount(count => count + 1);
  //   console.log(data.slip.advice);
  // }
  async function getAdvice() {
    const res = await fetch('https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/random');
    const data = await res.json();
    setAdvice(data[0].q);
    // setId(count + 1);
    setCount(count => count + 1);
    // console.log(data.slip.advice);
  }

  return (
    <>
      <AppNav />
      <Main advice={advice} getAdvice={getAdvice} count={count} />
      <Footer />
    </>
  );
}

function AppNav() {
  return (
    <nav className="navbar">
      <img width="100px" src="/wisewords.png" alt="wisewords logo" />
      <h1>WiseWords</h1>
    </nav>
  );
}

function Main({ advice, getAdvice, count }) {
  return (
    <div className="wrapper">
      <main className="main-container">
        <h3 className="advice-heading">Advice</h3>
        <p className="advice">
          <strong>{advice}</strong>
        </p>
        <img src="/pattern-divider.svg" alt="pattern divider image" />
        <p className="advice-count">You have viewed {count} pieces of advice.</p>
      </main>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <h4>Developed by Ashish Raj ❣️</h4>
    </footer>
  );
}

export default App;
