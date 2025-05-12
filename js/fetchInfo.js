export async function fetchInfo() {
    const data = await axios.get("https://fakestoreapi.com/products")

    console.log(data);
    
    return data
    
}