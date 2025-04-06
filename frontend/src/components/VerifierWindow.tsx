import React from 'react';
import axios from 'axios';

const VerifierWindow = ({ entries }) => {
  const handleVerify = async (id) => {
    await axios.patch(`/loan/${id}/verify`);
    alert('Entry verified');
  };

  const handleReject = async (id) => {
    await axios.patch(`/loan/${id}/reject`);
    alert('Entry rejected');
  };

  return (
    <div>
      <h1>Verifier Window</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.status}</td>
              <td>
                <button onClick={() => handleVerify(entry.id)}>Verify</button>
                <button onClick={() => handleReject(entry.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifierWindow;