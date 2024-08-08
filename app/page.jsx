import Image from 'next/image'
async function loadProducts() {
    const res = await fetch("http://dummyjson.com/products");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json()
}


export default async function Home() {
    let {products} = await loadProducts();
    return (
        <main>
            {
                products?.map(product =>
                    <div>
                        <Image width={500} height={500} src= {product.images[0] } alt={product.title}/>
                        <h3>{product.title}</h3>
                    </div>
                )
           }
         </main>
    );
};
