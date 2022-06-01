function lotto() {
  let output = [];
  for (let i = 0; i < 14; i++) {
    let newNumber = Math.floor(Math.random() * 49) + 1;
    if (output) {
      while (output.includes(newNumber)) {
        newNumber = Math.floor(Math.random() * 49) + 1;
      }
    }
    output.push(newNumber);
  }
  console.log(output);
  console.log(`第一組號碼: ${output.slice(0, 6)}，特別號是${output[6]}號`);
  console.log(`第二組號碼: ${output.slice(7, 13)}，特別號是${output[13]}號`);
}

lotto();
