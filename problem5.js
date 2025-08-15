
function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return 'Invalid';
  }
  
  let totalMark = 0;
  for (const mark of marks) {
    totalMark = totalMark + mark;
  }
  const averageScore = totalMark / marks.length;
  const finalScore = Math.round(averageScore);

  let pass = [];
  let fail = [];
  for (const singleMark of marks) {
    if (singleMark < 40) {
      fail.push(singleMark);
    }
     else {
      pass.push(singleMark);
    }
  }

  const passSubject = pass.length;
  const failSubject = fail.length;

  let obj = {};
  let keys = ["finalScore", "Pass", "Fail"];
  let values = [finalScore, passSubject, failSubject];

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }

  return obj;
}



const result = resultReport([12, 21, 30, 51, 52,62]);
console.log(result);



