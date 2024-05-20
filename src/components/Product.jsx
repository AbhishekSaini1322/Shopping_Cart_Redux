

const Product = ({post}) => {
  return( 
   <div>
    <div>
      <p>{post.title}</p>
    </div>

    <div>
      <p>{post.decription}</p>
    </div>

    <div>
      <img src={post.image}/>
    </div>

    <div>
      <p>{post.price}</p>
    </div>

    <button>
      {
        true ? <p>Remove Item</p> : <p>Add to Cart</p>
      }
    </button>


   </div>);
};

export default Product;
