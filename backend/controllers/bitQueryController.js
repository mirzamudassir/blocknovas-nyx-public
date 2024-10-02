const { NotFoundError, ValidationError, BadRequestError } = require('../utils/errors')
const BitQueryService = require('../services/bitQueryService')

exports.getTrx = async (req, res) => {
    const payments = await BitQueryService.getTopWhaleTransactions()
    res.status(200).json(payments)
}
