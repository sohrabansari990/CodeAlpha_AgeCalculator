const in_d = document.getElementById("in-d");
const in_m = document.getElementById("in-m");
const in_y = document.getElementById("in-y");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const days = document.getElementById("days");
const months = document.getElementById("months");
const years  = document.getElementById("years");

const submit = document.getElementById("submit")
let num = document.getElementById("num")


const out_year = document.getElementById("Year")
const out_month = document.getElementById("Month")
const out_day = document.getElementById("Day")

const tatalDays = document.getElementById("totalDays")


const monthNameToNumber = (monthName) => {
    const months = {
        "January": "01", "February": "02", "March": "03", "April": "04",
        "May": "05", "June": "06", "July": "07", "August": "08",
        "September": "09", "October": "10", "November": "11", "December": "12"
    };
    return months[monthName] || monthName;
};

const dayNameToNumber = (dayName) => {
    const days = {
        "Monday": "01", "Tuesday": "02", "Wednesday": "03", "Thursday": "04",
        "Friday": "05", "Saturday": "06", "Sunday": "07"
    };
    return days[dayName] || dayName;
};

let click = false
// ===============================================================

let i = 31;
for(let j = 1; j <= i; j++){
    const p = document.createElement("p");
    p.textContent = j;
    p.style.transition = "all 0.3s ease";
    p.style.cursor = "pointer";
    
    // Append directly to days, not num
    days.appendChild(p);
}


// ===============================================================
const enter = ()=>{
    let innerClick1 = false
    let innerClick2 = false
    let innerClick3 = false
day.addEventListener("mousedown", () => {
    days.style.display = "block";
});

days.addEventListener("click", (e)=>{
    if(e.target.tagName === "P") {
        in_d.innerHTML = e.target.innerText;
        innerClick1 = true;
        days.style.display = "none";
    }
});


days.addEventListener("mouseleave", ()=>{
    days.style.display = "none";
})

month.addEventListener("mousedown", () => {
    
    months.style.display = "block";
});
months.addEventListener("click", (e)=>{
    in_m.innerHTML = e.target.innerText;
    innerClick2 = true
    months.style.display = "none";
    // console.log(innerClick2)
    
})


months.addEventListener("mouseleave", ()=>{
    months.style.display = "none";
})
year.addEventListener("mousedown", () => {
    
    years.style.display = "block";
});
years.addEventListener("click", (e)=>{
    in_y.innerHTML = e.target.innerText;
    e.target.removeEventListener
    innerClick3 = true
    years.style.display = "none";
    // console.log(innerClick3)
    // console.log(in_y)
    
})


years.addEventListener("mouseleave", ()=>{
    years.style.display = "none";
})

submit.addEventListener("click", (e)=>{
    // console.log("clicked the submit")
   if (innerClick1 && innerClick2 && innerClick3 ){
    click = true

    // =====================================================


    const month = monthNameToNumber(in_m.innerHTML)
    const day = dayNameToNumber(in_d.innerHTML)

    const dob = in_y.innerHTML + "-" + month + "-" + day
    // console.log("Date string:", dob)

    const DOB = new Date(dob)
    // console.log("DOB object:", DOB)
    
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - DOB.getFullYear();
    let months = currentDate.getMonth() - DOB.getMonth();
    let days = currentDate.getDate() - DOB.getDate();
    
    if (days < 0) {
        months--;
        // Get days in previous month and add to negative days
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    out_year.innerHTML = years;
    out_month.innerHTML = months;
    out_day.innerHTML = days;

    tatalDays.innerHTML = years * 365 + months * 30 + days;
    
    // console.log("Years:", years, "Months:", months, "Days:", days)



}
})



}
enter();


