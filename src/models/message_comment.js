const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return message_comment.init(sequelize, DataTypes);
}

class message_comment extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'messages',
        key: 'id'
      }
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comments',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'message_comment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "message_comment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
