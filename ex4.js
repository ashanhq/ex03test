function eulerlist() {
    // Get user inputs
    const a = parseInt(document.getElementById("a1").value);
    const b = parseInt(document.getElementById("b1").value);
    const lStr = document.getElementById("l").value;

    // Convert input list (comma or space separated) to numbers
    const l = lStr
        .split(/[\s,]+/) // split by commas or spaces
        .map(x => parseInt(x.trim()))
        .filter(x => !isNaN(x)); // remove invalid entries

    // Validate inputs
    if (isNaN(a) || isNaN(b) || l.length === 0) {
        document.getElementById("result").textContent =
            "⚠️ Please enter valid numbers for A, B, and the list L.";
        return;
    }

    // Compute sum of multiples of a or b
    let sum = 0;
    for (let num of l) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }

    // Display result
    document.getElementById("result").textContent =
        `✅ Sum of multiples of ${a} or ${b} in the list: ${sum}`;
}
