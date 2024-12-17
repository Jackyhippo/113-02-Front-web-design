import { Schema, model } from 'mongoose'
import validator from 'validator'

const schema = new Schema({
  // 資料欄位名稱
  account: {
    // 資料形態
    type: String,
    // 必填
    required: [true, '帳號必填'],
    // 限制長度
    minLength: [4, '帳號最少 4 的字'],
    maxlehgth: [20, '帳號最長 20 的字'],
    // 欄位資料不能重複 (只能布林值)
    unique: true,
    // Regex (正則表示式)
    match: [/^[A-Za-z0-9]+$/, '帳號只能是英數字'],
    // 自動使用 .trim() 去除空白
    trim: true,
  },
  email: {
    type: String,
    required: [true, '信箱必填'],
    unique: true,
    // 自訂驗證
    validate: {
      validator(value) {
        return validator.isEmail(value)
      },
      message: '信箱格式錯誤',
    },
  },
})

// 把結構轉成可以操作的 model 匯出
// model(collection名稱, schema)
// collection 名稱使用英文複數
export default model('users', schema)
