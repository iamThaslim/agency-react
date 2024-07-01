const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of digital marketing services including SEO, PPC, and social media marketing."
    },
    {
      question: "How can I contact you?",
      answer: "You can contact us via email at abc@example.com or call us at +1 (555) 234-5678."
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday, 9 AM to 6 PM."
    },
    {
      question: "Where are you located?",
      answer: "We are located at Company Location."
    },
    {
      question: "Do you offer custom services?",
      answer: "Yes, we offer custom services tailored to your business needs."
    },
    {
      question: "How can I get a quote?",
      answer: "You can get a quote by contacting us through our website or calling us directly."
    }
  ]
  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <h2 className="text-center font-urbanist text-2xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title text-xl font-medium">{faq.question}</div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;