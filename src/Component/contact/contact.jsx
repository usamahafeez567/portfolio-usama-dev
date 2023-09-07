import React from "react";
import image from "../../Assets/emoji.png";
import "./contact.css";
import ReactWhatsapp from "react-whatsapp";
import { Bounce } from "react-reveal";

function Contact() {
  return (
    <>
      <div className="container my-lg-5 py-5" id="contact">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="text-center">
              <h2 style={{ color: "blue", fontWeight: "600" }}>
                <b>CONTACT</b>
              </h2>
              <h2 className="py-2">
                <b>
                  Don't be shy! Hit me up!{" "}
                  <span>
                    <img className="py-3" src={image} alt="emoji" width={40} />
                  </span>
                </b>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center last-section">
        <div className="row">
          <div className="col-lg-6 col-sm-12 my-3">
            <Bounce left cascade>
              <div className="email-section">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=usamahafeez567@gmail.com"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope-open-text fa-xl mb-5 whticone"></i>
                  <h5 style={{ color: "black" }}>
                    <b>
                      Mail
                      <br style={{ marginBottom: "5%" }} />
                      <span className="email-text">
                        usamahafeez567@gmail.com
                      </span>
                    </b>
                  </h5>
                </a>
              </div>
            </Bounce>
          </div>
          <div className="col-lg-6 col-sm-12 my-3">
            <Bounce right cascade>
              <div className="whatsapp-section">
                <ReactWhatsapp
                  className="whatsapp-section-child"
                  number="+923238847911"
                  message="Dear Usama - I hope this message finds you well. My Name is '...'"
                >
                  <i className="fa-brands fa-square-whatsapp fa-xl mb-5 whticone"></i>
                  <h5 className="hfive" style={{ color: "black" }}>
                    <b>
                      Contact No
                      <br style={{ marginBottom: "5%" }} />
                      <span style={{ fontWeight: 100, fontSize: "1.2rem" }}>
                        +92 323 8847 911
                      </span>
                    </b>
                  </h5>
                </ReactWhatsapp>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

// import React from "react";
// import image from "../../Assets/emoji.png";
// import "./contact.css";
// import ReactWhatsapp from "react-whatsapp";

// function contact() {
//   return (
//     <>
//       <div className="container" id="contact" style={{ padding: "7% 10% 10%" }}>
//         <div className="row">
//           <div className="col-lg-12 col-sm-12">
//             <div className="text-center">
//               <h2 style={{ color: "blue", fontWeight: "600" }}>
//                 <b>CONTACT</b>
//               </h2>
//               <h2 className="pt-2">
//                 <b>
//                   Don't be shy! Hit me up!{" "}
//                   <span>
//                     <img src={image} alt="emoji" width={55} />
//                   </span>
//                 </b>
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container text-center last-section">
//         <div className="row">
//           <div className="col-lg-6 col-sm-12">
//             <div className="email-section">
//               <a
//                 href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=usamahafeez567@gmail.com"
//                 target={"_blank"}
//                 style={{ textDecoration: "none" }}
//                 rel="noreferrer"
//               >
//                 <i className="fa-solid fa-envelope-open-text fa-xl mb-5 whticone"></i>
//                 <h5 style={{ color: "black" }}>
//                   <b>
//                     Mail
//                     <br style={{ marginBottom: "5%" }} />
//                     <span className="email-text">usamahafeez567@gmail.com</span>
//                   </b>
//                 </h5>
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-6 col-sm-12">
//             <div className="whatsapp-section">
//               <ReactWhatsapp
//                 className="whatsapp-section-child"
//                 number="+923238847911"
//                 message="Dear Usama - I hope this message finds you well. My Name is '...'"
//               >
//                 <i className="fa-brands fa-square-whatsapp fa-xl mb-5 whticone"></i>

//                 <h5 className="hfive" style={{ color: "black" }}>
//                   <b>
//                     Contact No
//                     <br style={{ marginBottom: "5%" }} />
//                     <span style={{ fontWeight: 100, fontSize: "1.2rem" }}>
//                       +92 323 8847 911
//                     </span>
//                   </b>
//                 </h5>
//               </ReactWhatsapp>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default contact;
