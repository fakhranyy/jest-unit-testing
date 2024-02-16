module.exports.calculator = (num1, num2, operator) => {
    if(typeof num1 !== "number" || typeof num2 !== 'number') {
        throw new Error("Please enter number!")
    }

    else if(operator === "+") return num1 + num2;
    else if(operator === "-") return num1 - num2;
    else if(operator === "*") return num1 * num2;
    else if(operator === "/") return num1 / num2;

    return {
        message: "invalid operator !",
        success: false
    }
}