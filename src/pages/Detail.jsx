import { useEffect } from 'react';
import Link from 'react-router-dom';

function Detail() {
  useEffect(() => {
    console.log('detail useEffect');

    return () => {
      console.log('detail useEffect return');
      console.log('detail scrollY', window.scrollY);
    };
  }, []);
  return (
    <div>
      <p>detail</p>
      <Link to="/">go to home</Link>
    </div>
  );
}

export default Detail;
