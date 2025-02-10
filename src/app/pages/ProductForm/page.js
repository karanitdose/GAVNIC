

// "use client";
// import { useState } from "react"; 
// import "./productform.css";

// import Link from "next/link";
// import Footer from "@/app/components/Footer/page";
// import Header from "@/app/components/Header/page";

// const ProductForm = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (images.length > 5) {
//       alert("You can upload a maximum of 5 images at a time.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("category", category);
//     images.forEach((image) => formData.append("images", image));

//     try {
//       const response = await fetch("https://api.gavnic.com/api/products", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Product created:", data);
//         alert("Product added successfully");
//         setName("");
//         setDescription("");
//         setPrice("");
//         setCategory("");
//         setImages([]);
//       } else {
//         console.error("Failed to create product");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//         <Header />
//       <form className="form_maincontainer" onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <select
//   value={category}
//   onChange={(e) => setCategory(e.target.value)}
//   required
// >
//   <option value="">Select Category</option> 
//   <option value="LAPTOP">Laptop</option> 
//   <option value="BATTERY">Battery</option>
//   <option value="DESKTOP">Desktop</option>
//   <option value="MONITOR">Monitor</option>
//   <option value="KEYBOARD">Keyboard</option>
//   <option value="MOUSE">Mouse</option>
//   <option value="HEADPHONES">Headphones</option>
//   <option value="PRINTER">Printer</option>
//   <option value="SCANNER">Scanner</option>
//   <option value="SPEAKERS">Speakers</option>
//   <option value="GRAPHICS_CARD">Graphics Card</option>
//   <option value="PROCESSOR">Processor</option>
//   <option value="RAM">RAM</option>
//   <option value="MOTHERBOARD">Motherboard</option>
//    <option value="DATA_CABLE">DATA CABLE</option>
//    <option value="CHARGER">PHONE CHARGER</option>
   
// </select>

//         </div>
//         <div>
//           <label>Images:</label>
//           <input
//             type="file"
//             multiple
//             onChange={(e) => setImages(Array.from(e.target.files))}
//             required
//           />
//         </div>
//         <button className="form_button" type="submit">
//           Create Product
//         </button>

//        <Link href="/pages/viewdeleteproducts" >
//           <button style={{background:'#E64040',marginTop:'10px' ,marginBottom:'40px' ,fontWeight:'bold'}}  className="form_button" >
//           View&Delete Product
//         </button>
//        </Link>
//       </form>
//       <Footer />
//     </div>
//   );
// };

// export default ProductForm;



"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length > 5) {
      alert("You can upload a maximum of 5 images at a time.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await fetch("https://api.gavnic.com/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Product added successfully");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImages([]);
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <form 
        className="bg-white shadow-lg rounded-2xl p-6 mt-10 w-96 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-[#9333EA] mb-4 text-center">Add New Product</h2>
        <div className="mb-4">
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Description:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Price:</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Category:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="LAPTOP">Laptop</option>
            <option value="BATTERY">Battery</option>
            <option value="DESKTOP">Desktop</option>
            <option value="MONITOR">Monitor</option>
            <option value="KEYBOARD">Keyboard</option>
            <option value="MOUSE">Mouse</option>
            <option value="HEADPHONES">Headphones</option>
            <option value="PRINTER">Printer</option>
            <option value="SCANNER">Scanner</option>
            <option value="SPEAKERS">Speakers</option>
            <option value="GRAPHICS_CARD">Graphics Card</option>
            <option value="PROCESSOR">Processor</option>
            <option value="RAM">RAM</option>
            <option value="MOTHERBOARD">Motherboard</option>
            <option value="DATA_CABLE">DATA CABLE</option>
            <option value="CHARGER">PHONE CHARGER</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Images:</label>
          <input
            type="file"
            multiple
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setImages(Array.from(e.target.files))}
            required
          />
        </div>
        <button
          className="w-full bg-[#9333EA] text-white p-2 rounded-lg hover:bg-purple-700"
          type="submit"
        >
          Create Product
        </button>
        <Link href="/pages/viewdeleteproducts">
          <button
            className="w-full mt-3 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 font-bold"
            type="button"
          >
            View & Delete Product
          </button>
        </Link>
      </form>
      <Footer />
    </div>
  );
};

export default ProductForm;
