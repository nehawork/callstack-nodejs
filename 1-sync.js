const x = 1;
const y = x + 2;

console.log('Sum is '+y);



// Call stack

// log('Sum is 3') -> get removed after execution
// main()

// End of stack
// empty


// ------------------------------------------------------------------------------ //

const listLocations = (locations) => {
    locations.forEach(location => {
        console.log(location);
    });
}

const myLocations = ['Rajkot', 'Baroda'];

listLocations(myLocations);


// Call stack

// console.log('Baroda'); -> pop 3
// anonymous('Baroda) -> pop 4
// console.log('Rajkot'); -> pop 1
// anonymous('Rajkot) -> pop 2
// forEach(...) -> pop 5
// listLocations([...]) -> pop 6
// main() -> pop 7