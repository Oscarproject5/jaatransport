import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Email details
    const emailData = {
      to: 'jaatransport01@gmail.com',
      subject: `New Freight Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request from JAA TRANSPORT Website</h2>
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>

        <h3>Shipment Details:</h3>
        <p><strong>Pickup City:</strong> ${data.pickupCity}</p>
        <p><strong>Delivery City:</strong> ${data.deliveryCity}</p>
        <p><strong>Load Type:</strong> ${data.loadType}</p>

        <h3>Additional Details:</h3>
        <p>${data.message || 'No additional details provided'}</p>

        <hr>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
      `
    }

    // Using Web3Forms (free email service for static sites)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        subject: emailData.subject,
        from_name: 'JAA TRANSPORT Website',
        to: emailData.to,
        name: data.name,
        email: data.email || 'noreply@jaatransport.com',
        phone: data.phone,
        message: `
Contact Info:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Company: ${data.company || 'Not provided'}

Shipment Details:
Pickup: ${data.pickupCity}
Delivery: ${data.deliveryCity}
Load Type: ${data.loadType}

Additional Details:
${data.message || 'None'}
        `
      })
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Quote request sent successfully!'
      })
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send quote request. Please call us directly.' },
      { status: 500 }
    )
  }
}
