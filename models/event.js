module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      distance: {
        type: DataTypes.FLOAT,
      },
      slotCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      slotsFilled: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    });
  
    return Event;
  };
  