function ProductCard(props) {
    let { id, userId, title, due_on, status } = props;
    console.log(id, userId, title, due_on, status)

    return (

        <div className="product-card" >
            <h3>{`Id: ${id}`}</h3>
            <h3>{`userId: ${userId}`}</h3>
            <h3>{`Title: ${title}`}</h3>
            <h3>{`Due_on: ${due_on}`}</h3>
            <h3>{`Status: ${status}`}</h3>

        </div>
    );
}

export default ProductCard;