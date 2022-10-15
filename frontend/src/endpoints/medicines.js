import axios from "axios";


async function getMedicines(productName){
    return await axios.get("http://172.23.0.3:8000/api/medicines/?product_name=" + productName)
}


async function getMedicine(productSlugName){
    return await axios.get("http://172.23.0.3:8000/api/medicine/" + productSlugName)
}


export {
    getMedicines,
    getMedicine
}