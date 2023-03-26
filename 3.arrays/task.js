let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((i, n) => i === arr2[n])

function getUsersNamesInAgeRange(users, genders){
    return users.filter( costumer => costumer.gender === genders).map(ageGenders =>ageGenders.age).reduce((a, b, ind, arr) => a + b /arr.length, 0)
 
}