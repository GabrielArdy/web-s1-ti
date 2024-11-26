const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Lecturer = require('./lecturer');

const Assistant = sequelize.define('tb_lowongan_asisten', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    job_title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    job_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    job_requirements: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    begin_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    apply_deadline: {
        type: DataTypes.DATE,
        allowNull: false
    },
    competency: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    quota : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lecturer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Lecturer,
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'tb_lowongan_asisten',
    tableName: 'tb_lowongan_asisten',
    freezeTableName: true,
    timestamps: true

});

Lecturer.hasMany(Assistant, {
    foreignKey: 'lecturer_id',
    as: 'assistants'
});

Assistant.belongsTo(Lecturer, {
    foreignKey: 'lecturer_id',
    as: 'lecturer'
});

module.exports = Assistant;