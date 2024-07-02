0-get_list_students.js
export default function getStudentsByLocation(arr, city) {
  return arr.filter((student) => student.location === city);
}
