/* eslint-disable promise/param-names */
export default {
  register (detail) {
    return new Promise((resole, reject) => {
      detail.emailAddress === 'sunny@local.com' ? resole({
        result: 'success'
      }) : reject(new Error('User already exist'))
    })
  }
}
