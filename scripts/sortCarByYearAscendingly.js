function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let  i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j + 1].year < result [j].year) {
        let tempObj = result[j]
        result[j] = result[j + 1]
        result[j + 1] = tempObj 
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  console.log(result)
  return result;
}

