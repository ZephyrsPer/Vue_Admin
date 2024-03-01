import { defineStore } from "pinia";

const useThemeStore = defineStore({
    id: "theme",
    state: () => {
        return {
            isCollapsed: false,
        };
    },
    getters: {},
    actions: {
        changeIsCollapsed() {
            this.isCollapsed = !this.isCollapsed;
        },
    },
});

export default useThemeStore;
/*  */