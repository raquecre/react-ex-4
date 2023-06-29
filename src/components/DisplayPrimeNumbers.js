import { queries } from "@testing-library/react";
import { useState } from "react";
import convert from "convert";


const DisplayPrimeNumbers = (props) => {
    const { query } = props;
    const queryNumber = parseInt({ query })
    console.log(queryNumber)

    const [result, setResult] = useState(0);

    function isPrime(num) {

        if (num == 1 || num == 0) return false;
        if (num == 2 || num == 3)
            return true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    function generateNumbers(numberCreate) {
        let inums = 1;
        let i = 0
        let primeNumbers = [];
        while (i < numberCreate) {

            if (isPrime(inums)) {
                primeNumbers.push(inums)
            }
            inums++;
            i++;
        }
        return primeNumbers;

    }
    console.log(generateNumbers({ query }));
    return (
        <div className="DisplayPrimeNumbers">
            <h2>Display Prime Numbers</h2>
            <p>Prime numbers until limit = <strong>{query} </strong> </p>
            <p> {result} </p>
        </div>
    )

}
export default DisplayPrimeNumbers