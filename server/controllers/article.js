const db = require('../models/article')
const user = require('../models/user')

let createArticle = function(req, res) {
  db.create({
    title     : req.body.title,
    content   : req.body.content,
    author    : req.body.author,
    updateAt  : new Date,
    createdAt : new Date
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      user.findByIdAndUpdate(data.author,
        {$push: {"article" : data._id}},
        {safe: true, upsert: true, new: true},
          function(err, success) {
            console.log(success);
            if (err) {
              res.send(err)
            } else {
              res.send(success)
            }
          }
      )
    }
  })
}

let getAll = function(req, res) {
  db.find({})
    .populate({path : "author", select : ['name', 'username', 'email']})
    .exec(function(err, data) {
      if (err) {
        res.send({msg : "false"})
      } else {
        res.send(data)
      }
    })
}

module.exports = {
  createArticle,
  getAll

}
