const ContactForm = () => {
  return ( 
    
      <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
        <h1 className="card-title">What do you want to ask</h1>
        <form className="mt-6">
          <div className="flex-1">
            <label htmlFor="name" className="mb-2 block text-sm">Full Name</label>
            <input id="name" autoComplete="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
          </div>
          <div className="mt-6 flex-1">
            <label htmlFor="email" className="mb-2 block text-sm">Email address</label>
            <input id="email" autoComplete="email" type="email" placeholder="abcd@example.com" className="input input-bordered w-full" />
          </div>
          <div className="mt-6 w-full">
            <label htmlFor="message" className="mb-2 block text-sm">Message</label>
            <textarea id="message" autoComplete="message" className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
          </div>
          <button className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300">stay in touch</button>
        </form>
      </div>
   );
}
 
export default ContactForm;