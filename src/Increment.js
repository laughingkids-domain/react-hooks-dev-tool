import React, {useState , useEffect} from 'react';

function Increment(props) {
  const {title} = props;
  /* state hooks */
  const [count, setCount] = useState(0);

  /* effect hooks */
  useEffect(() => {
    document.title = `You clicked ${count} times - CRE Tech Catchup`;
  })

  /* the render function*/
  return (
    <>
      <h1>{title || `Undefined title`}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default Increment;