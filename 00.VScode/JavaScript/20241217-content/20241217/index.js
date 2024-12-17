import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import User from './user.js'
import { StatusCodes } from 'http-status-codes'
import validator from 'validator'

// 伺服器連線到 mongodb
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('資料庫連線成功')
  })
  .catch((error) => {
    console.log(error)
  })

// 建立 express 網頁伺服器
const app = express()

// 將傳入的 body 解析為 json 格式
app.use(express.json())
// 處理 express.json() 的錯誤，可能是 json格式不對
// 處理 middleware 的錯誤 function 必須要直接放在下面，且要有四個參數
app.use((error, req, res, next) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: '資料格式錯誤',
  })
})

// app.請求方式(post新增使用者資料)(路徑, 處理動作(function))
// req = request = 進來的
// res = response = 出去的
app.post('/user', async (req, res) => {
  try {
    const user = await User.create({
      account: req.body.account,
      email: req.body.email,
    })

    // 物件導向寫法
    // const user = new User({
    //   account: req.body.account,
    //   email: req.body.email,
    // })
    // await user.save()

    // res.status(201) 狀態碼可以查表
    res.status(StatusCodes.CREATED).json({
      // 是否成功
      success: true,
      // 錯誤時回傳訊息
      message: '新增成功',
      result: user,
    })
  } catch (error) {
    console.log(error)
    if (error.name === 'MongoServerError' && error.code === 11000) {
      res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: '帳號或信箱重複',
      })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: error.errors[key].message,
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤',
      })
    }
  }
})

// 查詢全部id
app.get('/user', async (req, res) => {
  try {
    const users = await User.find()
    res.status(StatusCodes.OK).json({
      success: true,
      message: '查詢成功',
      result: users,
    })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤',
    })
  }
})

// 查詢特定id
// :id路由參數
app.get('/user/:id', async (req, res) => {
  // http://localhost:4000/user/1234
  // { id: 1234 }
  console.log(req.params)
  // http://localhost:4000/user?aaa=111&bbb=222
  // { aaa: 111, bbb: 222 }
  console.log(req.query)
  try {
    if (!validator.isMongoId(req.params.id)) throw new Error('ID')
    // const user = await User.findOne({ _id: req.params.id })
    const user = await User.findById(req.params.id)

    if (!user) throw new Error('NOT FOUND')

    res.status(StatusCodes.OK).json({
      success: true,
      message: '查詢特定id',
      result: user,
    })
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError' || error.message === 'ID') {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '格式錯誤',
      })
    } else if (error.message === 'NOT FOUND') {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '找不到',
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤',
      })
    }
  }
})

// 更新特定id
app.patch('/user/:id', async (req, res) => {
  try {
    if (!validator.isMongoId(req.params.id)) throw new Error('ID')

    // new: true 設定回傳更新後的資料
    // runValidators: true 執行 schema 定義的驗證
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).orFail(new Error('NOT FOUND'))

    res.status(StatusCodes.OK).json({
      success: true,
      message: '更新特定id成功',
      result: user,
    })
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError' || error.message === 'ID') {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '格式錯誤',
      })
    } else if (error.message === 'NOT FOUND') {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '找不到',
      })
    } else if (error.name === 'MongoServerError' && error.code === 11000) {
      res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: '帳號或信箱重複',
      })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: error.errors[key].message,
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤',
      })
    }
  }
})

// 刪除特定id
app.delete('/user/:id', async (req, res) => {
  try {
    if (!validator.isMongoId(req.params.id)) throw new Error('ID')

    await User.findByIdAndDelete(req.params.id).orFail(new Error('NOT FOUND'))

    res.status(StatusCodes.OK).json({
      success: true,
      message: '成功刪除',
    })
  } catch (error) {
    if (error.name === 'CastError' || error.message === 'ID') {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '格式錯誤',
      })
    } else if (error.message === 'NOT FOUND') {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '找不到',
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤',
      })
    }
  }
})

app.listen(process.env.PORT || 4000, () => {
  console.log('伺服器啟動')
})
