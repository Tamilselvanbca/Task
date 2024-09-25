import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const LandingPage = () => {
  return (
    <div className="bg-light ">
      {/* Header View */}
      <header className="d-flex justify-content-between align-items-center px-5 bg-primary">
        <img src="" alt="abc" className="rounded-circle bg-light" />
        <div class="position-relative">
    <img src="/src/assets/image 20.png" alt="Logo" class="img-fluid rounded" />
    <div class="position-absolute top-50 start-50 translate-middle text-white text-center p-2 rounded">
        Bills Presentment Adhoc Payments,Collections,Donations All at one Place
    </div>
</div>
        <button className="btn btn-light text-black">
          <img className="p-1" src="/src/assets/Vector.png" alt="Login" /> Login
        </button>
      </header>
{/* Card View */}
<section className="mt-4">
  <div className="row">
    <div className="col-md-3 col-sm-4">

    
      {/* Sidebar */}
      <ul className="card nav nav-pills mx-5 flex-column h-75 mt-1 mb-0 gap-2 border border-3 border-top-0 border-start-0 rounded shadow-sm">
        <li className="nav-item">
          <img src="/src/assets/navIcons/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1.png" className="m-2" alt="Home" />
          <a href="#" className="text-decoration-none text-black">Home</a>
        </li>
        <li className="nav-item">
          <img src="/src/assets/navIcons/Frame.png" className="m-2" alt="Offers" />
          <a href="#" className="text-decoration-none text-black">Offers</a>
        </li>
        <li className="nav-item">
          <img src="/src/assets/navIcons/quiz_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1.png" className="m-2" alt="FAQs" />
          <a href="#" className="text-decoration-none text-black">FAQs</a>
        </li>
        <li className="nav-item">
          <img src="/src/assets/navIcons/info_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1.png" className="m-2" alt="Help & Support" />
          <a href="#" className="text-decoration-none text-black">Help & Support</a>
        </li>
      </ul>
    </div>

    {/* Menu */}
    <div className="card col-md-8 mt-1 pt-3 col-sm-7 border border-3 shadow-sm rounded border-top-0 border-start-0">
  <div className="row ">
    {[
      { name: 'Mobile Prepaid', img: '/src/assets/menu/phone.svg.png' },
      { name: 'Mobile Postpaid', img: '/src/assets/menu/mobile-postpaid.svg.png' },
      { name: 'Broadband Postpaid', img: '/src/assets/menu/broadband1.svg.png' },
      { name: 'Landline Postpaid', img: '/src/assets/menu/landline-postpaid1.svg.png' },
      { name: 'DTH', img: '/src/assets/menu/dth1.svg.png' },
      { name: 'Electricity', img: '/src/assets/menu/Electricity1.svg.png' },
      { name: 'Gas', img: '/src/assets/menu/PipedNaturalGas.svg.png' },
      { name: 'LPG Gas', img: '/src/assets/menu/gas1.svg.png' },
      { name: 'Housing Society', img: '/src/assets/menu/housing-society1.svg.png' },
      { name: 'Cable TV', img: '/src/assets/menu/cable1.svg.png' },
      { name: 'Education Fees', img: '/src/assets/menu/education1.svg.png' },
      { name: 'Insurance', img: '/src/assets/menu/insurance1.svg.png' },
      { name: 'Municipal Services', img: '/src/assets/menu/municipal-services.svg.png' },
      { name: 'Hospital', img: '/src/assets/menu/hospital.svg.png' },
      { name: 'Loan Repayment', img: '/src/assets/menu/loan-repayment1.svg.png' },
      { name: 'Water', img: '/src/assets/menu/Water1.svg.png' },
      { name: 'Subscription', img: '/src/assets/menu/subscription-fees.svg.png' },
      { name: 'Credit Card', img: '/src/assets/menu/credit-card.svg.png' },
      { name: 'Fastag', img: '/src/assets/menu/fastag.svg.png' },
      { name: 'Health Insurance', img: '/src/assets/menu/healthinsurance.svg.png' },
      { name: 'Life Insurance', img: '/src/assets/menu/social-services.svg.png' },
      { name: 'Municipal Taxes', img: '/src/assets/menu/municipality-taxes.svg.png' },
      { name: 'Clubs and Associations', img: '/src/assets/menu/clubhouse.svg.png' },
      { name: 'Recurring Deposit', img: '/src/assets/menu/recurring-deposits.svg.png' },
      { name: 'Metro', img: '/src/assets/menu/metro.svg.png' },
      { name: 'Rental', img: '/src/assets/menu/Rental.svg.png' },
      { name: 'NCMC Recharge', img: '/src/assets/menu/NCMC.svg.png' },
      { name: 'Hospital and Pathology', img: '/src/assets/menu/Hospital-Pathology.svg.png' },
      { name: 'Donation', img: '/src/assets/menu/donation.svg.png' },
      { name: 'Prepaid Meter', img: '/src/assets/menu/Electricity1.svg.png' }
    ].map((service, index) => (
      <div key={index} className="col-6 col-md-2 p-2">
        <div className="d-flex flex-column align-items-center">
          <img src={service.img} alt={service.name} className="mb-2" width="24" height="24" />
          <p>{service.name}</p>
        </div>
      </div>
    ))}
  </div>
</div>


  </div>
</section>

{/* Footer */}
<footer className="bg-white shadow-sm py-4 mt-4">
  <div className="container">
    <div className="row">

      <div className="d-flex justify-content-between col-md-12 mb-5 ">
        <img src="\src\assets\footerimg\image 16.png" alt="Bharat Billpay" width={"70px"} height={"40px"}/>
          <div className="me-4 ">
            <img src="\src\assets\footerimg\lock_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24 1.png" alt="" /> 100% Secure Payments
          </div>
          <div className="me-4">
            <img src="\src\assets\footerimg\wallet_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24 1.png" alt="" /> Trust Pay
          </div>
          <div>
           <img src="\src\assets\footerimg\_x32_.png" alt="" />24x7 Support
          </div>
      </div>



      {/* Footer Links */}
      <div className='d-flex justify-content-between'>
      <div>
        <h5>Company</h5>
        <ul className="list-unstyled">
          <li>About</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h5>Why Us</h5>
        <ul className="list-unstyled">
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div>
        <h5>Learn</h5>
        <ul className="list-unstyled">
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div>
        <h5>Service</h5>
        <ul className="list-unstyled">
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div>
        <h5>Service</h5>
        <ul className="list-unstyled">
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
    </div>
    </div>
    {/* Social Icons */}
    <div className="d-flex justify-content-end mt-3  ">
    <a href="#" className="me-3"><img src="\src\assets\footericon\Frame (1).png" alt="" /></a>
      <a href="#" className="me-3"><img src="\src\assets\footericon\SVGRepo_iconCarrier.png" alt="" /></a>
      <a href="#" className="me-3"><img src="\src\assets\footericon\SVGRepo_iconCarrier (1).png" alt="" /></a>
      <a href="#"><img src="\src\assets\footericon\SVGRepo_iconCarrier (2).png" alt="" /></a>
    </div>
  </div>
</footer>
    
    </div>
  );
}

export default LandingPage;
