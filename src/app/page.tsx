import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-gray-100 h-screen flex items-center justify-center">
    {/* {Left Side} */}
  <div className="text-3xl w-1/2 px-10">
    <Image src="/pictures/facebook.svg" width={300} height={300}  alt="FaceBook Logo" />
    <p className="text-black"></p>
    <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
  </div>
  {/* {Right Side} */}
  <div className="bg-white flex flex-col p-20 rounded-xl p-1/3 ">
    <input className="my-2 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Email Address Or Phone Number" />
    <input className="my-2 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Password" />
    <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">Log In</button>
    <p className="cursor-pointer text-blue-600 mt-2 mb-2 text-center hover:underline">Forgotten password?</p>
    <span className="my-2">
      <hr />
    </span>
    <button className="cursor-pointer bg-green-600 my-2 py-2 text-center text-lg font-bold text-white rounded-md hover:bg-green-700">Create new account</button>
  </div>
    </div>
  );
}
