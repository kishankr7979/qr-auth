const grantTokenController = async (req, res) => {
    const {id, loginCode} = req.body;
    console.log(req.body);

    console.log('called this controller', id, loginCode)

    if(!id || !loginCode) {
       return res.status(401).send({message: 'Unauthorized'});
    }

    const loginId = crypto.randomUUID();

    const token = `login-token-${loginId}-${id}`

    const tokenManager = req.tokenManager;

    tokenManager.subscribe({id, loginCode, token, generatedAt: new Date().toDateString()})

    return res.status(200).send({message: 'Authorized', token});
}

export default grantTokenController;