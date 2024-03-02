<template>
    <div class="tags-container">
        <div class="tag-item" v-for="(tag, index) in tags" :key="index">
            <router-link :to="tag.path" class="tag-link">{{ tag.name }}</router-link>
            <span class="close-btn" @click="removeTag(index)">×</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { RouteLocationNormalizedLoaded } from 'vue-router';

interface Tag {
    name: string;
    path: string;
}

const tags = ref<Tag[]>([
    { name: '控制面板', path: '/dashboard' },
]);

const router = useRouter();

const removeTag = (index: number) => {
    tags.value.splice(index, 1);
};

watch(
    () => router.currentRoute.value.meta,
    (newMeta: RouteLocationNormalizedLoaded['meta']) => {
        const existingTag = tags.value.find(tag => tag.path === router.currentRoute.value.path);
        if (!existingTag && newMeta && newMeta.title) {
            tags.value.push({ name: newMeta.title as string, path: router.currentRoute.value.path });
        }
    }
);
</script>

<style scoped lang="less">
.tags-container {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    /* background-color: #f0f0f0; */
}

.tag-item {
    display: inline-flex;
    align-items: center;
    background-color: #e0e0e0;
    padding: 4px 8px;
    border-radius: 20px;
    margin: 4px;
}

.tag-link {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

.tag-link:hover {
    color: #666;
}

.close-btn {
    margin-left: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    line-height: 1;
    color: #999;
    transition: color 0.3s ease;
}

.close-btn:hover {
    color: #333;
}
</style>
