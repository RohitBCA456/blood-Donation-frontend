const form = document.getElementById("form-data");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData(form);
    const response = await fetch("https://blood-donation-8nn5.vercel.app/api/v2/users/request", {
      method: "POST",
      body: formData,
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    if(response.ok){
      alert("Request sent successfully.");
      window.location.href = "https://blooddonationdib.netlify.app/home.html";
    }
  } catch (error) {
    console.log("Error submitting form:", error);
  }
});
