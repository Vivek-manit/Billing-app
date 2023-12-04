import React from 'react';

const UsageDetails = ({ metrics }) => {
  return (
    <div className='usage'>
      <h2>Usage Details</h2>
      {/* Display relevant metrics here */}
      

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Product</th>
    
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Product1</td>
    
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Product1</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td>Product1</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td>Product2</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td>Product1</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td>Product1</td>
  </tr>
</table>
    </div>
  );
};

export default UsageDetails;
