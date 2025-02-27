import { Model, DataTypes, Sequelize } from "sequelize";
import db from "../config/db.config";

export class User extends Model {
  public id!: number;
  public password?: string;
  public email?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public deletedAt?: Date;
  public status!: 0 | 1;
}

export const Users = User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: db,
    tableName: "users",
    timestamps: true,
    paranoid: true,
  }
);
