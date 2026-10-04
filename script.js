const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const bookingDetails = new FormData(form);
  const pickup = bookingDetails.get("pickup");
  const dropoff = bookingDetails.get("dropoff");
  const date = bookingDetails.get("date");
  const time = bookingDetails.get("time");
  const name = bookingDetails.get("customerName");

  const message =
    "Ride request confirmed\n\n" +
    "Customer: " + name + "\n" +
    "Pickup: " + pickup + "\n" +
    "Drop-off: " + dropoff + "\n" +
    "Date: " + date + "\n" +
    "Time: " + time;

  alert(message);
  console.log("Form submitted successfully");
});
