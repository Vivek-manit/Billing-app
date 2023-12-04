import React from 'react';

const InvoiceGeneration = ({ onGenerateInvoice }) => {
  return (
    <div>
      <h2>Invoice Generation</h2>
      <button onClick={onGenerateInvoice}>Generate Invoice</button>
    </div>
  );
};

export default InvoiceGeneration;
