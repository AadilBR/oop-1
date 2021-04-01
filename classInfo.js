// Définit d'une classe Human
class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }

  printInfo() {
    // this
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
  }

  canVote() {
    // this
    const majorityAge = 18

    if (this.age >= majorityAge) {
      return true
    } else {
      return false
    }
  }


  mostSkilledDev(person) {

    // le premier parametre est this et person est le second parametre

    if (this.language.length > person.language.length) {
      return this.firstName
    } else if (person.language.length > this.language.length) {
      return person.firstName
    } else {
      return 'draw'
    }
  }
}




exports.Human = Human