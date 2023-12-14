const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-white text-neutral-content flex justify-around">
  <nav>
    <header className="footer-title text-black">Services</header> 
    <a className="link link-hover text-black">Branding</a>
    <a className="link link-hover text-black">Design</a>
    <a className="link link-hover text-black">Marketing</a>
    <a className="link link-hover text-black">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-black">Company</header> 
    <a className="link link-hover text-black">About us</a>
    <a className="link link-hover text-black">Contact</a>
    <a className="link link-hover text-black">Jobs</a>
    <a className="link link-hover text-black">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-black">Legal</header> 
    <a className="link link-hover text-black">Terms of use</a>
    <a className="link link-hover text-black">Privacy policy</a>
    <a className="link link-hover text-black">Cookie policy</a>
  </nav>
 
</footer>
<hr />
<p className=" p-10 bg-white text-black text-center" ><small >© 2021 Qode Interactive, All Rights Reserved</small></p>



        </div>
    );
};

export default Footer;