//This program calculates students grade score

console.log ();
console.log ("-------------STUDENTS SCORES GRADE GENERATOR-----------");
console.log ();
console.log ();
// console.log (Math.random());
// console.log (Math.random()*100);
// console.log (Math.floor(Math.random()*100));
// console.log (Math.ceil(Math.random()*100));

console.log ("------ Part 1: Student Score Grade; Using Math.floor --------");
x = Math.floor(Math.random()*100);
console.log ({x});
console.log (x);
if (x < 40)
{
    console.log ("Student Score Grade is F");
}
else if (x < 45)
{
    console.log ("Student Score Grade is E");
}
else if (x < 50)
{
    console.log ("Student Score Grade is D");
}
else if (x < 60)
{
    console.log ("Student Score Grade is C");
}
else if (x < 70)
{
    console.log ("Student Score Grade is B");
}
else
{
    console.log ("Student Score Grade is A");
}
console.log()

console.log ("------ Part 2: Student Score Grade; Using Math.ceil --------");
y = Math.ceil(Math.random()*100);
console.log ({y});
console.log (y);
if (y < 40)
{
    console.log ("Student Score Grade is F");
}
else if (y < 45)
{
    console.log ("Student Score Grade is E");
}
else if (y < 50)
{
    console.log ("Student Score Grade is D");
}
else if (y < 60)
{
    console.log ("Student Score Grade is C");
}
else if (y < 70)
{
    console.log ("Student Score Grade is B");
}
else
{
    console.log ("Student Score Grade is A");
}
console.log()