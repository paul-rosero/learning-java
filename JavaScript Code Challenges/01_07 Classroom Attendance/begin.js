/*
  WRITE YOUR SOLUTION HERE
*/

function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;
  
  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

// function getStudents(classroom) {
//   if (classroom.hasTeachingAssistant === true) {
//     return classroom.classList.slice(2);
//   } else {
//     return classroom.classList.slice(1);
//   };
// }

const classroom1 = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
};

const classroom2 = {
  hasTeachingAssistant: true,
  classList: ["James", "Mike", "Roman", "Lisa", "Omair", "Lukas"]
};

console.log("classroom1", getStudents(classroom1));
console.log("classroom2",getStudents(classroom2));