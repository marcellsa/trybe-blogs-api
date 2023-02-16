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
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'pcategoryId',
      otherKey: 'cpostId',
    });
  }

  return PostCategory;
}