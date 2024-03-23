// import React, { useState } from "react";

// type ContactFormProps = {
//   addContactForm: (formData: ContactFormData) => void;
// };

// type ContactFormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const ContactFormProps: React.FC<ContactFormProps> = ({ addContactForm }) => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     addContactForm(formData);
//     // Clear form fields after submission if needed
//     setFormData({
//       name: ""
//       email: ""
//       subject: ""
//       message: ""
//     },
//   };

//   return (
//     <div className="ContactForm">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center">
//             <div className="contactForm">
//               <form id="contact-form" onSubmit={handleSubmit} noValidate>
//                 {/* Row 1 of form */}
//                 <div className="row formRow">
//                   <div className="col-6">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="form-control formInput"
//                       placeholder="Name"
//                     />
//                   </div>
//                   <div className="col-6">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="form-control formInput"
//                       placeholder="Email address"
//                     />
//                   </div>
//                 </div>
//                 {/* Row 2 of form */}
//                 <div className="row formRow">
//                   <div className="col">
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="form-control formInput"
//                       placeholder="Subject"
//                     />
//                   </div>
//                 </div>
//                 {/* Row 3 of form */}
//                 <div className="row formRow">
//                   <div className="col">
//                     <textarea
//                       rows={3}
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="form-control formInput"
//                       placeholder="Message"
//                     />
//                   </div>
//                 </div>
//                 <button className="submit-btn" type="submit">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
