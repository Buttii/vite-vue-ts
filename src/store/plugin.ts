import {PiniaPluginContext} from "pinia";


const initStore = (ctx: PiniaPluginContext) => {
    const key = ctx.store.$id

    const state = localStorage.getItem(key)

    if(!!state) ctx.store.$state = JSON.parse(state)
}

export default (ctx: PiniaPluginContext) => {

    initStore(ctx)

    ctx.store.$subscribe(() => {
        const key = ctx.store.$id

        localStorage.setItem(key, JSON.stringify(ctx.store.$state))
    })

}


