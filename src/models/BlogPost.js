module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', { // Padrão: no singular
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    }
  },
  {
    tablename: 'blogPosts', // Padrão: no plural
    timestamps: false,
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, 
      { foreignKey: 'userId', as: 'user' });
  }

  return BlogPost;
}