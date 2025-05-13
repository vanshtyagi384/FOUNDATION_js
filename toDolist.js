/*let tasks  = [
    {description: "Write report", completed: false,priority:2},
    {description: "Send email", completed: true,priority:3},
    {description: "Prepare presentation", completed: false,priority:1},
];


//Question give all the tasks which are not complete or give me that data with sorting 

// identify  the tasks which are not completed 

let pendingSortedTasks = tasks
.filter((task) => !task.completed)
.sort((a, b) => a.priority - b.priority )


console.log(pendingSortedTasks);*/



let movieRatings = [
    {title: "Movie A", ratings:[4,5,3]},
    {title: "Movie B", ratings:[5,5,4]},
    {title: "Movie C", ratings:[3,4,2]},
];


// question -- find the average rating of the array 


let averageRatings = movieRatings.map((movie) =>{
    let total = movie.ratings.reduce((sum,rating) => sum + rating,0)
    let average = total / movie.ratings.length
    //movie.ratings = average 
    //return movie;
    return {title: movie.title, averageRatings: average.toFixed(2)}
})
console.log(averageRatings);
console.log(movieRatings);

