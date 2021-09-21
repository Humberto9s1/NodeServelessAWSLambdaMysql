'use strict';

const connection = require('./configs/dbConfig')

module.exports.getAllEmployees = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = `SELECT * FROM employees`
  connection.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message, }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }

    const employees = [...results]
    const response = {
      data: employees,
      message: 'All employees successfully listed.',
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
};

module.exports.getEmployee = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.queryStringParameters.id) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify('Invalid id.')
    })
  }

  const query = `SELECT * FROM employees WHERE id=${event.queryStringParameters.id}`
  connection.query(query, (err, results, fields) => {

    if (err) {
      const response = { data: null, message: err.message, }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }

    if (results.length == 0) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify('Employee not found.')
      })
    }

    const employees = results[0]
    const response = {
      data: employees,
      message: 'Employees successfully listed.',
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
};

module.exports.createEmployee = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = `INSERT INTO employees (idade, nome, cargo) VALUES ('${event.queryStringParameters.idade}', '${event.queryStringParameters.nome}', '${event.queryStringParameters.cargo}' )`
  connection.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message, }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }

    const { insertId } = results
    const employee = { id: insertId }
    const response = {
      data: employee,
      message: `employee ${employee.id} successfully created.`,
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
};

module.exports.updateEmployee = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.queryStringParameters.id) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify('Invalid id.')
    })
  }

 const query = `UPDATE employees SET idade='${event.queryStringParameters.idade}', nome='${event.queryStringParameters.nome}', cargo='${event.queryStringParameters.cargo}' WHERE id='${event.queryStringParameters.id}'`
  connection.query(query, (err, results, fields) => {

    if (err) {
      const response = { data: null, message: err.message, }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }

    if (results.affectedRows == 0) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify("Employee not found.")
      })
    }

    const response = {
      data: null,
      message: `employee successfully updated.`,
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })  
};

module.exports.deleteEmployee = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.queryStringParameters.id) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify('Invalid id.')
    })
  }

  const query = `DELETE FROM employees WHERE id=${event.queryStringParameters.id}`
  connection.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message, }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }

    if (results.affectedRows == 0) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify("Employee not found.")
      })
    }

    const response = {
      data: null,
      message: 'employees deleted successfully.',
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
};