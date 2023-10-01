class Calculator {
  getSum(a, b) {
    return math.chain(a).add(b).done();
  }

  getSubtract(a, b) {
    return math.chain(a).subtract(b).done();
  }

  getMultiplу(a, b) {
    return math.chain(a).multiply(b).done();
  }

  getDivision(a, b) {
    return math.chain(a).divide(b).done();
  }
}

