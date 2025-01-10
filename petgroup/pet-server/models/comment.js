module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT, //TEXT 긴문자열, STRING 짧은 문자열
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true, //snake_case로 변경
    }
  );
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, { foreignKey: "user_id", targetKey: "id" });
  };
  return Comment;
};
