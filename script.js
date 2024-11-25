function handleAlternativeChoice() {
  const other = document.getElementById("other-referral").value;
  const details = document.getElementById("other-details-box");
  if (other === "Magic!" || other === "Other...") {
    details.classList.remove("hidden");
  } else {
    details.classList.add("hidden");
  }
}
