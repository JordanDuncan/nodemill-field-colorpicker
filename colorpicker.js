exports.preTableCell = function(value, record, options, callback) {
  if (value) {
    value = '<div style="height:10px; width: 100%; background-color: ' + value + '"></div><span style="text-align: center">' + value + '</span>';
  }
  callback(null, value);
};