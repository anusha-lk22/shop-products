import {React, useState, useEffect} from 'react';

const Card = () => {
const [fake, setFake] = useState([]);
console.log(fake)
useEffect(() => {
    fetchData();
}, [])

const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')

    const jsonData = await response.json();
  
    setFake(jsonData)
}
//fetchData();
    return (

<>
    <div className="flex flex-row flex-wrap gap-3">
{fake.map((item)=>{
return(
    <>
    <div className="bg-white">

          <div className="m-5 w-40 p-4 box-border border-1 shadow-lg text-center" key={item.id}>
          
         <img src={item.image} />

<div className='mt-10 hover:text-red-400'>{item.category}</div>
<div className='text-blue-500'>{item.title}</div>
<div>rate: {item.rating.rate} count: {item.rating.count}</div>
<div>${item.price}</div>

</div>
              </div>
    </>
)
})}
</div>
</>
 


          
          
      );
}
export default Card;