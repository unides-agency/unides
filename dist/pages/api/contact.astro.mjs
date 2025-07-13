export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    console.log("Attempting to send email with data:", { name, email, message: message.substring(0, 50) + "..." });
    const emailJSPayload = {
      service_id: "service_hm56mmb",
      template_id: "template_xsjmtjf",
      public_key: "HAJhQWntEy40S-xyj",
      template_params: {
        from_name: name,
        from_email: email,
        message,
        to_email: "info.unides@gmail.com"
      }
    };
    console.log("EmailJS payload:", emailJSPayload);
    const emailJSResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailJSPayload)
    });
    console.log("EmailJS response status:", emailJSResponse.status);
    console.log("EmailJS response headers:", Object.fromEntries(emailJSResponse.headers.entries()));
    const responseText = await emailJSResponse.text();
    console.log("EmailJS raw response:", responseText);
    if (!emailJSResponse.ok) {
      console.error("EmailJS API error response:", responseText);
      throw new Error(`EmailJS API error: ${emailJSResponse.status} - ${responseText || "No response body"}`);
    }
    if (responseText === "OK" || emailJSResponse.status === 200) {
      console.log("Email sent successfully for:", { name, email });
      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully! We'll get back to you soon." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      throw new Error(`Unexpected response: ${responseText}`);
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({
        error: `Failed to send message: ${errorMessage}. Please try again or email us directly at info.unides@gmail.com`
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
