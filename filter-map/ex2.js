/* Array.prototype.map ET filter - Exercice 2

Il s'agit d'écrire une fonction getCampusesTeachingReact, qui reçoit en argument un tableau
d'objets décrivant des campus de la Wild Code School. Chaque campus a ces propriétés:
- city: ville où se trouve le campus
- curriculums: les cursus proposés dans ce campus (PHP/Symfony, JS/React, JS/Angular, etc.)

En utilisant filter puis map, la fonction doit renvoyer les villes des campus qui proposent
un cursus JS/React.

Tableau en entrée:
[
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
]

Sortie attendue:
['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']

*/
let array = [
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
];
function getCampusesTeachingReact(campuses) {
  const getCampusesTeachingReact = array.filter(function(campuses){
    return (campuses.curriculums).includes("JS/React");
  })
  .map(function(campuses) {
    return campuses.city;
  });
  return getCampusesTeachingReact
}
getCampusesTeachingReact(array);
module.exports = getCampusesTeachingReact;
