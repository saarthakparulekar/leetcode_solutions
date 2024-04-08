/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while(students.includes(sandwiches[0]) && students.length > 0){
        if(sandwiches[0] == students[0]){
            sandwiches.shift();
            students.shift();
        } else {
            let x = students.shift();
            students.push(x);
        }
    }
    return students.length;
};
