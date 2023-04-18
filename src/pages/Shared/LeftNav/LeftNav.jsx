import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then((data)=>setCategories(data))
        .catch((error)=>console.log(error))
    },[])
    return (
        <div>
            <h4>ALl Categories</h4>
            <div className='ps-4'>
            {
                categories.map((category)=><p
                key={category.id}
                >
                    <Link 
                    className='text-decoration-none text-dark'
                    to={`/category/${category.id}`}
                    >{category.name}</Link>
                </p> )
            }
            </div>
        </div>
    );
};

export default LeftNav;