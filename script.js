const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday")
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    // used to refine the age calculation in case the current month and day haven't passed the person's birthday yet in the current year.
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    // checks whether the current month and day have passed the person's birthday in the current year.
    if (
        month < 0 || // month is before the birth month.
        // month is the same as birth but the date is not right
        (month === 0 && currentDate.getDate() < birthdayDate.getDate()) 
    ) {
        age--; // the age is decremented by 1 
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);