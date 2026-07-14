const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    const subject1 = Number(document.getElementById("subject1").value);
    const subject2 = Number(document.getElementById("subject2").value);
    const subject3 = Number(document.getElementById("subject3").value);
    const subject4 = Number(document.getElementById("subject4").value);
    const subject5 = Number(document.getElementById("subject5").value);

    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const average = total / 5;

    let grade = "";
    let result = "";

    if (
        subject1 >= 35 &&
        subject2 >= 35 &&
        subject3 >= 35 &&
        subject4 >= 35 &&
        subject5 >= 35
    ) {
        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 50) {
            grade = "D";
        } else {
            grade = "E";
        }

    } else {
        result = "Fail";
        grade = "F";
    }

    document.getElementById("total").textContent = total;
    document.getElementById("average").textContent = average.toFixed(2);
    document.getElementById("grade").textContent = grade;
    document.getElementById("result").textContent = result;

});