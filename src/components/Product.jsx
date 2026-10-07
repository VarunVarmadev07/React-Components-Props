function Product(props){
    return(
        <>
        <h2>Product: {props.name}</h2>
        <p>Price: {props.price}</p>
        <p>Category: {props.category}</p>
        </>
    )
}

export default Product;