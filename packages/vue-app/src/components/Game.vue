<template>
    <div style="padding: 20px">
        <h1>Bring Down the House</h1>
        <div class="popup-inner">POPUP</div>
        <a-card hoverable style="width: 300px">
            <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
            <template class="ant-card-actions" #actions>
              <setting-outlined key="setting" />
              <edit-outlined key="edit" />
              <ellipsis-outlined key="ellipsis" />
            </template>
            <a-card-meta title="Card title" description="This is the description">
              <template #avatar>
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </template>
            </a-card-meta>
        </a-card>              
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Game',
    setup() {
        
    },
    methods: {
        popup: function() {

        }
    }
})
</script>
