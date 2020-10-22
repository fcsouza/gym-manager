module.exports = {
  dialect: 'postgres',
  database: 'gympoint',
  username: 'postgres',
  password: 'docker',
  host: 'localhost',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
