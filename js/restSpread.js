

// const user = {
//     name: 'Bob',
//     age: 20,
// };


// const userName = user.name;
// const userAge = user.age;

// // деструктуризация

// const { name, age } = user;

// // name = user.name;
// // age = user.age;


// ///////////////////////////////////

// let playlist = {
//     namelist: 'my List',
//     tracks: ['name1', 'name2', 'name3'],
// };

// let { namelist, tracks } = playlist;
// tracks.push('name5');

// // const copyTracks = [...tracks];

// console.log(tracks);
// console.log(playlist.tracks);


// namelist = "bestList";
// console.log(namelist); // => bestList

// // но вто же время
// console.log(playlist.namelist); // => my List


//////// порівняння масивів по елементам
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [1, 2, 3, 4, 5];

// function compareArr(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let el of arr1) { // el = 1 з масиву numbers
//         const index = arr1.indexOf(el); // index = 0
//         if (el !== arr2[index]) {
//             // 1 з масиву numbers === numbers2[0] => 1 !== 1
//             return false;
//        }
//     }

//     return true;
// }

// console.log(compareArr(numbers, numbers2));


// js

// function calcBMI(props){
//     const { weight, height } = props;
//     const numericWeight = Number(weight.replace(",", "."));
//     const numericHeight = Number(height.replace(",", "."));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// function calcBMI({weight, height}){
    
//     const numericWeight = Number(weight.replace(",", "."));
//     const numericHeight = Number(height.replace(",", "."));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
 
// console.log(calcBMI({
//     weight: "88,3",
//     height: "1.75",
// }))


// js
// function printContactsInfo(names, phones) {
//     const nameList = names.split(',');
//     const phonesList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1){
//         console.log(`${nameList[i]}: ${phonesList[i]}`);
//     }
// }


// printContactsInfo('Jacob,Vilian,Solom,Artek', '067556455,5646464546,8797879789,879879797');

// function printContactsInfo(param) {
//     const { names, phones } = param;
//     const nameList = names.split(',');
//     const phonesList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1){
//         console.log(`${nameList[i]}: ${phonesList[i]}`);
//     }
// }

// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phonesList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1){
//         console.log(`${nameList[i]}: ${phonesList[i]}`);
//     }
// }



// printContactsInfo({
//     names: 'Jacob,Vilian,Solom,Artek',
//     phones: '067556455,5646464546,8797879789,879879797',
// });

// console.log(getBotReport('Cyberdyne System', 150, 50));


// function getBotReport(param) {
//     const { companyName, bots: { repair, defence } } = param
//     return `${companyName} has ${repair} + ${defence} bots in stock`;
// }


// function getBotReport({companyName, bots: {repair: {old,now}, defence}}) {
//     return `${companyName} has ${defence + old + now} bots in stock`;
// }


// console.log(getBotReport({
//     companyName: 'Cyberdyne System',
//     bots: {
//         repair: {
//             now: 12,
//             old: 35,
//         },
//         defence: 50,
//     }
// }))


// js

// function creatContact(userInfo) {
//     const { list = 'default' } = userInfo;

//     return {
//         ...userInfo,
//         id: generateId(),
//         createdAt: "14.04.22",
//         list
//     }
// }

// console.log(creatContact({
//     name: 'Mango',
//     email: 'mango@gmail.com',
//     list: 'friends',
// }))

// console.log(creatContact({
//     name: 'Poly',
//     email: 'poly@gmail.com',
// }))

// function generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
// }

// js 4

function transformUsername({firstName, lastName, ...otherProps}) {
    return {
        fullName: `${firstName} ${lastName}`,
        ...otherProps,
    }
}

console.log(transformUsername({
    id: 1,
    firstName: 'Mango',
    lastName: 'Mercer',
    email: 'mango@gmail.com',
    friendCount: 40
}))