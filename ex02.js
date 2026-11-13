function formaterDuree(minutes) {
  const heures = Math.floor(minutes / 60);
  const minutesRestantes = minutes % 60;

  return `${heures}h${minutesRestantes}min`;
}

console.log(formaterDuree(135));
console.log(formaterDuree(60));
console.log(formaterDuree(45));
