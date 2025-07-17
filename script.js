function firstWord(s) {
  // Trim leading/trailing spaces
  s = s.trim();

  // If empty string, return empty
  if (s === "") return "";

  // Find first space
  const firstSpaceIndex = s.indexOf(' ');

  // If no space, return the whole string
  if (firstSpaceIndex === -1) return s;

  // Return substring up to the first space
  return s.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
