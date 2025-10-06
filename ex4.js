function eulerlist() {
    // Get values from the input fields
    const a = parseInt(document.getElementById("a1").value);
    const b = parseInt(document.getElementById("b1").value);
    const lStr = document.getElementById("l").value;

    // Convert the comma-separated list to an array of numbers
    const l = lStr.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));

    // Compute sum of multiples of a or b
    let sum = 0;
    for (let num of l) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }

    // Display the result
    alert(`Sum of multiples of ${a} or ${b} in the list: ${sum}`);
}
