module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "proyectointegrador",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "onDelete": "cascade"
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

/* ruta de archivo /database/config/config.js */