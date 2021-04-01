const printInfo = (person) => {
  // person is an object
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
}


const canVote = (person) => {
  // person is an object
  const majorityAge = 18

  if (person.age >= majorityAge) {
    return true
  } else {
    return false
  }
}

const mostSkilledDev = (person1, person2) => {
  // person1 et person2 sont deux objects passés en paramettres
  if (person1.language.length > person2.language.length) {
    return person1.firstName
  } else if (person2.language.length > person1.language.length) {
    return person2.firstName
  } else {
    return 'draw'
  }
}


const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['Java', 'C++', 'JavaScrip', 'Html', 'Css', 'PHP', 'Python'],
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Java', 'JavaScrip', 'Html', 'Css', 'PHP', 'Python'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['PHP', 'Python'],
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)
console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))
console.log(`${alice.firstName} is certified in : ${alice.language}.`)
console.log(`${bob.firstName} is certified in : ${bob.language}.`)
console.log(`${charlie.firstName} is certified in : ${charlie.language}.`)
console.log(mostSkilledDev(alice, bob))