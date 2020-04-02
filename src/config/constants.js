export const Permission = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete'
}

const PORT = 3001;

export const SigninURL = `http://localhost:${PORT}/signin`
export const productsURL = `http://localhost:${PORT}/products`

//probs need asymetric encryption. Dont think the hackers should have this one. 
export const SECRET = '89(^^30nnlwW33%'

