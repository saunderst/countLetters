function countLetters (str) {
  stats = {};

  str = str.replace (/ /g, "");
  for (let i = 0; i < str.length; ++i) {
    if (stats[str[i]] === undefined)
      stats[str[i]] = 1;
    else
      stats[str[i]] += 1;
  }
  return stats;
}

console.log(countLetters("lighthouse in the house"));
