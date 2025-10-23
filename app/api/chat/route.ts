import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json()

    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      // Fallback to rule-based responses if no API key
      return NextResponse.json({
        response: getFallbackResponse(message),
        isAI: false
      })
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful customer service assistant for JAA TRANSPORT, a step deck transportation company serving the Rio Grande Valley (RGV) in Texas.

Company Information:
- Name: JAA TRANSPORT
- Phone: (956) 372-6956
- Email: jaatransport01@gmail.com
- Service Area: Rio Grande Valley (McAllen, Brownsville, Harlingen, Edinburg, Mission) and throughout Texas

Services Offered:
- Step Deck Trailer Transportation
- Heavy Equipment Hauling
- Construction Equipment Transport (excavators, bulldozers, cranes, loaders, etc.)
- Agricultural Equipment Transport (tractors, combines, harvesters, farm implements)
- Industrial Machinery Moving
- Oversized Load Transport
- Local and Long-Distance Routes

Trailer Specifications:
- Length: Up to 48 feet
- Width: Up to 8.5 feet (wider with permits)
- Height: Up to 11.5 feet
- Max Payload: 48,000 lbs
- Overweight permits available

Key Features:
- Fully licensed and insured (USDOT and MC numbers current)
- Comprehensive cargo insurance
- Professional tie-down procedures
- Experienced, certified drivers
- GPS tracking available
- Same-day service often available
- Flexible scheduling including weekends
- 24/7 availability for quotes

Transit Times:
- Local RGV: Same day to 24 hours
- Across Texas: 1-3 days

Payment Options: Cash, Check, Credit/Debit cards, Wire transfer, Net 30 terms (for approved accounts)

Your job is to:
1. Answer questions about services, pricing, coverage areas, and equipment
2. Help customers understand if their cargo can be transported
3. Guide them to get a quote by calling (956) 372-6956 or filling out the quote form
4. Be friendly, professional, and helpful
5. Keep responses concise but informative
6. Always encourage them to call for immediate assistance or detailed quotes

Remember: You're representing a professional transportation company. Be helpful, accurate, and customer-focused.`
          },
          ...conversationHistory,
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 300
      })
    })

    if (!response.ok) {
      throw new Error('OpenAI API request failed')
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I\'m having trouble responding right now. Please call us at (956) 372-6956 for immediate assistance.'

    return NextResponse.json({
      response: aiResponse,
      isAI: true
    })

  } catch (error) {
    console.error('Chat API error:', error)

    // Fallback to rule-based response on error
    const { message } = await req.json()
    return NextResponse.json({
      response: getFallbackResponse(message),
      isAI: false
    })
  }
}

// Fallback responses when AI is not available
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
    return 'Hi there! 👋 Welcome to JAA TRANSPORT. I\'m here to help with your step deck transportation needs. What would you like to know?'
  }

  if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return 'I\'d be happy to help you get a quote! Please call us at (956) 372-6956 or fill out our quote form for pricing details based on your specific needs.'
  }

  if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
    return 'We specialize in step deck transportation for heavy equipment, construction machinery, agricultural equipment, and oversized loads throughout the Rio Grande Valley and Texas. What type of equipment do you need transported?'
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
    return 'You can reach us at:\n📞 (956) 372-6956\n📧 jaatransport01@gmail.com\n\nWe\'re available 24/7 for quotes!'
  }

  return 'Thanks for your message! For detailed information and assistance, please call us at (956) 372-6956 or fill out our quote form. Our team is ready to help with your transportation needs!'
}
