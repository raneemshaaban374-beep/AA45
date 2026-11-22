function save(){
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const user ={            /*grouping info in one variable */
        name:name,
        age:age
    }
    document.getElementById("output").innerHTML="Name: " + user.name +
    "<br>Age:" + user.age
}
