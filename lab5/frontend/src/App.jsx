function Hello() {
  return (
    <>
      <h1>Learnig React is ver y Easy.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        deleniti fuga dolore blanditiis ipsa vitae non explicabo molestias ut
        nobis, consequatur beatae esse.
      </p>
    </>
  );
}
function Product(props) {
  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mobile Product Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-5 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
        <div className="w-48 h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.ceY5Gpo2pr8lf1oJkd4QzAHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Mobile Phone"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {props.mobile || props.name || "Smartphone"}
        </h2>
        <p className="text-lg font-semibold text-indigo-600 mb-1">
          Price: ₹{props.price || "20,600"}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
          <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-medium">
            ⭐ Rating: {props.rating || "4.1"}
          </span>
          <span>💬 Reviews: {props.review || "1,200"}</span>
        </div>
      </div>

      {/* Laptop Product Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-5 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
        <div className="w-48 h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
          <img
            src={
             
              "https://tse3.mm.bing.net/th/id/OIP.tJMQbtNJWwshvaiXqHljwQHaE8?r=0&w=6960&h=4640&rs=1&pid=ImgDetMain&o=7&rm=3"
            }
            alt="Laptop"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {props.laptopName || "Laptop"}
        </h2>
        <p className="text-lg font-semibold text-indigo-600 mb-1">
          Price: ₹{props.priceLaptop || "80,000"}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
          <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-medium">
            ⭐ Rating: {props.ratingLaptop || "4.6"}
          </span>
          <span>💬 Reviews: {props.reviewLaptop || "12k"}</span>
        </div>
      </div>
    </div>
  );
}

function App(props) {
  const item = {
    name: "Mobile Phone",
    price: 250000,
    rating: 4.6,
    review: 1500,
  };
  return (
    <>
      <Product {...item} />
      <Hello />
      <Hello />
      <h1 className="text-red-500 text-3xl"> Hello World</h1>
      <h1>i m kohli </h1>
      <h2>2500320100043 </h2>
    </>
    // fragments are used for faster reloading of site (if very bigger) we also use the div instedd of it.
  );
}
export default App;

// when any JS function retrun HTML contentes directley,called components.
// comopnent must return HTML and start with capital latters(CamelCase)
