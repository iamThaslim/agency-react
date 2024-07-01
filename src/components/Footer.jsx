const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-4 py-10 gap-x-6 border-t border-neutral-950/10 pt-12  font-urbanist text-sm lg:flex-row lg:gap-y-0 lg:gap-x-6 lg:py-12 lg:text-lg">
      <div className="flex items-center gap-x-2">
        <img src="/images/icons/logo-edskai.png" alt="Company Logo" className="w-36 h-24" />
      </div>
      <p className="text-sm text-neutral-700">
        © 2024 Digital Agency. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;