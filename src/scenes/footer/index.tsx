import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima quo sint? Ab quae, ratione.
            Consequatur, explicabo, voluptatum. Assumenda culpa cumque eius iure magni molestias omnis quo sed voluptas
            voluptatem.
          </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Massa orci senectus</p>
          <p>Uoajsdakljsfndoj</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact US</h4>
          <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda</p>
          <p className="my-5">(224)-410-2872</p>
          <p className="my-5">(2654)-227-3381</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
