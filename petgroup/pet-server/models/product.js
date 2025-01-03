//common JS 문법
module.exports = (sequelize, DataTypes)=>{
  const product = sequelize.define("Product", {
    name:{
      type: DataTypes.STRING(20),
      allowNull: false, //빈값 가능한지
    },
    price: {
      type:DataTypes.INTEGER(10),
      allowNull: false,
    },
    seller: {
      type: DataTypes.STRING(20),
      allowNull: false, //빈값 가능한지
    },
    desc: {
      type: DataTypes.STRING(200),
      allowNull: false, //빈값 가능한지
    },
    imgUrl: {
      type: DataTypes.STRING(200),
      allowNull: true, //빈값 가능한지
    }
  } );
  return product;
}