import React, { useState } from 'react';

import UsageDetails from '../components/UsageDetails';
import BillingInformation from '../components/BillingInformation';
import InvoiceGeneration from '../components/InvoiceGeneration';

const Home = ({user}) => {
  
  const [metrics, setMetrics] = useState(/* Your metrics data */);
  const [cycleDetails, setCycleDetails] = useState(/* Your billing cycle data */);
  const [cumulativeUsage, setCumulativeUsage] = useState(/* Your cumulative usage data */);

  

 

  const handleGenerateInvoice = () => {
    // Implement logic to generate an invoice
    console.log('Generating invoice...');
  };

  return (
    <div>
      <h1>SaaS Dashboard</h1>
      
        
        <div>
          <p className='home-para'>Welcome, {user.displayName}!</p>
          <hr></hr>
          <UsageDetails metrics={metrics} />
          <BillingInformation cycleDetails={cycleDetails} cumulativeUsage={cumulativeUsage} />
          <InvoiceGeneration onGenerateInvoice={handleGenerateInvoice} />
        </div>
      
    </div>
  );
};

export default Home;
