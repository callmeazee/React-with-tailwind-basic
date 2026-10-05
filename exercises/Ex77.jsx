//77. Implement a multi-step form where state holds different steps in an array.

import { useState } from "react"

const Ex77 = () => {
  // 1. Define our steps in an array
     const steps = ["profile", "address", "confirmation"];
     
     const [currentStepIndex, setCurrentStepIndex] = useState(0);
     
     const [form, setForm] = useState({
          name: "",
          email: "",
          zip: "",
          city: "",
     });

     const handleChange = (e) => {
         
          const { value, name } = e.target 
          
          setForm({
               ...form,
               [name] : value
          })
     }

     const handleForm = (e) => {
          e.preventDefault();
          alert("form submitted successfully!")
          console.log("Final Data:", form);
     }

     const handleBack = () => {
          if (currentStepIndex > 0) {
              setCurrentStepIndex((prev) => prev - 1)
         }
     }

     const handleNext = () => {
          if (currentStepIndex < steps.length - 1) {
               setCurrentStepIndex((prev) => prev + 1 )
          }
          
     }

     const renderContent = () => {
          switch (steps[currentStepIndex]) { 
               case 'profile' :
                    return (
                      <div>
                        <h1>Step 1 :  Profile Page ------------</h1>
                        <label>
                          Name:
                          <input
                            type="text"
                            onChange={handleChange}
                            value={form.name}
                            name="name"
                            className="input"
                          />
                        </label>
                     
                        <label>
                          Email:
                          <input
                            type="text"
                            onChange={handleChange}
                            value={form.email}
                            name="email"
                            className="input"
                          />
                        </label>
                      </div>
                    );
               case 'address': 
                    return (
                         <div>
                              <h1>Step 2 : Address </h1>
                              <label>
                                   City : 
                                   <input
                                        type="text"
                                        onChange={handleChange}
                                        value={form.city}
                                        name="city"
                                        className="input"
                                   />
                              </label>
                              <label>
                                   Zip :
                                   <input
                                        type="number"
                                        onChange={handleChange}
                                        value={form.zip}
                                        name="zip"
                                        className="input"
                                   />
                              </label>
                     </div>
                    )

                    
               case 'confirmation': 
                    return (
                         <div>
                              <h1>Step 3 :  Confirmation</h1>
                              <h3>Name: {form.name }</h3>
                              <h3>Email: {form.email }</h3>
                              <h3>City: {form.city }</h3>
                              <h3>Zip: {form.zip }</h3>
                         </div>

                    )

               default:
               return null 
               
          }
     }
   return (
     <div>
       <h1>
         Multi-Step form (Step {currentStepIndex + 1} of {steps.length})
       </h1>
             <form onSubmit={handleForm}>
                  {renderContent()}
       { currentStepIndex > 0 &&  (<button type="button" className="btn-primary" onClick={handleBack}>
           Back
         </button>)}

                  {currentStepIndex < steps.length - 1 ?
                       (<button type="button" className="btn-primary" onClick={handleNext}>
           Next
                  </button>) : (
                  
                                        <button type="submit" className="btn-primary">Submit</button>)}
       </form>
     </div>
   );
};

export default Ex77
