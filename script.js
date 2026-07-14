const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    // Student Details
    const studentName = document.getElementById("studentName").value.trim();
    const registerNumber = document.getElementById("registerNumber").value.trim();

    // Validate Student Name
    if (studentName === "") {
        alert("Please enter Student Name.");
        return;
    }

    // Validate Register Number
    if (registerNumber === "") {
        alert("Please enter Register Number.");
        return;
    }

    // Read Subject Marks as Text
    const subject1Input = document.getElementById("subject1").value.trim();
    const subject2Input = document.getElementById("subject2").value.trim();
    const subject3Input = document.getElementById("subject3").value.trim();
    const subject4Input = document.getElementById("subject4").value.trim();
    const subject5Input = document.getElementById("subject5").value.trim();

    // Check if any subject mark is empty
    if (
        subject1Input === "" ||
        subject2Input === "" ||
        subject3Input === "" ||
        subject4Input === "" ||
        subject5Input === ""
    ) {
        alert("Please enter marks for all 5 subjects.");
        return;
    }

    // Convert to Number
    const subject1 = Number(subject1Input);
    const subject2 = Number(subject2Input);
    const subject3 = Number(subject3Input);
    const subject4 = Number(subject4Input);
    const subject5 = Number(subject5Input);

    // Validate Marks Range
    if (
        subject1 < 0 || subject1 > 100 ||
        subject2 < 0 || subject2 > 100 ||
        subject3 < 0 || subject3 > 100 ||
        subject4 < 0 || subject4 > 100 ||
        subject5 < 0 || subject5 > 100
    ) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    // Calculate Total
    const total = subject1 + subject2 + subject3 + subject4 + subject5;

    // Calculate Average
    const average = total / 5;

    let grade = "";
    let result = "";

    // Pass / Fail
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
        } else if (average >= 35) {
            grade = "E";
        }

    } else {

        result = "Fail";
        grade = "F";

    }

    // Display Result
    document.getElementById("total").textContent = total;
    document.getElementById("average").textContent = average.toFixed(2);
   document.getElementById("grade").textContent = grade;

const resultElement = document.getElementById("result");

resultElement.textContent = result;

if(result === "Pass"){
    resultElement.className = "pass";
}else{
    resultElement.className = "fail";
}
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function(){

    document.getElementById("studentName").value = "";
    document.getElementById("registerNumber").value = "";

    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("subject4").value = "";
    document.getElementById("subject5").value = "";

    document.getElementById("total").textContent = "--";
    document.getElementById("average").textContent = "--";
    document.getElementById("grade").textContent = "--";

    const resultElement = document.getElementById("result");
    resultElement.textContent = "--";
    resultElement.className = "";
});
});