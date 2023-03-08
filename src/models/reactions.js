const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return reactions.init(sequelize, DataTypes);
}

class reactions extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reaction: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("single","group"),
      allowNull: true,
      defaultValue: "single"
    }
  }, {
    sequelize,
    tableName: 'reactions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reactions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
