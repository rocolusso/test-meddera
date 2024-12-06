import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

export default async function MainContactForm(req: NextApiRequest, res: NextApiResponse) {

    // const res1 = await fetch(`https://test-tg-send-form.vercel.app/form`,{
    //     method:"POST",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(req.body)
    // })
    //
    //
    // const res2 = await fetch(`http://64.176.70.84:4545/form`,{
    //     method:"POST",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(req.body)
    // })
    //
    //
    // console.log(res1)

    console.log(req.body.message.username)
    console.log(req.body.message.userphone)
    console.log(req.body.message.message)


    const formName = 'Главная форма сайта/контакты'
    const name = req.body.message.username
    const phone = req.body.message.userphone
    const userMessage = req.body.message.message

    const message = `
    
    ${formName}\n
    Имя: ${name}
    Телефон: ${phone}
    Сообщение: ${userMessage}\n
    
    
    `

    // const userIds = ['256302541'] sh
    const userIds = ['256302541','5299878921']

    // 5299878921 yana
    const botToken = "7059635838:AAEo9R0PAvYinEwo3lqEXcIVkokH2izXERg"
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    if (!message || !Array.isArray(userIds)) {
        return res.status(400).json({ error: 'Invalid request data' });
    }

    try {
        const promises = userIds.map((userId) =>
            axios.post(telegramApiUrl, {
                chat_id: userId,
                text: message,
            })
        );

        await Promise.all(promises); // Send messages concurrently

        // res.status(200).json({ success: true, message: 'Messages sent successfully!' });
    } catch (error) {
        // @ts-ignore
        console.error('Error sending messages:', error.response?.data || error.message);
        // res.status(500).json({ error: 'Failed to send messages.' });
    }






    res.status(200).json({
        formSended:  req.body
    });

}