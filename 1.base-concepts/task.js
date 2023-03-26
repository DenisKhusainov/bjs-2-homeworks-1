"use strict"
function solveEquation(a, b, c){
    let d = b**2-4*a*c;
    let result = 0;
    let x1 = 0;
    let x2 = 0;
    if(d < 0){
        return result = [];
    }
    if(d === 0){
        x1 = -b/(2*a);
        return result = [x1];
    }
    if(d > 0){
        x1 = (-b + Math.sqrt(d) )/(2*a);
        x2 = (-b - Math.sqrt(d) )/(2*a);
        return result = [x1, x2]
    }
}
function calculateTotalMortgage(percent, contribution, amount, countMonths){
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) === true) {
        return false;
      }
      else{
    let P = (percent / 100) / 12;
    let S = amount - contribution;
    let paymentInMonths = (S * (P + (P / (((1 + P)** countMonths) - 1))));
    let totalPayment = Number((paymentInMonths * countMonths).toFixed(2));
    return totalPayment
      }
}