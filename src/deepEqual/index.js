function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (typeof a[key] === "function" || typeof b[key] === "function") {
      if (a[key].toString() != b[key].toString()) return false;
    } else {
      if (!deepEqual(a[key], b[key])) return false;
    }
  }

  return true;
}
