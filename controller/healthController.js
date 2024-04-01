const healthController = async (req,res) => {
    res.status(200).send('Server is running healthy');
}

export default healthController