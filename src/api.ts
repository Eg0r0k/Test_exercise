import axios from 'axios'
import type { UserData } from '@/types'
class Api {
  async getUsers(): Promise<UserData[]> {
    try {
      const { data } = await axios.get<UserData[]>('http://127.0.0.1:3000/')
      return data
    } catch (error) {
      console.error('Error fetch', error)
      throw error
    }
  }
  async searchUsers(query: string): Promise<UserData[]> {
    try {
      const { data } = await axios.get(`http://127.0.0.1:3000?term=${query}`)
      return data
    } catch (error) {
      console.error('Error search', error)
      throw error
    }
  }
}
const api = new Api()
export { api }
