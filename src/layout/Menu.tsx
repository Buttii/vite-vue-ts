import {defineComponent} from "vue";
import {ElMenu, ElMenuItem, ElSubMenu} from "element-plus";
import {asyncRoutes} from "@/router/async";
import {RouteRecordRaw, useRouter} from "vue-router";


interface Menu {
    name: string
    title: string
    children?: Menu[]
}

type MenuList = undefined | RouteRecordRaw[]


export default defineComponent({
    setup() {
        const {push} = useRouter()

        function getMenuList(list: MenuList) {
            return list?.filter(item => item?.meta?.navBar).map(item => {
                let result: Menu = {
                    name: item.name as string,
                    title: item?.meta?.title as string
                }
                if (item.children) {
                    let children = getMenuList(item.children)
                    if (!!children?.length) result.children = children
                }
                return result
            })
        }



        function getMenuVDom(list: Menu[]) {
            return list?.map(item => {
                if (!item?.children?.length) return <ElMenuItem index={item.name}>{item.title}</ElMenuItem>
                else return <ElSubMenu index={item.name}>{{
                    title: () => item.title,
                    default: () => getMenuVDom(item.children as Menu[])
                }}</ElSubMenu>
            })
        }


        function link(name:string) {
            push({name})
        }

        return () => (
            <ElMenu defaultActive={"index"} onSelect={link}>
                {getMenuVDom(getMenuList(asyncRoutes[0].children) as Menu[])}
            </ElMenu>
        )


    },


})
