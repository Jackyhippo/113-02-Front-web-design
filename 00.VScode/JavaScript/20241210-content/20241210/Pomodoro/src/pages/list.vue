<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">未完成</h1>
      </v-col>
      <v-col cols="12">
        <!-- 新增事項的輸入框 -->
        <v-text-field
          v-model="input"
          append-icon="mdi-plus"
          label="新增事項"
          clearable
          :rules="[rules.required, rules.length]"
          @keydown.enter="onInputSubmit"
          @click:append="onInputSubmit"
          ref="inputTextField"
        ></v-text-field>
        <!-- 顯示清單項目 -->
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="items.length === 0">
              <td colspan="2">沒有項目</td>
            </tr>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <!-- 如果是編輯模式，顯示輸入框，否則顯示文字 -->
                <v-text-field
                  v-show="item.edit"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  autofocus
                  ref="editTextField"
                  @keydown.enter="onEditSubmit(item.id, i)"
                ></v-text-field>
                <span v-show="!item.edit">{{ item.text }}</span>
              </td>
              <td>
                <template v-if="item.edit">
                  <v-btn icon="mdi-check" @click="onEditSubmit(item.id, i)"></v-btn>
                  <v-btn icon="mdi-undo" @click="cancelEditItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn icon="mdi-pencil" @click="editItem(item.id)"></v-btn>
                  <v-btn icon="mdi-delete" @click="delItem(item.id)"></v-btn>
                </template>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">已完成</h1>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2">沒有項目</td>
            </tr>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.text }}</td>
              <td>
                <v-btn icon="mdi-delete" @click="delFinishedItem(item.id)"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const list = useListStore()
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)

const input = ref('')
// 用來引用新增事項的輸入框
const inputTextField = ref(null)
// 用來引用編輯事項的輸入框
const editTextField = ref([])

// 驗證規則：必填並且字數至少為 3
const rules = {
  required: (value) => {
    return Boolean(value) || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須三個字以上'
  },
}

// 新增事項的提交方法
const onInputSubmit = () => {
  console.log(inputTextField.value.isValid)
  // 驗證輸入的值是否有效，無效不提交
  if (!inputTextField.value.isValid) return
  // 有效就提交
  addItem(input.value)
  // 重置輸入框
  inputTextField.value.reset()
  // value直接流空白會跳錯誤，所以要在送出後讓元件重設你的輸入欄位
  // input = ''
}

// 編輯事項提交方法
const onEditSubmit = (id, i) => {
  if (!editTextField.value[i].isValid) return
  confirmEditItem(id)
}
</script>

<route lang="yaml">
meta:
  title: 清單
</route>
