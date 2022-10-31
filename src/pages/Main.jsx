import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Main() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('main useEffect');

    return () => {
      console.log('main useEffect return');
      console.log('main scrollY', window.scrollY);
    };
  }, []);

  return (
    <div>
      <p>main</p>
      <Link to="/detail">go to detail page</Link>
    </div>
  );
}

export default Main;
