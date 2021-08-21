import { useState, useEffect } from 'react';
import axios from 'axios';

const Cocktails = (url) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(url)
    .then((res) =>{
        setData(res.data)
    })
  }, [url])

  return data;
}
 
export default Cocktails;