export async function fetchInfo() {
    const data = await axios.get("https://fakestoreapi.com/products")
    
    return data
    
}