import React from 'react';

const BillingInformation = ({ cycleDetails, cumulativeUsage }) => {
  return (
    <div>
      <h2>Billing Information</h2>
      <table>
        <tr>
            <th>
                Current Cycle
            </th>
            <th>Cumulative Cycle</th>
        </tr>
        <tr>
            <td>{cycleDetails}</td>
            <td>{cumulativeUsage}</td>
        </tr>
      </table>
      
    </div>
  );
};

export default BillingInformation;
