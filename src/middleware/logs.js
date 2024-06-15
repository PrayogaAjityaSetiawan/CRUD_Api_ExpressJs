// middleware
const logRequest = (req, res, nex)=> {
    console.log('Request Terjadi pada Path: ', req.path);
    nex();
}

module.exports = logRequest;