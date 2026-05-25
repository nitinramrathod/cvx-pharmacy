export const sendMail = async (data: any) => {
    console.log("Received data:", data);
  try {
    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error("Error sending mail:", error);
  }
};