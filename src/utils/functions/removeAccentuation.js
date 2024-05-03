function removeAccentuation(string) {
  const toLowerCase = string.toLowerCase();
  const removeAccentuation = toLowerCase
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const spaceToHyphen = removeAccentuation.replace(/\s+/g, "-");

  return spaceToHyphen;
}

export default removeAccentuation;
