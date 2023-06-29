import BigInput from './BigInput'
import DisplayPrimeNumbers from './DisplayPrimeNumbers'
import { useState } from 'react'
const Aplication = (props) => {

    const [query, setQuery] = useState();
   
    return (
        <div className='Aplication'>
            <h2>Aplication</h2>
            <BigInput onQuery={setQuery} />
            <DisplayPrimeNumbers query ={query} />
        </div>
    )
}

export default Aplication