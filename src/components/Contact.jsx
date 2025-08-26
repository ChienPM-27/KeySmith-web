import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Create FormData from form fields
    const formData = new FormData();
    const formElement = event.target.closest('.form-container') || event.target;
    
    // Get form values
    const nameInput = formElement.querySelector('input[name="Name"]');
    const emailInput = formElement.querySelector('input[name="Email"]');
    const messageInput = formElement.querySelector('textarea[name="Message"]');
    
    formData.append("Name", nameInput.value);
    formData.append("Email", emailInput.value);
    formData.append("Message", messageInput.value);
    formData.append("access_key", "99d8b320-570c-4fc2-8d03-bbc2c67403dc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Thank you for contacting us. We will get back to you soon.");
        // Reset form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      } else {
        console.log("Error", data);
        toast.error(data.message || "Something went wrong!");
        setResult("");
      }
    } catch (error) {
      console.log("Error", error);
      alert("Something went wrong!");
      setResult("");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id ='Contact'>
      <h1 className="text-center font-[Bebas_Neue] font-bold mb-6">
        <span className="block text-5xl sm:text-7xl ">Are you Enjoying?</span>
        <span className="block text-2xl sm:text-6xl font-extralight text-gray-600">
          Let's build the future together
        </span>
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>

      <div className='max-w-2xl mx-auto pt-8 w-full font-sans'>
        <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100 form-container'>
          <div>
            <div className='flex flex-wrap gap-6'>
                <div className='w-full md:w-1/2 md:flex-1 text-left'>
                    <label className='block text-gray-700 font-semibold mb-2'>Your Name</label>
                <input className='w-full border-2 border-gray-200 rounded-lg py-4
                  px-4 text-gray-700 placeholder-gray-400 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                  transition-all duration-200 hover:border-gray-300' 
                  type="text" name='Name' placeholder='Enter your name'
                  required/>
              </div>
                <div className='w-full md:w-1/2 md:flex-1 text-left'>
                    <label className='block text-gray-700 font-semibold mb-2'>Your Email</label>
                <input className='w-full border-2 border-gray-200 rounded-lg py-4
                  px-4 text-gray-700 placeholder-gray-400
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                  transition-all duration-200 hover:border-gray-300' 
                  type="email" name='Email' placeholder='Enter your email'
                  required/>
              </div>
            </div>
            <div className='my-6 text-left'>
              <label className='block text-gray-700 font-semibold mb-2'>Message</label>
              <textarea className='w-full border-2 border-gray-200 rounded-lg py-4
                  px-4 text-gray-700 placeholder-gray-400 h-48 resize-none
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                  transition-all duration-200 hover:border-gray-300'
              name="Message" placeholder='Write your message here...' required></textarea>
            </div>
            <div className='text-center'>
              <button 
                onClick={onSubmit}
                type="button"
                className='bg-gradient-to-r from-blue-600 to-blue-700 
                         hover:from-blue-700 hover:to-blue-800 
                         text-white font-semibold py-4 px-12 mb-6 rounded-lg 
                         transform transition-all duration-200 ease-in-out
                         hover:scale-105 hover:shadow-lg
                         disabled:opacity-70 disabled:cursor-not-allowed
                         disabled:transform-none focus:outline-none focus:ring-4 focus:ring-blue-300
                         min-w-[160px]'
                disabled={result === "Sending...."}
              >
                {result ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{result}</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact