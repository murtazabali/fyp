/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home.jade', {
    title: 'Home'
  });
};
