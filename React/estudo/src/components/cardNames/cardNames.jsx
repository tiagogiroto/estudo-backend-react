import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ApiCon from '../ApiCon';


const CardNames = () => {

  const [api, getApi] = useState([]);

  useEffect(() => {
    ApiCon
        .get('/api/')
        .then((response) => getApi(response.data.new_lesson))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        })
}, [])
    
console.log(api)

  return (
    <Card>
       <p>a</p>
    </Card>
    
  )
}

export default CardNames;