// create object
const car ={
    color: 'red',
    weelCount: 4,
    model: 'honda',
    drive: function (){
        console.log("drive a car ...")
    }
}

console.log(car.color);

car.drive()

const friends =['kamal' , 'Tharusha' , 'Dasun' , 'Thimira']

console.log(friends[2]);

//push
// friends.push('thushan');
// console.log(friends)

// pop
// const fre = friends.pop()
// console.log(fre)
// console.log(friends)

// shift
// const fre = friends.shift()
// console.log(fre)
// console.log(friends)


// unshift
friends.unshift('thushan')
console.log(friends)