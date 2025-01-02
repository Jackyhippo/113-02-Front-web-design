import { zhHant } from 'vuetify/locale'

export default {
  $vuetify: zhHant,
  nav: {
    register: '註冊',
    login: '登入',
  },
  register: {
    submit: '建立帳號',
    success: '註冊成功',
  },
  login: {
    submit: '登入',
    success: '登入成功',
  },
  user: {
    account: '帳號',
    email: '信箱',
    password: '密碼',
    passwordConfirm: '密碼確認',
  },
  api: {
    // 後端 >> models > user.js
    userAccountRequired: '使用者帳號必填',
    userAccountTooShort: '使用者帳號太短',
    userAccountTooLong: '使用者帳號太長',
    userAccountInvalid: '使用者帳號格式不符',
    userPasswordRequired: '使用者密碼必填',
    userPasswordTooShort: '使用者密碼太短',
    userPasswordTooLong: '使用者密碼太長',
    userEmailRequired: '使用者信箱必填',
    userEmailInvalid: '使用者信箱格式不符',
    userCartProductRequired: '購物車商品必填',
    userCartQuantityRequired: '購物車數量必填',
    userCartQuantityTooSmall: '購物車數量不符',

    // 後端 >> controllers > user.js
    userAccountDuplicate: '使用者帳號重複',

    // 後端 >> passport.js
    userPasswordIncorrect: '密碼錯誤',
    userNotFound: '查無使用者',

    // 後端 >> models > product.js
    productNameRequired: '商品名稱必填',
    productPriceRequired: '商品價格必填',
    productPriceTooSmall: '商品價格不符',
    productImageRequired: '商品圖片必填',
    productDescriptionRequired: '商品說明必填',
    productCategoryRequired: '商品分類必填',
    productCategoryInvalid: '商品分類不符',
    productSellRequired: '商品上下架必填',

    // 後端 >> index.js
    // 後端 >> auth.js
    requestFormatError: '請求格式錯誤',

    // 後端 >> passport.js
    // controllers > user.js
    serverError: '伺服器錯誤',

    // 前端 >> register.vue
    userPasswordNotMatch: '密碼不符',
    unknownError: '未知錯誤',
  },
}
