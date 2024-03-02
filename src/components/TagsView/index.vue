<template>
    <div class="tags-container">
        <div class="tag-item">
            控制面板
        </div>
        <div v-for="(tag, index) in tags" :key="index" class="tag-item">
            {{ tag }}
            <span class="close-btn" @click="removeTag(index)">×</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tags = ref(['Tag 1', 'Tag 2', 'Tag 3']);

const removeTag = (index: number) => {
    tags.value.splice(index, 1);
};
</script>

<style scoped lang="less">
.tags-container {

    display: flex;
    align-items: center;
}

.tag-item {
    height: 30px;
    margin: 0px 6px;
    padding: 4px 8px;
    background-color: rgb(185, 170, 152);
    border-radius: 4px;
}

.close-btn {
    margin-left: 4px;
    cursor: pointer;
}
</style>
