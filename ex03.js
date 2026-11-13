function comparerScores(score1, score2) {
  if (score1 > score2) {
    return "Joueur 1 gagne";
  } else if (score1 < score2) {
    return " Joueur 2 gagne";
  } else if (score1 == score2) {
    return "Egalité";
  }
}

console.log(comparerScores(12, 12));
