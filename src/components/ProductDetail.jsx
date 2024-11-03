import { images, products } from '../constants';
import { BsTagsFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Description from './Description';
import MightLike from './MightLike';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart } from '../slices/CartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);
  const cartProducts = useSelector(state => state.cart.products) || [];
  const isInCart = cartProducts.some(product => product._id === id);



  useEffect(() => {
    const foundProduct = products.find((item) => item._id === id);
    console.log("Found Product:", foundProduct);

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image);
    }

    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product || !mainImage) {
    return <p className='pt-[25%] md:pt-[5%] pb-[5%] px-3 lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary text-brown1 text-2xl'>Product not found</p>;
  }

  const handleAddCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    } else {
      console.error("Product is undefined!");
    }
  }

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    console.log(`Updating quantity for ID: ${id}, New Quantity: ${newQuantity}`);

    if (newQuantity >= 0) {
      dispatch(updateCart({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className='p-[5%] xl:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% text-brown3 font-primary'>
      <div className='py-8 flex items-center gap-2'>
        <button onClick={() => navigate('/')} className='flex items-center justify-center gap-2 text-md font-semibold'>
          Home
          <BsChevronRight size={18} />
        </button>

        <button onClick={() => navigate('/shop')} className='flex items-center justify-center gap-2 text-md font-semibold'>
          Shop
          <BsChevronRight size={18} />
        </button>

        <p className='text-md font-bold capitalize truncate sm:max-w-[150px]'>
          {product.name}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 border-b-[1px] border-b-brown3 pb-16 mb-3">
        <div className="flex-1">
          <div className="border-[1px] border-brown3 p-4 max-w-[500px] max-h-[630px]">
            <img src={mainImage} alt={product.title}
              className="w-full h-auto object-cover"
              onError={(e) => e.target.src = '/fallback-image.png'}
            />
          </div>

          <div className="flex items-center gap-2 mt-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`border ${mainImage === image ? 'border-brown3' : 'border-transparent'} p-0`}
              >
                <img src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[100px] md:w-[118px] h-20 md:h-32 lg:h-20 xl:h-32 object-cover"
                  onError={(e) => e.target.src = '/fallback-thumbnail.png'}
                />
              </button>
            ))}
          </div>

        </div>
        <div className="space-y-3 flex-1">
          <h1 className='text-xl md:text-2xl font-light capitalize'>{product.name}</h1>

          <div className="flex divide-x-2 divide-brown3 gap-2">
            <p className="font-semibold text-lg">{product.size}</p>

            <div className="flex items-center gap-2 pl-2">
              {Array(4).fill("").map((_, i) => (
                <BsStarFill key={i} size="16px" />
              ))}
              <p fontSize={{ base: "12px", lg: "16px" }} fontWeight="400" color="#222222">
                4.0
              </p>
            </div>

          </div>

          <div className="flex items-center gap-1">
            <BsTagsFill />
            <p className="text-sm md:text-lg 2xl:text-2xl">
              89 people have purchased this product
            </p>
          </div>

          <div className='pb-3 flex items-center gap-4'>
            <input
              type="number"
              className="focus:outline-none focus:border-none w-20 bg-brown3 text-nude1 rounded-lg p-2 text-center"
              value={product.quantity}
              min="0"
              onChange={(e) => handleQuantityChange(product._id, e)}
            />

            <p>Current Stock:</p>
          </div>

          <button onClick={handleAddCart} className={`w-full h-[40px] mt-6 ${isInCart ? 'bg-brown4 text-nude' : 'bg-brown3 text-nude1 hover:border-2 hover:border-brown3 hover:bg-transparent hover:text-brown3'}  hover:-translate-y-2 duration-300 transition-all cursor-pointer`}>
            {isInCart ? 'product in cart' : 'Add to Cart'}
          </button>
          <p>Amount & Method</p>
          <Description />
        </div>
      </div>

      <MightLike />
    </div>
  );
}

export default ProductDetail;
