import React from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import ClientDetails from "./components/ClientDetails";
import MainDetails from "./components/MainDetails";
import Header from "./components/Header";
import Dates from "./components/Dates";
import Tableform from "./components/Tableform";

function App() {
  const [showInvoice, setShowInvoice] = useState(true);

  const [name, setName] = useState("Mr. XYZ");
  const [address, setAddress] = useState("Ahmedabad, Gujarat");
  const [email, setEmail] = useState("xyzenterprize@gmail.com");
  const [phone, setPhone] = useState("8756943126");
  const [bankName, setBankName] = useState("HDFC");
  const [bankAccount, setBankAccount] = useState("123 456 789");
  const [website, setWebsite] = useState("https://xyzenterprise.com");
  const [clientName, setClientName] = useState("ABC");
  const [clientAddress, setClientAddress] = useState("Ahmedabad");
  const [invoiceNumber, setInvoiceNumber] = useState("2006");
  const [invoiceDate, setInvoiceDate] = useState("03/04/2023");
  const [dueDate, setDueDate] = useState("04/05/2023");
  const [notes, setNotes] = useState("Pay to the bank account indicated above");
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])


  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main
        className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:mx-w-4xl
   bg-white rounded shadow"
      >
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table 
            description= {description} 
            quantity={quantity} 
            price={price}
            amount={amount}
            list={list}
            setList={setList}
            />

            <Notes notes={notes}/>

            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />

            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
          hover:bg-transparent hover:text-blue-500
          transition-all duration-300"

            >
              Edit Information
            </button>
            
          </div>
        ) : (
          <>
            {/* name,address, email, phonr, bankacc, website client name, client address, invoice numebr, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <article className=" md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your Address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex-flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex-flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex-flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="url"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bankName</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank Name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank Account number{" "}
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">
                    Enter your bank Client's Name{" "}
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your Client's Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your bank Client Address{" "}
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your Client Address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 md:mt-20">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate"> Invoice Date </label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate"> Due Date </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <Tableform
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                 list ={list}
                  setList={setList}
                />

              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                row="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white fonr-bold py-2 px-8 rounded shadow border-2 border-blue-500
          hover:bg-transplant hover:text-blue-500
          transition-all duration-300"
              >
                Preview Invoice{" "}
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
