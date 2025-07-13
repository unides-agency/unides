import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse JSON data
    const { name, email, instagram, description } = await request.json();

    // Basic validation
    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and description are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Instagram URL validation (only if provided)
    if (instagram && instagram.trim() !== '') {
      const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/;
      if (!instagramRegex.test(instagram)) {
        return new Response(
          JSON.stringify({ error: 'Please enter a valid Instagram URL' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Description length validation
    if (description.length < 200) {
      return new Response(
        JSON.stringify({ error: 'Description must be at least 200 characters long' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Log the application data for debugging
    console.log('New application received:', { name, email, instagram, description: description.substring(0, 50) + '...' });

    // Send email using EmailJS API
    const emailJSPayload = {
      service_id: 'service_hm56mmb',
      template_id: 'template_xsjmtjf', // You may want to create a separate template for applications
      public_key: 'HAJhQWntEy40S-xyj',
      template_params: {
        from_name: name,
        from_email: email,
        message: `New UNIDES Application:
        
Name: ${name}
Email: ${email}
${instagram ? `Instagram: ${instagram}` : 'Instagram: Not provided'}

About:
${description}`,
        to_email: 'info.unides@gmail.com'
      }
    };

    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailJSPayload)
    });

    const responseText = await emailJSResponse.text();

    if (!emailJSResponse.ok) {
      console.error('EmailJS API error response:', responseText);
      throw new Error(`EmailJS API error: ${emailJSResponse.status} - ${responseText || 'No response body'}`);
    }

    // EmailJS API returns "OK" string on success
    if (responseText === 'OK' || emailJSResponse.status === 200) {
      console.log('Application email sent successfully for:', { name, email });
      
      // Return success response
      return new Response(
        JSON.stringify({ success: true, message: 'Application submitted successfully! We\'ll review your application and get back to you soon.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      throw new Error(`Unexpected response: ${responseText}`);
    }

  } catch (error) {
    console.error('Error processing application:', error);
    
    // Return more specific error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return new Response(
      JSON.stringify({ 
        error: `Failed to submit application: ${errorMessage}. Please try again or contact us directly at info.unides@gmail.com` 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
