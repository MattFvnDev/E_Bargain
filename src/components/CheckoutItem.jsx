const CheckoutItem = ({ img, brand, model, quantity, price }) => (
    <li className="flex py-4">
      <div className="w-full flex items-center">
        <div className="shrink-0 h-16 w-16 mr-[2px] sm:mr-1">
          <img
            src={img}
            alt={`An image of ${brand} ${model}`}
            className="rounded-md object-cover object-center h-full w-full "
          />
        </div>
        <div className="flex-grow font-medium ">
          <p>{brand}</p>
          <p>{model}</p>
          <p className="text-gray-500 font-normal">x{quantity}</p>
        </div>
        <div className="self-center font-semibold text-lime-500">
          <p>${price.toFixed(2)}</p>
        </div>
      </div>
    </li>
  )


export default CheckoutItem