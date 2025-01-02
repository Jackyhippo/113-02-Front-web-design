import axios from 'axios'
import { useUserStore } from '@/stores/user'

// baseURL = http://localhost:4000
// axios.post('/user')
// axios.post('/user/login')
// ===============
// baseURL = x
// axios.post('http://localhost:4000/user')
// axios.post('http://localhost:4000/user/login')

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
})

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API,
})

// axios 攔截器
// 1. axios.get() / axios.post()
// 2. interceptors.request(請求設定 => {})
// 3. 送出
// 4. interceptors.response(成功處理, 失敗處理)
// 5. await / .then().catch()
apiAuth.interceptors.request.use((config) => {
  const user = useUserStore()
  config.headers.Authorization = 'Bearer ' + user.token
  return config
})

export const useAxios = () => {
  return { api, apiAuth }
}
