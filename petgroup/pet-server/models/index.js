'use strict';

// 모든 모델을 동적으로 로드
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


// 모델 간 관계 설정
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// 관계 설정 직접 추가
// db.User = db.User || require('./user')(sequelize, Sequelize.DataTypes);
// db.Comment = db.Comment || require('./comment')(sequelize, Sequelize.DataTypes);
// db.User.hasMany(db.Comment, { foreignKey: 'user_id', sourceKey: 'id' });
// db.Comment.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
