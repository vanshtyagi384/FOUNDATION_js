/*let salesData = [
{product:"Laptop", price:1200},
{product: "Smartphone", price:800},
{product:"Headphones", price:150},
{product: "keyboard",price:80}
];


let totalSales = salesData.reduce((acc,sale) =>  acc + sale.price,0) 
console.log(totalSales);*/



/*let expenses = [
    {description: "Groceries", amount: 50, catgory:"food"},
    {description: "Electricity", amount:100, catgory:"utilities"},
    {description: "Dinner", amount: 30, catgory:"food"},
    {description: "Inernet Bill", amount: 50, catgory:"utilities"}
];


let expenseReport = expenses.reduce((report,expense) => {
    report[expense.catgory] += expense.amount;
    report[expense.catgory] = (report[expense.catgory] || 0) + expense.amount;
    return report;


}, {Food: 0 , utilities: 0 });





console.log("Expense Report", expenseReport);
*/









/*let tasks = [
    {description:"write report", completed:false, priority:2},
    {description:"Send email", completed:true, priority:3},
    {description:"Prepare presentation", completed:false, priority:1}
]




let  pendingSortedTasks = tasks
   .filter((tasks) => !tasks.completed)
   .sort((a,b) => a.priority - b.priority)

   console.log(pendingSortedTasks);
   
*/




let movieRatings = [
     {title:"Movie A", rating: [4,5,3]},
     {title:"Movie B", rating: [5,5,4]},
     {title:"Movie C", rating: [3,4,2]},
];






let averageRating = movieRatings.map()




