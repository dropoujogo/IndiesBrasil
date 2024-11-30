function somar(ar1, arg2) {
  if (typeof ar1 !== "number") {
    return "Erro";
  }
  return ar1 + arg2;
}

exports.somar = somar;
