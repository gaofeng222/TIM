<template>
  <Heador />
  <div class="goods">
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      @selection-change="handleSelectionChange"
      class="goods-table"
      empty-text="暂时没有数据"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        label="商品"
        width="320"
        show-overflow-tooltip
        align="center"
      >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <img style="width: 100px; height: 100px" :src="scope.row.url" />
            <span style="margin-left: 10px">{{ scope.row.gName }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="price" label="单价" width="120" align="center">
        <template #default="scope"> ￥ {{ scope.row.price }} </template>
      </el-table-column>
      <el-table-column property="count" label="数量" width="220" align="center">
        <template #default="scope">
          <el-input-number
            v-model="scope.row.count"
            :min="1"
            :max="10"
            @change="handleChange"
          />
        </template>
      </el-table-column>

      <el-table-column property="total" label="小计" align="center">
        <template #default="scope">
          ￥ {{ scope.row.price * scope.row.count }}
        </template>
      </el-table-column>

      <el-table-column property="actions" label="操作" align="center">
        <template #default="scope">
          <el-popover :visible="scope.row.visible" placement="top" :width="160">
            <p>确认删除该项吗?</p>
            <div style="text-align: right; margin: 0">
              <el-button size="small" text @click="scope.row.visible = false"
                >取消</el-button
              >
              <el-button
                size="small"
                type="primary"
                @click="confirmDelete(scope.$index)"
                >确认</el-button
              >
            </div>
            <template #reference>
              <el-button size="small" type="danger" @click="handleDelete(scope)"
                >删除</el-button
              >
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import Heador from 'components/common/Heador/index.vue'
import { useGoodsStore } from '@/store/goods'
import { reactive, toRefs, toRaw, onUnmounted } from 'vue'
const useGoods = useGoodsStore()
const handleSelectionChange = () => {}

const handleChange = (data) => {}

console.log(useGoods.goods, 'useGoods')
const data = reactive({
  tableData: useGoods.goods,
  srcList: []
})

const handleDelete = (data) => {
  data.row.visible = true
}
const confirmDelete = (index: number) => {
  useGoods.deleteHandle(index)
}
const unsubscribe = useGoods.$onAction(({ name, store, after }) => {
  console.log(name, store)
  console.log(toRaw(store.goods).length, '111')
  after((result) => {
    console.log(result, 'result')
    console.log(toRaw(store.goods).length, '222')
  })
})

onUnmounted(() => {
  // 手动删除监听器
  unsubscribe()
})

const { tableData, srcList, visible } = toRefs(data)
</script>

<style lang="scss" scoped>
/* content1 */
.goods {
  width: 100%;
  margin-top: 40px;
  &-table {
    width: 952px;
    margin: 0 auto;
    background: #f3f3f3;
  }
}
</style>
