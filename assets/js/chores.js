
// function to cut the grass
function cutGrass () {
  console.log("I cut the grass")
}

// function to do the laundry
function laundry() {
  console.log("I did the laundry")
}

// todoToday is a function that represents you having to do chores (other functions)
//It's saturday and you have to cut the grass... so you are going to pass the function cutGrass to the function todoToday as chore1.  cutGrass is the callBack function.

function todoToday  (chore1)
{
  console.log("I ate breakfast")
  chore1();

}