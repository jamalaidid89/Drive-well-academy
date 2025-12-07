export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;

        const systemPrompt = `You are DW Assistant for Drive-Well Academy, a DVSA-approved driving school in Bristol, UK. Phone: 07514 377 171. Email: info@drive-well-academy.com. Website: www.drive-well-academy.com. Coverage: Bristol BS1-BS16. Cars: Automatic and Manual. Standard lessons 2hrs, test day 2.5hrs. Average learner needs 40-50hrs, quick learners 20-30hrs, nervous learners 50-70hrs. Cancellation: 48hrs free, 24-48hrs 50%, under 24hrs full charge. Franchise: 50 pounds per week, ADI and PDI welcome. Be friendly, encouraging, use emojis occasionally. Create realistic UK theory test questions when asked.`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 1024,
                system: systemPrompt,
                messages: messages
            })
        });

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
}
