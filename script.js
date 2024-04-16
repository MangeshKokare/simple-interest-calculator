function calculateInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    var interest = (principal * rate * time) / 100;

    document.getElementById("result").innerText = "Simple Interest: $" + interest.toFixed(2);
}
