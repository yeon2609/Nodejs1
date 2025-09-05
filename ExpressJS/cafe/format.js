const makeResponseGetOK = (data) => {
  return {status: 'ok', code: 200, data}
}

const makeResponsePostOK = (msg) => {
  return {status: 'ok', code: 201, msg}
}

const makeResponseDeleteOK = (msg) => {
  return {status: 'ok', code: 204, msg}
}

const makeResponsePutOK = (msg) => {
  return {status: 'ok', code: 203, msg}
}

const makeResponseError = (error) => {
  return {status: 'error', code: 400, error}
}

module.exports = {makeResponseGetOK,makeResponsePostOK,makeResponsePutOK,makeResponseDeleteOK,makeResponseError};
