const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const bookingDetails = new FormData(form);
  const city = bookingDetails.get("city") || "Douala";
  const pickup = bookingDetails.get("pickup") || "Not selected";
  const dropoff = bookingDetails.get("dropoff") || "Not selected";
  const date = bookingDetails.get("date") || "Not selected";
  const time = bookingDetails.get("time") || "Not selected";
  const name = bookingDetails.get("customerName") || "Passenger";
  const phone = bookingDetails.get("phone") || "Not provided";

  const confirmationText =
    "Hello " + name + ", your taxi request has been received.\n\n" +
    "Pickup: " + pickup + "\n" +
    "Destination: " + dropoff + "\n" +
    "City: " + city + "\n" +
    "Date: " + date + "\n" +
    "Time: " + time + "\n" +
    "Phone: " + phone + "\n\n" +
    "A driver will contact you shortly on WhatsApp for confirmation.";

  alert(confirmationText);
  console.log("Taxi booking submitted:", confirmationText);
});
