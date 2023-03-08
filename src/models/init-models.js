const DataTypes = require("sequelize").DataTypes;
const _comments = require("./comments");
const _message_comment = require("./message_comment");
const _messages = require("./messages");
const _messgaes_reactions = require("./messgaes_reactions");
const _reactions = require("./reactions");
const _users = require("./users");

function initModels(sequelize) {
  const comments = _comments(sequelize, DataTypes);
  const message_comment = _message_comment(sequelize, DataTypes);
  const messages = _messages(sequelize, DataTypes);
  const messgaes_reactions = _messgaes_reactions(sequelize, DataTypes);
  const reactions = _reactions(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  message_comment.belongsTo(comments, { as: "comment", foreignKey: "comment_id"});
  comments.hasMany(message_comment, { as: "message_comments", foreignKey: "comment_id"});
  message_comment.belongsTo(messages, { as: "message", foreignKey: "message_id"});
  messages.hasMany(message_comment, { as: "message_comments", foreignKey: "message_id"});
  messgaes_reactions.belongsTo(messages, { as: "message", foreignKey: "message_id"});
  messages.hasMany(messgaes_reactions, { as: "messgaes_reactions", foreignKey: "message_id"});
  messgaes_reactions.belongsTo(reactions, { as: "reaction", foreignKey: "reaction_id"});
  reactions.hasMany(messgaes_reactions, { as: "messgaes_reactions", foreignKey: "reaction_id"});
  messages.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasMany(messages, { as: "messages", foreignKey: "sender_id"});

  return {
    comments,
    message_comment,
    messages,
    messgaes_reactions,
    reactions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
