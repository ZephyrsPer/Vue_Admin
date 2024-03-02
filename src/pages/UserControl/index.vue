<template>
    <!-- <div class="con"> -->
        <!-- 卡片视图区域 -->
        <el-card>
            <el-row :gutter="20">
                <el-col :span="8">
                    <!-- 搜索与添加区域 -->
                    <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
                        <template #append>
                            <el-button @click="getUserList">
                                <el-icon>
                                    搜索
                                    <search />
                                </el-icon>
                            </el-button>
                        </template>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
                </el-col>
            </el-row>
            <!-- 用户列表区域  -->
            <el-table :data="userlist">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="姓名" prop="username"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="电话" prop="mobile"></el-table-column>
                <el-table-column label="角色" prop="role_name"></el-table-column>
                <el-table-column label="状态" prop="mg_state">

                    <template v-slot="scope">
                        <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180px">

                    <template v-slot="scope">
                        <!-- 修改按钮 -->
                        <el-button type="primary" v-model="scope.row.Id" size="mini">
                            <el-icon>
                                编辑
                                <edit />
                            </el-icon>
                        </el-button>
                        <!-- 删除按钮 -->
                        <el-button type="danger" size="mini">
                            <el-icon>
                                删除
                                <delete />
                            </el-icon>
                        </el-button>
                        <!-- 分配角色按钮 -->
                        <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                            <el-button type="warning" size="mini">
                                设置
                                <el-icon>
                                    <setting />
                                </el-icon>
                            </el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 页面区域 -->
            <el-pagination :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange">
            </el-pagination>
            <!-- 添加用户的对话框 -->
            <el-dialog v-model="addDialogVisible" title="添加用户" width="50%" :before-close="handleClose">
                <!-- 内容主体区域 -->
                <el-form ref="addFormRef" :model="addForm" :rules="addFormRules" label-width="70px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="addForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="addForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="addForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机" prop="mobile">
                        <el-input v-model="addForm.mobile"></el-input>
                    </el-form-item>
                </el-form>
                <!-- 底部区域 -->

                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="addDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="addUser">确定</el-button>
                    </span>
                </template>
            </el-dialog>
        </el-card>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

const queryInfo = ref({
    query: '',
    pagenum: 1,
    pagesize: 2
});

const userlist = ref([
    { username: 'John Doe', email: 'john@example.com', mobile: '1234567890', role_name: '普通用户', mg_state: true },
    { username: 'Jane Doe', email: 'jane@example.com', mobile: '0987654321', role_name: '管理员', mg_state: false }
]);
const total = ref(2); // 初始用户数为2，因为我们添加了两个静态数据
const addDialogVisible = ref(false);

const addForm = ref({
    username: '',
    password: '',
    email: '',
    mobile: ''
});

const addFormRules = ref({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名的长度在 3 - 10个字符之间', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 15, message: '密码的长度在 6 - 15个字符之间', trigger: 'blur' }
    ],
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    mobile: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '手机号长度在11个字符', trigger: 'blur' }
    ]
});

const getUserList = async () => {
    // 这里应该是模拟获取用户列表的逻辑，因为这是静态页面
};

const handleSizeChange = (newSize) => {
    queryInfo.value.pagesize = newSize;
    getUserList();
};

const handleCurrentChange = (newPage) => {
    queryInfo.value.pagenum = newPage;
    getUserList();
};

const userStateChanged = async (userinfo) => {
    // 这里应该是模拟更新用户状态的逻辑，因为这是静态页面
};

const addUser = () => {
    // 这里应该是模拟添加用户的逻辑，因为这是静态页面
    const newUser = {
        username: addForm.value.username,
        email: addForm.value.email,
        mobile: addForm.value.mobile,
        role_name: '普通用户',
        mg_state: true // 默认状态为启用
    };
    userlist.value.push(newUser); // 将新用户添加到用户列表
    total.value += 1; // 总数加一
    addDialogVisible.value = false; // 关闭对话框
    // 清空表单
    addForm.value.username = '';
    addForm.value.password = '';
    addForm.value.email = '';
    addForm.value.mobile = '';
};
</script>

<style lang="less" scoped>
.con {
    margin: 20px 20px;
}
</style>
