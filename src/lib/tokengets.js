
export function getHeaders() {
  return window.localStorage.getItem('token')
}

export function setToken(token){
  return window.localStorage.setItem('token', token)  
}

export function removeToken(){
  return window.localStorage.removeItem('token')
}

export function parsePayload(){
  const token = getHeaders()
  if (!token) return false
  const splitToken = token.split('.')
  if (splitToken.length < 3) return false 
  const payload = JSON.parse(atob(splitToken[1]))
  return payload
}

export function isAuth(){
  const payload = parsePayload()
  if (!payload) return false 
  const currentTime = Math.round(Date.now() / 1000)
  return currentTime < payload.exp
}


export function isUser(userId){
  const payload = parsePayload()
  if (!payload) return false 
  return payload.sub === userId
}

