import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    name: {
      type: String,
      repuired: [true, '商品名稱必填'],
    },
    price: {
      type: Number,
      repuired: [true, '商品價錢必填'],
      min: [0, '商品價格格式不對'],
    },
    category: {
      type: String,
      enum: {
        // 限制欄位只能有陣列內的值
        values: ['遊戲', '音樂', '手機', '衣服', '相機'],
        // 錯誤訊息的 {VALUE} 會自動替換成傳入的值
        message: '商品分類錯誤，查無{VALUE}分類',
      },
    },
  },
  {
    // 停用 __v
    versionKey: false,
    // 自動建立 createdAt 和 updatedAt (時間戳記)
    timestamps: true,
  },
)

export default model('products', schema)
