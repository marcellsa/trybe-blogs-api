module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', { // Padrão: no singular
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    tableName: 'categories', // Padrão: no plural
    timestamps: false,
    underscored: true,
  });
  return Category;
}