const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const bookingDetails = new FormData(form);
  const pickup = bookingDetails.get("pickup");
  const dropoff = bookingDetails.get("dropoff");

  alert("Pickup: " + pickup + "\nDrop-off: " + dropoff);
  console.log("Form submitted successfully");
});
