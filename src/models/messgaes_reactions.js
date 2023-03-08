const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return messgaes_reactions.init(sequelize, DataTypes);
}

class messgaes_reactions extends Sequelize.Model {
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
    reaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'reactions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'messgaes_reactions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "messgaes_reactions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
