import { Link, NavLink } from "react-router-dom"
import { Toaster, toast } from "react-hot-toast"
import { useState } from "react"
const Footer = () => {

  let [subscriptonEmail, setSubscriptonEmail] = useState("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubscription = (e) => {
      e.preventDefault()
      if (validateEmail(subscriptonEmail)){
        const text = "You have successfully subscribed us for latest updates. "
        sendSuccessToast(text)
      }
      else{
        const text = "Please enter a valid email address. "
        sendErrorToast(text)
      }

   
  }

  const sendSuccessToast = (text) => toast.success(text)
  const sendErrorToast = (text) => toast.error(text)
  return (
<footer className="bg-yellow-950 pb-16">
<Toaster/>
  <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="col-span-full lg:col-span-1">
        <a
          className="flex-none text-xl font-semibold text-white"
          href="#"
          aria-label="Brand"
        >
          🍻 Brewery
        </a>
        <p className="text-gray-100 mt-4">Our mission at Brewery Review System is to elevate your beer exploration journey. We are passionate about connecting you with the finest breweries across the globe and helping you share your unique experiences. Cheers to discovering new brews and forging connections in the world of craft beer!</p>
      </div>
      {/* End Col */}
      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Follow us</h4>
        <div className="mt-3 grid space-y-3">
        <p>
            <Link
              className="inline-flex gap-x-2 text-yellow-100 hover:text-gray-200"
              to="https://facebook.com/brewery"
            >
             Facebook
            </Link>
          </p>

          <p>
          <Link
              className="inline-flex gap-x-2 text-yellow-100 hover:text-gray-200"
              to="https://instagram.com/brewery"
            >
             Instagram
            </Link>
          </p>

         
    
    
        </div>
      </div>
      {/* End Col */}
      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Navigation</h4>
        <div className="mt-3 grid space-y-3">
        <p>
            <NavLink
              className="inline-flex gap-x-2 text-yellow-100 hover:text-gray-200"
              to="/"
            >
              Home
            </NavLink>
          </p>
          <p>
            <NavLink
              className="inline-flex gap-x-2 text-yellow-100 hover:text-gray-200"
              to="/search"
            >
Search            </NavLink>
          </p>
          <p>
            <NavLink
              className="inline-flex gap-x-2 text-yellow-100 hover:text-gray-200"
              to="/reviews"
            >
              Reviews
            </NavLink>
         
          </p>
          
    
        </div>
      </div>
      {/* End Col */}
      <div className="col-span-2">
        <h4 className="font-semibold text-gray-100">Stay up to date with Breweries near you</h4>
        <form>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div className="w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
              value={subscriptonEmail}
              onChange={(e)=> {setSubscriptonEmail(e.target.value)}}
                type="email"
                id="email-subscription"
                name="email"

                className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
                
              />
            </div>
            {subscriptonEmail== "" ?
              <button
              disabled
              className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-yellow-200  border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
              >
                  Subscribe
                </button>
                :

                <button
                  className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-yellow-600 hover:bg-yellow-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
              onClick={handleSubscription}
              >
                  Subscribe
                </button>

            }
          </div>
          <p className="mt-3 text-sm text-yellow-100">
          </p>
        </form>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-yellow-100">
          © 2023 Brewery | All rights reserved.
        </p>
      </div>
     
      {/* Social Brands */}
      <div>
        <Link
          className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
          to="https://facebook.com/brewery"

        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </Link>
      
        <Link
          className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
          to="https://twitter.com/brewery"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </Link>
      
      </div>
      {/* End Social Brands */}
    </div>
  </div>
</footer>
  )
}

export default Footer