//change the function to return the sum if a >b, or the difference otherwise


const sum = (a,b) => {

    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        return"Bad Input"
    }

    if (a<b){
        return b-a
    }

    return a+b;
}

//write a function that raise a number to the third power
//Math.pow(a,10) || a ** 10

export default sum;