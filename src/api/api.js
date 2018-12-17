import axios from 'axios'

let User = {}
let Menu = {}
let Promotion = {}
let Order = {}
let Restaurant = {}

User.login = (payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/cusers/session', {
      'username': payload.username
    })
      .then((responce) => {
        console.log('responce:', responce)
        resolve(responce.status)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


export { User, Menu, Promotion, Order, Restaurant }
