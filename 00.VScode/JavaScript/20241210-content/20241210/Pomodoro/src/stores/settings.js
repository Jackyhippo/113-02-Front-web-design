// 引入 Pinia 庫中的 defineStore 函數，用於定義一個狀態管理。
import { defineStore } from 'pinia'

// 使用 Pinia 定義一個名為 'settings' 的狀態管理
export const useSettingsStore = defineStore('settings', {
  // 狀態（state）屬性定義
  state: () => ({
    // 鬧鐘聲音列表
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
    ],
    // 預設選中的鬧鐘 ID
    selected: 1,
  }),
  getters: {
    selectedFile() {
      const i = this.alarms.findIndex((alarm) => alarm.id === this.selected)
      return this.alarms[i].file
    },
  },
  persist: {
    key: 'pomodoro-settings',
    pick: ['selected'],
  },
})
