// 01 lesson
//Перебирающие методы массивов

var testData = [
    {
        "index": 0,
        "isActive": true,
        "age": 20,
        "name": 'Masha',
        "email": '11@gmail.ru'
    },
    {
        "index": 0,
        "isActive": true,
        "age": 48,
        "name": 'Sasha',
        "email": '22@gmail.ru'
    },
    {
        "index": 0,
        "isActive": true,
        "age": 48,
        "name": 'Lasha'
    }
];

var array = [9, 6, 3, 2, -2, -3, -5];
var newArray = [];
var counter = 0;
/*---------функции высшего порядка----------*/
/*---------------------------------------------*/
//Foreach
//не возвращает никакого значения
//через return будет undefined
//foreach просто перебирает

// array.forEach(function(elem) {
    // newArray.push(elem*=elem)
    // counter+=elem;
// })

// console.log(newArray);
// console.log(counter);

//2
// var getNames = function(elem) {
//     newArray.push(elem.age)
// }

// testData.forEach(getNames)
// console.log(newArray);

/*---------------------------------------------*/

//Map
// c map можно не пушить
//map в отличии от foreach возвращает свой результат


//  newArray = array.map(function(item) {
//     return item*=item
//  })

// newArray = testData.map(function(item) {
//     return {
//         name: item.name,
//         email:item.email
//     }
// })

//  console.log(newArray)

/*---------------------------------------------*/
//filter

// newArray = array.filter(function(item) {
//     return item > 8
// })

// newArray = array.filter(function(item) {
//     return item%2 ==0
// })



// console.log(newArray )

/*---------------------------------------------*/
//some вернет если хотя бы один элемент пройдет проверку
//every вернет true если все пройдут проверку

// newArray = array.some(function(item) {
//     return item >8
// })

// newArray = array.some(function(item) {
//     return item >20
// })


// newArray = array.every(function(item) {
//     return item !=0
// })

// newArray = testData.every(function(item) {
//     return item.email
// })
// console.log(newArray)
/*---------------------------------------------*/

//reduce and reduce right
//служат для свертки массива
//они применяют колбэк функцию по очереди

var flattened = [[3, 4], [8, 9]];
var myArr = [1,2,3,4,5,6,7,-2,3,-4];

// myArr = myArr.reduce(function(arrSum, item){
//     return arrSum+=item
// })

//initial value если не указано, то будет равно первому элементу
//ниже initial value равно 20 

// myArr = myArr.reduce(function(arrSum, item){
//     return arrSum+=item
// },20)

// console.log(myArr)

//с помощью reduce можно развернуть двумерный массив

flattened = flattened.reduce(function(sum, item) {
    return sum.concat(item)
})

// console.log(flattened)
//работа reduce на примере списка друзей

var myFriends = [
    {name: 'Nadya', books: ['Консуэлло']},
    {name: 'Lera', books: [
        'Вино из одуванчиков', '1941'
    ]}
]

//reduce ожидает, что initialValue будет массивом

// myFriends = myFriends.reduce(function(sum, item) {
//     // return sum.concat(item.books)
//     return [...sum, ...item.books]
// },[])

//reduceRight

// myFriends = myFriends.reduceRight(function(sum, item) {
//     // return sum.concat(item.books)
//     return [...sum, ...item.books]
// },[])


// console.log(myFriends)

/*---------------------------------------------*/
//arguments
// function setAlpha() {
//     console.log(arguments)
// }

// function setAlpha() {
//     console.log(arguments.length)
// }

//lesson 7
//argumens - это обьект

function setAlpha() {
    //можно преобразать этот псевдомассив в массив вот так
    var arr = [];
    for(var i = 0; i< arguments.length; i++) {
        arr[i] = arguments[i]
    }
    console.log(arr.concat(['c', 'd']))

}

setAlpha('a', 'b', 'c', 'd')

//https://www.youtube.com/watch?v=piM-njF6haM&list=PLNkWIWHIRwMHKLotIS_d-wyj00pg0AnUg&index=11