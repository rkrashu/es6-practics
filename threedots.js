//akadhilk arry ke single arry te convert kora

const familyAges = [70,50,45,35]
const friendsAges = [25,30,27]
const allAges = familyAges.concat(friendsAges).concat([10, 27,28])
console.log(allAges)
const allAges1 = [...familyAges, ...friendsAges, 6,12]
console.log(allAges1)

const minister = 650;
const businessman = 800
const sochib = 500;
const whoRich = [500, 1000, 590]
const winner = Math.max(...whoRich)
console.log(winner)