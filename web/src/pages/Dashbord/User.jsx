import React, { useState ,useEffect } from 'react'
import user from "../../assets/icons/changepic.svg"
import MenuDashbord from '../../Components/MenuDashbord'
import axios from "axios"
import secure from "../../assets/icons/secure.svg"
import cle from "../../assets/icons/cle.svg"
import eye from "../../assets/icons/eye2.svg"

const User = () => {
  
   /* const [users,setUsers]=useState([])
     useEffect (()=> {
       axios.get('https://json-placeholder.mock.beeceptor.com/users').then(res=> {
         console.log('Fetched Users:', res.data);
         setUsers(res.data)
       })
       . catch (err=> {
         console.log('Error fetching',err)
       })
     },[])*/
     const [formData, setFormData] = useState({
      legalName: "QQ",
      email: "h***o@gmail.com",
      phone: "9999999999999",
      id: "",
      address: "",
      emergencyContact: "",
    });
  
    const [editField, setEditField] = useState(null);
  
    const handleChange = (event, field) => {
      setFormData({ ...formData, [field]: event.target.value });
    };
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result); // Update the image preview
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleClick = () => {
      document.getElementById("fileInput").click(); // Trigger file input click
    };

  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr]'>
      <div className='grid'><MenuDashbord activeItem={"User"}/></div>
      <div className=' bg-gray-50  '>
        <div className='flex lg:gap-60 lg:justify-normal justify-between  items-center py-4'>
         <p className='md:text-2xl text-xl text-[#484848] font-bold md:ml-8 ml-6'>My information</p>
         <div className="flex  items-center">
      <div
        className="w-[65px] h-[65px] rounded-full border-2 border-orange-500 flex items-center  overflow-hidden"
        onClick={handleClick}
      >
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : ""}
      </div>
      <button
        className="px-4 py-2 font-semibold text-[15px] "
        onClick={handleClick}
      >
        Change Picture
      </button>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
        </div>
        <div className='grid lg:grid-cols-2  mt-6 md:ml-8 ml-6 lg:mr-0 mr-4'>
        <div className="bg-inherit">
      {Object.keys(formData).map((field) => (
        <div key={field} className="mb-10  ">
          <label className="text-[16px] capitalize">
            {field.replace(/([A-Z])/g, " $1")}
          </label>
          <div className="flex justify-between mt-1">
            {editField === field ? (
              <input
                type="text"
                className="border-none text-[#717171]  text-[13px] bg-inherit  px-2 py-1  focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[field] || ""}
                onChange={(event) => handleChange(event, field)}
                onBlur={() => setEditField(null)} // Exit edit mode on blur
              />
            ) : (
              <>
                <span className='text-[#717171] text-[13px]'>{formData[field] || "Not provided"}</span>
                <button
                  className="text-[#222222] text-[14px]  underline font-semibold"
                  onClick={() => setEditField(field,
                    console.log(formData) //getting data when edit or add 
                  )}
                >
                  {formData[field] ? "Edit" : "Add"}
                  
                </button>
              </>
            )}
          </div>
        </div>
      ))}
        </div>
        <div className='flex flex-col gap-4 border border-[#DDDDDD] rounded-lg   mx-32 max-lg:hidden'>
         <div className='bg-inherit flex flex-col px-4 gap-4 py-4  '>
        <div>
        <img src={secure} alt=""  />
        </div>
       <div className='flex flex-col gap-3'>
       <p className='text-[18px] font-bold'>Why isn't my info shown <br /> here?</p>
       <p className='text-[14px] text-[#717171]'>We are hiding some account details to <br />protect your identity.</p>
       </div>
         </div>
         <span className='h-[1px] w-[80%] bg-[#DDDDDD] ml-7'></span>
         <div className='bg-inherit flex flex-col px-4 gap-4 py-4  '>
        <div>
        <img src={cle} alt=""  />
        </div>
       <div className='flex flex-col gap-3'>
       <p className='text-[18px] font-bold'>Which details can be edited?</p>
       <p className='text-[14px] leading-5 text-[#717171]'>Details Serbili uses to verify your <br /> identity can't be cahnged.Contct info <br />and some personal details can be <br />edited,but we may ask you verify your <br /> identity the next time you book or <br />
       create a listing.</p>
       </div>
       <span className='h-[1px] w-[90%] bg-[#DDDDDD] ml-3 mt-6 '></span>
         </div>
         <div className='bg-inherit flex flex-col px-4 gap-4 py-4  '>
        <div>
        <img src={eye} alt=""  />
        </div>
       <div className='flex flex-col gap-3'>
       <p className='text-[18px] font-bold'>What info is shared with <br />others?</p>
       <p className='text-[14px] text-[#717171]'>Serbili only releases contact <br /> information for costumers after <br />the orders</p>
       </div>
         </div>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default User
