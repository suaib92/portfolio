import React from "react";

const Contact = () => {
  return (

    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {/* Heading for the contact section */}
            <h1 className="text-4xl font-bold text-center text-black">Contact Me</h1>

      {/* Form for user to submit their contact information */}
      <form action="https://getform.io/f/d579fca6-d64a-410b-a822-2499be89c786" method="POST" encType="multipart/form-data">
        {/* Name input field */}
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className=" flex flex-col">
            <label className=" uppercase text-sm py-2 text-white  font-semibold ">Name</label>
            <input
              className=" border-2 rounded-lg  p-3 flex border-gray-300"
              type="text"
              name="name"
              placeholder="Your Name..."
            />
          </div>

          {/* Phone number input field */}

          <div className=" flex flex-col">
            <label className=" uppercase text-sm py-2 text-white  font-semibold  ">Phone </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+1(879)384-3894"
              className=" border-2 rounded-lg  p-3 flex border-gray-300"
            />
          </div>

          

          <div className=" flex flex-col py-2">
            <label className=" uppercase text-sm py-2 text-white   font-semibold   ">Email</label>
            <input
              className=" border-2 rounded-lg  p-3 flex border-gray-300 "
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className=" flex flex-col py-2">
            <label className=" uppercase text-sm py-2 text-white   font-semibold  ">SubJect</label>
            <input  className=" border-2 rounded-lg  p-3 flex border-gray-300" name="subject" type="text"></input>
          </div>
          
        
        </div>
        <div className=" flex flex-col py-2">
            <label className=" uppercase text-sm py-2 text-white  font-semibold ">Message</label>
            <textarea className=" border-2 rounded-lg p-3" rows="10" name="message"></textarea>
          </div>
        <button className=" bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg ">
             Send Massage
            </button>
      </form>
    </div>
  );
};

export default Contact;
//
//In this updated code, I have added comments to explain the purpose of each section. These comments will provide you with a clear understanding of the code. Comments should be concise and stay focused, as this is very important for your career..</s>
