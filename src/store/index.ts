import {defineStore} from "pinia";




export const useCounter = defineStore("counterId", {
    state() {
        return {
            counter: 0
        }
    },
    getters: {
        double(state) {
            return state.counter * 2
        }
    },
    actions: {
        increment() {
            this.counter++
        }
    }
})
