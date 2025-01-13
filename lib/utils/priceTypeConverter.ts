import { MenuData } from "@/assets/store";


function priceConverter(items: MenuData[] ):MenuData[] {

    for (let item of items) {
        for (let key in item){
            if(key === 'price'){
                if(typeof item[key] === 'string') {
                    item[key] = Number(item[key].replace(".", ""))
                }
            }
        }
    }


    return items
}

export default priceConverter