function predictcgpa(study, socialmedia, sleep) {
  let base = 5;
  base += study * 0.4;
  base -= socialmedia * 0.25;
  base += sleep * 0.1;

  if (base > 10) base = 10;
  if (base < 4) base = 4;

  return base.toFixed(2);
}

function verdict(cgpa) {
  if (cgpa >= 9) return "Toppers are scared of you.";
  if (cgpa >= 8) return "Solid engineering student.";
  if (cgpa >= 7) return "Placement chances look good.";
  if (cgpa >= 6) return "Average engineering survivor.";
  if (cgpa >= 5) return "You trusted last night preparation.";
  return "Start preparing for backlogs.";
}

module.exports = { predictcgpa , verdict};
