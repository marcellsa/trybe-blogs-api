module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', { // Padrão: no singular
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tablename: 'users', // Padrão: no plural
    underscored: true,
  });
  return UserTable;
}