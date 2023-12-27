function Contact() {
  return (
    <div className="max-w-[600px] mx-auto px-4 my-[50px] md:my-[136px] text-center">
      <h1 className="text-[#1D263A] text-2xl md:text-3xl lg:text-4xl font-semibold">
        Subscribe to our
      </h1>
      <h1 className="text-[#1D263A] mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold">
        newsletter to get updated
      </h1>
      <h4 className="text-[#1D263A] text-base font-normal">
        Get our latest update on your inbox. With lots of unique blocks, you can
        easily build a page without coding. Build your next consultancy website
        within few minutes.
      </h4>
      <div className="my-[20px] md:my-[30px] flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter email address"
          className="p-3 w-[240px] outline-none border-solid border-[1px]  border-[rgb(223,223,223)] border-r-0 rounded-l-lg"
        />
        <button className="bg-[#20BFA9] border-solid border-[1px]  border-[#20BFA9] p-4 px-8 font-medium text-white text-xs rounded-r-lg hover:opacity-80">
          SUBSCRIBE
        </button>
      </div>
      <h3 className="text-[#1D263A] text-base font-normal">
        We don’t spam at all, our promise!
      </h3>
    </div>
  );
}

export default Contact;
