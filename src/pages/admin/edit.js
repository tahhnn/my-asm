import { useState,useEffect,router } from "../../../lib";
import { v4 as uuidv4 } from "uuid";
const editProduct = function ({id}) {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/books/${id}`)
        .then(function (response) {
            return response.json();
        }).then((response) => setBooks(response))
    },[])
    console.log(books.name);
  useEffect(() => {
    const form = document.querySelector("form");
    const prd = form.querySelector(".prd");
    const price = form.querySelector(".price");
    const rate = form.querySelector(".rate");
    const imgData = form.querySelector(".img").files[0];
    const key = "vqmbmvm1";
    const URLCloud = "https://api.cloudinary.com/v1_1/diklknmpm/image/upload";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      formData.append("file", imgData);
      formData.append("upload_preset", key);

      const newPrd = {
        name: formData.get("name"),
        list_price: formData.get("price"),
        rating_average: formData.get("rate"),
      };
      fetch(`http://localhost:3000/books/${books.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPrd),
      }).then(() => {
        router.navigate("/dashboard");
      });
    });
  });

  return /*html*/ `
   
  
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Thêm sản phẩm</h1>
  
     
    </div>
  
    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="name" class="sr-only">Tên sản phẩm</label>
  
        <div class="relative">
          <input
            type="text"
            class="prd w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter name..."
            name="name"
            value="${books.name}"
          />
  
        
        </div>
      </div>
  
      <div>
        <label for="img" class="sr-only">Ảnh</label>
        <img width="100" src="${books.images ? books.images[0] : ''}"/>
        <div class="relative">
          <input
            type="file"
            class="img w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
            name="img"
          />
        </div>
        <label for="rate" class="sr-only">Đánh giá</label>
  
        <div class="relative">
          <input
            type="number"
            class="rate w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" min="0" max="5" step=".1"
            placeholder="Rate Ratio"
            name="rate"
            value=${books.rating_average}
          />
  
        
        </div>
      </div>
  
      <div>
        <label for="desc" class="sr-only">Gía</label>
  
        <div class="relative">
          <input
            type="text"
            class="price w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter price"
            name="price"
            value="${books.list_price}"
          />
        </div>
      </div>
  
      <div class="flex items-center justify-between">
  
        <button
          type="submit"
          class="btn inline-block rounded-lg mx-auto bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          Thêm sản phẩm
        </button>
      </div>
    </form>
  </div>
    
    `;
};
export default editProduct;
