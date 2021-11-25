import React, { useState, useEffect } from 'react';
import styles from './main.module.css';
import Button from 'react-bootstrap/Button';

function Example() {
  const [count, setCount] = useState(0);

  //componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    //count % 2 == 0 && console.log({count} , 'update');
    //document.title = `You are load componets’`;    
    // console.log('you are load component')
    return () => {
        // console.log('unmount ' , {count});
    };
  }, [count]);

  return (
    <div className={styles.layout}>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}

export default Example;