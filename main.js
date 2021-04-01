const { Point } = require('./point')
const { Human } = require('./classInfo')


//const p3 = new Point.Point si je ne fais pas la destructuration

const p1 = new Point(1, 2)
const p2 = new Point(10, 11)
// alice is an instance of Human
const alice = new Human('Alice', 'Liddell', 28, ['Java', 'C++', 'JavaScrip', 'Html', 'Css', 'PHP', 'Python'])
// bob is an instance of Human
const bob = new Human('Bob', 'Lemon', 30, ['Java', 'JavaScrip', 'Html', 'Css', 'PHP', 'Python'])
// charlie is an instance of Human
const charlie = new Human('Charlie', 'Charlot', 8, ['PHP', 'Python'])



console.log(p1.isEqual(p1))
console.log(p1.isEqual(p2))
console.log(p1.distance(p1))
console.log(p1.distance(p2))
alice.printInfo()