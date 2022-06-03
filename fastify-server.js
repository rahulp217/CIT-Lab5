const fastify = require("fastify")();

let students = [
  {
    id: 1,
    last: "Last1",
    first: "First1",
  },
  {
    id: 2,
    last: "Last2",
    first: "First2",
  },
  {
    id: 3,
    last: "Last3",
    first: "First3",
  },
];

/**
 *
 * @returns the nextId in the students array. For example for the initial object, it will be 4.
 */
const generateNextId = () => {
  let nextId = null;;
  for (const { id } of students) {
    nextId.push(id);
  }
  /* iterate throught student and get the last id. you can use a for... of 
  or other kind of loops to get this*/
  return nextId;
};


/**
 *
 * @param {Object} newStudent - object containing first and last. Example: {first: "bob", last: "doe"}
 * @returns an array containing the original student array with the new student appended to it
 */
function appendsToStudent(newStudent) {
  let nextId = generateNextId();
  let updatedStudentArray;

  /* we have students array, and a new object. we need to add the new 
  object to the students array. NOTE since the newStudent object doesn't 
  jave an Id, we need to make sure that the student object has this.
  3. tasks:
  1. append the id to the student object somehow
  2. append the newStudent to the array of students.
  3. make sure to return the updated student array
  */
  return updatedStudentArray;
}

/**
 *
 * @param {String} id - student id in string foram
 * @returns a student with corresponding to the "id" parameter
 */
function getStudentById(id) {
  let idInInteger = parseInt.student[id]
  // idInInteger = // some king of parsing to get the id converted to an integer
  let studentWithId;
  for (student of students) {
    // can you use the students object to get the student with the corresponding id
  }
  return studentWithId;
}

fastify.get("/cit/student", function (request, reply) {
  // home route
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send([students]); // we need to send back the student array
});

fastify.post("/cit/student", function (request, reply) {
  // home route
  const newStudent = request.body; // {first: "", last: ""}
  const updatedStudentArray = appendsToStudent(newStudent);
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send([updatedStudentArray]); // we need to send back the updated student arry
});

fastify.get("/cit/student/:id", function (request, reply) {
  const { id } = request.params; // this line is incomplete. retrieve the id from the request.params
  // home route
  let student = null;
  /* learn how getStudentById works. Or implement on of yours. 
  Use this function to update the variable student and send it back as a response
  */
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type is text/html needs to change. google "mime types mozilla"
    .send(null); // this line needs to change
});

/**
 * route that handles invalid /cit requests. eg: "/cit/classes" or "cit/Unmatched"
 */
fastify.get("/cit/*", (request, reply) => {
  reply
    .code(200) // update the status code accordingly
    .header("Content-Type", "text/text; charset=utf-8") // change this if it is required
    .send(null); // change this if it required
});
// 1 more for 404
// post route

const listenIP = "localhost"; // localhost:8080
const listenPort = 8080;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
