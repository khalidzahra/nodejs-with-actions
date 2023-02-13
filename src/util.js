const multiply = (n1, n2) => {
    n1 = Number(n1);
    n2 = Number(n2);
    if (isNaN(n1) || isNaN(n2)) return -1;
    return n1 * n2;
};

module.exports = {
    multiply
}