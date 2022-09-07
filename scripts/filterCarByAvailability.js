function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  for (let i = 0; i < cars.length; i++){
    if (cars[i].available){
      console.log("cars ke-" + i + "available, push");
      result.push(cars[i]);
    }else {
      console.log("cars ke-" + i + "tidak available, skip");
    }
  }
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
