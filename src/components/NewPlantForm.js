import React, {useState} from "react";

function NewPlantForm({onAdd}) {
  const [formData, setFormData] = useState({name:"", image: "", price: ""})

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) =>onAdd(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={(e)=>setFormData({...formData, image:e.target.value})}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={(e)=>setFormData({...formData, price: parseInt(e.target.value)})}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
