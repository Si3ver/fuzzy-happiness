const { Positions } = require('../utils/db')

exports.positions = (start, pageSize) => {
  return Positions.find({}).skip(start).limit(pageSize).sort({_id: -1})
}