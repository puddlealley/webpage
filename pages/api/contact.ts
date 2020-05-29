import { NextApiRequest, NextApiResponse } from 'next'
import * as SendGrid from "@sendgrid/mail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    SendGrid.setApiKey(process.env.SENDGRID_API_KEY || '');

    const { name, message } = req.body

    const content = {
        to: 'robert@daedalusft.com',
        from: 'robert@daedalusft.com',
        subject: `New Message From - ${name}`,
        text: message,
        html: `<p>${message}</p>`
    }

    try {
        await SendGrid.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}