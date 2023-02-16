module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', { // Padrão: no singular
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },    
  },
  {
    tablename: 'postsCategories', // Padrão: no plural
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    });
  }

  return PostCategory;
}