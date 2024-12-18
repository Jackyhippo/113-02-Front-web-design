import { Schema, model, ObjectId } from 'mongoose'

const cartSchema = new Schema(
  {
    product: {
      // mongodb 的 id
      type: ObjectId,
      // id 來源是 products (product.js)
      ref: 'products',
      required: [true, '購物車商品 ID 必填'],
    },
    quantity: {
      type: Number,
      required: [true, '購物車商品數量必填'],
    },
  },
  { versionKey: false },
)

const schema = new Schema(
  {
    account: {
      type: String,
      required: [true, '帳號必填'],
      unique: true,
    },
    cart: {
      type: [cartSchema],
    },
  },
  { versionKey: false },
)

export default model('users', schema)
