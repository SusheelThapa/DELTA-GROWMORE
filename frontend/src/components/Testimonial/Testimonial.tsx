import microsoftImage from '../../images/microsoft.webp'
const Testimonial = () => {
  return (
    <>
      <div className="text-5xl text-center w-full mb-10 font-bold">
        Testimonials
      </div>
      <div className="testimonial-container w-full flex justify-center items-center gap-20">
        <div className="card h-[15rem] w-[18rem] rounded-md shadow-xl">
          <div className="header w-full h-[30%] mx-6 text-3xl">
            <img src={microsoftImage} alt="" className='h-full' />
          </div>
          <div className="desc h-[35%] mx-8 mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe odit est. Incidunt, odit maiores.
          </div>
          <div className="h-[20%] flex flex-row">
            <div className="personImage mr-5 flex justify-center items-center mx-5">


              <img src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png" alt="" className='rounded-full h-[80%] border-2 border-white mt-5' />

            </div>
            <div className="personDesc flex flex-col justify-center items-center h-">
              <div className="h-[50%] text-xl">
                Albert Hones
              </div>
              <div className="h-[20%] text-md  text-gray-600">
                UI Graphics Designer
              </div>
            </div>
          </div>
        </div>

        <div className="card h-[15rem] w-[18rem] rounded-md shadow-xl">
          <div className="header w-full h-[30%] mx-6 text-3xl flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Wcnk18R-LsOnIAz7B9rNbdkUd4ZpZWiv8g&usqp=CAU" alt="" className='h-[60%]' />
          </div>
          <div className="desc h-[35%] mx-8 mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe odit est. Incidunt, odit maiores.
          </div>
          <div className="h-[20%] flex flex-row">
            <div className="personImage mr-5 flex justify-center items-center mx-5">


              <img src="https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg" alt="" className='rounded-full h-[80%] border-2 border-white mt-5' />

            </div>
            <div className="personDesc flex flex-col justify-center items-center h-">
              <div className="h-[50%] text-xl">
                Albert Hones
              </div>
              <div className="h-[20%] text-md  text-gray-600">
                UI Graphics Designer
              </div>
            </div>
          </div>
        </div>

        <div className="card h-[15rem] w-[18rem] rounded-md shadow-xl">
          <div className="header w-full h-[30%] mx-6 text-3xl flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" alt="" className='h-[80%]' />
          </div>
          <div className="desc h-[35%] mx-8 mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe odit est. Incidunt, odit maiores.
          </div>
          <div className="h-[20%] flex flex-row">
            <div className="personImage mr-5 flex justify-center items-center mx-5">


              <img src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png" alt="" className='rounded-full h-[80%] border-2 border-white mt-5' />

            </div>
            <div className="personDesc flex flex-col justify-center items-center h-">
              <div className="h-[50%] text-xl">
                Albert Hones
              </div>
              <div className="h-[20%] text-md  text-gray-600">
                UI Graphics Designer
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Testimonial