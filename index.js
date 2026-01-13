function introduction(kassim) {
  return `Hi, my name is ${kassim}.`;
}

function introductionWithLanguage(kassim, english) {
  return `Hi, my name is ${kassim} and I am learning to program in ${english}.`;
}

function introductionWithLanguageOptional(kassim, language = "JavaScript") {
  return `Hi, my name is ${kassim} and I am learning to program in ${language}.`;
}
