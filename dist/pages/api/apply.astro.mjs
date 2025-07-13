export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { name, email, instagram, description } = await request.json();
    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ error: "Name, email, and description are required" }),
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
    if (instagram && instagram.trim() !== "") {
      const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/;
      if (!instagramRegex.test(instagram)) {
        return new Response(
          JSON.stringify({ error: "Please enter a valid Instagram URL" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }
    if (description.length < 200) {
      return new Response(
        JSON.stringify({ error: "Description must be at least 200 characters long" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    console.log("New application received:", { name, email, instagram, description: description.substring(0, 50) + "..." });
    const emailJSPayload = {
      service_id: "service_hm56mmb",
      template_id: "template_xsjmtjf",
      // You may want to create a separate template for applications
      public_key: "HAJhQWntEy40S-xyj",
      template_params: {
        from_name: name,
        from_email: email,
        message: `New UNIDES Application:
        
Name: ${name}
Email: ${email}
${instagram ? `Instagram: ${instagram}` : "Instagram: Not provided"}

About:
${description}`,
        to_email: "info.unides@gmail.com"
      }
    };
    const emailJSResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailJSPayload)
    });
    const responseText = await emailJSResponse.text();
    if (!emailJSResponse.ok) {
      console.error("EmailJS API error response:", responseText);
      throw new Error(`EmailJS API error: ${emailJSResponse.status} - ${responseText || "No response body"}`);
    }
    if (responseText === "OK" || emailJSResponse.status === 200) {
      console.log("Application email sent successfully for:", { name, email });
      return new Response(
        JSON.stringify({ success: true, message: "Application submitted successfully! We'll review your application and get back to you soon." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      throw new Error(`Unexpected response: ${responseText}`);
    }
  } catch (error) {
    console.error("Error processing application:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({
        error: `Failed to submit application: ${errorMessage}. Please try again or contact us directly at info.unides@gmail.com`
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
