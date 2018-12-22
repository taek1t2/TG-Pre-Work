function monitorCount(rows, columns) {
  return rows * columns;

}
function costOfMonitors (rows, columns) {
    return monitorCount(rows, columns) * 200;
};
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);




//helper functions: adding another function in the return value. It also easier to read the code and debug if necessary.
