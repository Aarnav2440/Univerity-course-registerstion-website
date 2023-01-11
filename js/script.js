/* 
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

/* This for loop gets the course data from the course-data.js file and displays it on the main html page under the main tag
 whilst also creating a <section> for each course and putting all that
 information into a newly created <p> tag for each section via js and also creates a button for each course section */ 
for(let i=0;i<8;i++)
{
    
    let p=document.createElement("p");
    let main=document.querySelector(".container");
    let section=document.createElement("section");
    section.className="course-info";
    section.id="section"+[i];
    p.innerHTML="<h3>"+courseInfo[i].code+": "
    +courseInfo[i].name+"</h3>"+"<h4>"
    +courseInfo[i].prof
    +"</h4><em>"+"Current enrollment: "+courseInfo[i].currEnroll+" (max: "+courseInfo[i].maxEnroll+")<br><br>"
    +"location: "+courseInfo[i].location+"<br>"
    +"(schedule:"+courseInfo[i].schedule+") "+"</em><br><br>"
    +courseInfo[i].info;


    let input=document.createElement("input");
    input.type="button";
    input.name="i-btn";
    input.value="Sign-up for course";
    input.className="register-btn"
    input.id="btn"+[i];
        




    section.appendChild(p);
    section.appendChild(input);
    main.appendChild(section);
}

/*This for loop here gets the course code and name of that particular course section
 whenever someone clicks that section's sign-up button
and displays it the course selection bag in a <p> tag which is created whenever someone click the sign-up button.        


*/
for(let j=0;j<8;j++){
  let inp=document.querySelector("#btn"+[j]);
  inp.addEventListener("click",function(){
  let course=document.querySelector(".course-selection-bag");
  let p=document.createElement("p");
  p.innerText=courseInfo[j].code+": "+courseInfo[j].name;
  course.appendChild(p);
}
 )
}


  
  




