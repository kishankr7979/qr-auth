const loginStatusController = async (req, res) => {
    try {
        const {loginCode, id} = req.body;

        if(!loginCode || !id) return res.status(500).send({message: 'invalid code'});

        const tokenManager = req.tokenManager;

        const eventExists = tokenManager.findEvent(id)
        if(eventExists) {
            const response = eventExists;
            res.status(200).send({message: 'Authorized', token: response.token});
        }
        else res.status(404).send({message: 'Unauthorized, token not exists' });
    }

    catch (err) {
        console.log('error in checking token', err);
        return res.status(500).send({message: 'Internal service error'});
    }

}

export default loginStatusController;