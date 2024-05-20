import React from 'react'

function ClientForm() {
  // const fetcher = useFetcher();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   fetcher.submit(formData, { method: "post", action: "/api/clients" });
  //   setFormData({
  //     name: "",
  //     email: "",
  //   });
  // };
  return (
    <form method="post" className="font-Poetsen max-w-md mx-auto mt-8">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        // value={formData.name}
        // onChange={handleChange}
        required
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#9DDE8B]"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        // value={formData.email}
        // onChange={handleChange}
        required
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#9DDE8B]"
      />
    </div>
    <div className="flex justify-center">
      <button type="submit" className="bg-[#9DDE8B] text-white py-2 px-4 rounded-md hover:bg-[#628b56] focus:outline-none focus:bg-[#628b56]">Add Client</button>
    </div>
  </form>
  )
}

export default ClientForm