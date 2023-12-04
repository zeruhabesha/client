import './modal.css';

const Privacy = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" class="x-button" onClick={handleClose}>X
        </button>
       <p class="p-5" style={{color:`black`}}>What is a privacy policy?
A privacy policy (also referred to as a privacy notice) is a statement or legal document that describes how a company, website, or app collects, uses, maintains, and shares information collected from or about its users. Most countries require any website that collects personal information from its users to have a written privacy policy posted on the website.

Does Termly's Privacy Policy Generator cover all privacy laws?

Termly’s Privacy Policy Generator is designed to help you comply with the following:
EU General Data Protection Regulation (GDPR)
UK GDPR
California Consumer Privacy Act (CCPA)
CalOPPA
PIPEDA
In many cases, our Privacy Policy Generator could help you comply with other privacy laws. However, Termly’s products aren’t specifically built to comply with laws outside of the above list. We recommend consulting with a local attorney for any laws not yet specifically included in our offerings. Click here to learn more about which privacy laws Termly's Privacy Policy Generator covers.

How does Termly help you keep your privacy policy up to date?

Termly publishes periodic version updates to policies.</p> 
     
      </section>
    </div>
  );
};

export default Privacy;