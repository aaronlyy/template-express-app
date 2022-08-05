const get = (req, res) => {
    return res.json({
        success: true,
        msg: "This is a template JSON response"
    })
}

const post = (req, res) => {
    return res.json({
        success: true,
        msg: "This is a template JSON response",
        data: req.body
    })
}

module.exports = {
    get,
    post
}