"use strict";

class User {
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }
    getResult = () => {
        return this.marks > 40 ? "Passed" : "Failed";
    }
}

// let user1 = new User("Ragul", 70)
// let user2 = new User("Hari", 70)
// let user3 = new User("Ram", 70)


// let user = {
//     user1,
//     user2,
//     user3
// }

function getCardHTML (user) {
    const {name, marks, getResult} = user;
    return `
    <h4>${name}</h4>
    <ul>
        <li>Marks Scored : ${marks}</li>
        <li>Result : <span class="${
            getResult() == "Passed" ? "pass" : "fail"
        }" >${getResult()}</span></li>
    </ul>
    `
}

let container = document.getElementsByClassName("container")[0];

// container.insertAdjacentHTML("beforeend", getCardHTML(addUser));


function addUser(event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let marks = document.getElementById("marks");
    // alert(name.value);
    // alert(marks.value);
    container.insertAdjacentHTML("beforebegin", getCardHTML(new User(name.value, marks.value)));
}

document.getElementById("user-form").addEventListener("submit", addUser);




