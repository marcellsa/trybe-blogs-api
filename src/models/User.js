module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', { // Padrão: no singular
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tablename: 'users', // Padrão: no plural
    underscored: true,
    timestamps: false,
  });
  return UserTable;
}