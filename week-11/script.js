const courses = ['Design','WDIII','Web production']

let students =[]

if(localStorage.getItem('studentsLS')){
    students = JSON.parse(localStorage.getItem('studentsLS'))

}else{
 students = [
        {
            "studentNumber":1,
            "name":"Leanne Graham",
            "userName":"Bret",
            "email":"Sincere@april.biz"
        },
        {
            "studentNumber":2,
            "name":"Ervin Howell",
            "userName":"Antonette",
            "email":"Shanna@melissa.tv"
        },
        {
            "studentNumber":3,
            "name":"Clementine Bauch",
            "userName":"Samantha",
            "email":"Nathan@yesenia.net"     
        },
        {
            "studentNumber":4,
            "name":"Patricia Lebsack",
            "userName":"Karianne",
            "email":"Julianne.OConner@kory.org"
        },
        {
            "studentNumber":5,
            "name":"Chelsey Dietrich",
            "userName":"Kamren",
            "email":"Lucio_Hettinger@annie.ca"
        },
        {
            "studentNumber":6,
            "name":"Mrs. Dennis Schulist",
            "userName":"Leopoldo_Corkery",
            "email":"Karley_Dach@jasper.info"
        },
        {
            "studentNumber":7,
            "name":"Kurtis Weissnat",
            "userName":"Elwyn.Skiles",
            "email":"Telly.Hoeger@billy.biz"
        },
        {
            "studentNumber":8,
            "name":"Nicholas Runolfsdottir",
            "userName":"Maxime_Nienow",
            "email":"Sherwood@rosamond.me"
        },
        {
            "studentNumber":9,
            "name":"Glenna Reichert",
            "userName":"Delphine",
            "email":"Chaim_McDermott@dana.io"
        },
        {
            "studentNumber":10,
            "name":"Clementina DuBuque",
            "userName":"Moriah.Stanton",
            "email":"Rey.Padberg@karina.biz"   
        }
    ]
} //closes the else
    

/*** Inserting elements with insertAdjacentHTML */

//Use the 'courses' array, from script.js, to create a html list of courses. Use the DOM element with the id 'courseList'. Use a loop with insertAdjacentHTML to display the courses in the document.
const $courseList = document.getElementById('courseList')
const coursesArray = []
for(const course of courses){
    coursesArray.push( `<a class="p-2 link-secondary item" href="#">${course}</a>`)
}

$courseList.insertAdjacentHTML(
    'afterbegin', //Position
    coursesArray.join('')//value
    )



//Dinamically create, and display in the document, all the ID cards. Use the 'students' array, and a 'for loop'.
const $studentList = document.getElementById('studentList')

//Display all the IDs using the innerHTML only once. Use an array and the join() method.
//1.create an empty array
const htmlTemplates = []
for(const student of students ){
    const studentIndex = student.studentNumber -1
    // 2.use the push method
    htmlTemplates.push(
    `<div id="studentID${studentIndex}" class="col-md-6">
        <div class="ac-card">
            <div class="ac-card-image d-flex justify-content-center align-items-center"><i class="bi bi-person-bounding-box display-1"></i></div>
            <div class="ac-card-info">
                <p>
                <strong id="studentName${studentIndex}">${student.name}</strong><br>
                <span id="studentNumber${studentIndex}">${student.studentNumber}</span>-
                <span id="userName${studentIndex}">${student.userName}</span>
                </p>
                <p id="email${studentIndex}">${student.email}</p>
                <button id="editStudentBtn${studentIndex}" data-index="${studentIndex}" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            </div>
            <div class="ac-card-footer">
                <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
            </div>
        </div>
    </div>`)
}
//3.use the join and innerHTML method
$studentList.innerHTML = htmlTemplates.join('')
// $studentList.innerHTML = htmlTemplates[0]




/*** Create HMTL element with createElement() method */
//Classlist Table
//Retrieve the DOM element that has the id 'student-table'
const $studentTable = document.getElementById('student-table')

//Declare a function to create a table
function createTable(studentsList) {
    $studentTable.innerHTML = ''
    //using a for loop create the rows/cells, and fill them with the students name, number and email
    for(const student of studentsList){

        // Create a new 'table row' for the contact
        const tableRow = document.createElement('tr') 

        for(const prop in student){
            // Create a new cell inside of the row
            const tableCell = document.createElement('td')
            // fill the value of the cell 
            tableCell.textContent = student[prop]
            //insert the cell in the row element
            tableRow.appendChild(tableCell)
        }

        //insert the row in the table element 
        $studentTable.appendChild(tableRow)
       
    // end for
    }
// end function
}

//Call the function to display the table in the page
createTable(students)

