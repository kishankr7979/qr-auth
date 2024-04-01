import qrcode from 'qrcode';
import qrHtmlTemplate from "../templates/qrHtmlTemplate.js";
const qrGenerator = async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const qrPayload = {
        id: crypto.randomUUID(),
        loginCode: crypto.randomUUID(),
        client: 'qr-auth',
        generatedAt: new Date().toISOString(),

    }
    try {
        req.eventManager.subscribe(qrPayload);
        const qrCode = await qrcode.toDataURL(JSON.stringify(qrPayload));
        const frontendTemplate = qrHtmlTemplate(qrCode);
        return res.status(200).send({lid: qrPayload.loginCode, id: qrPayload.id, htmlTemplate: frontendTemplate});
    }
    catch (err) {
        console.log('error in generating QR', err);
        return res.status(500).send({message: 'Internal Server Error'});
    }

}

export default qrGenerator;