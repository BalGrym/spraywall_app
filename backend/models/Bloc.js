module.exports = (sequelize, DataTypes) => {
  const Bloc = sequelize.define("Bloc", {
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    //allowNull to be changed
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    //type to be changed to json ? ["1", "2", "3" ...] // allownull to be changed
    like: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    //type to be changed to json ? ["1", "2", "3" ...] // allownull to be changed
    finished: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Bloc;
};
