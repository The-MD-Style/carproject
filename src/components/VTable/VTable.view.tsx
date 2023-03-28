import React from 'react';

import classes from './VTable.module.scss';

type Props = {};

const VTableView: React.FC<Props> = () => {
  return (
    <table className={classes['table']}>
      <thead className={classes['head']}>
        <tr>
          <th>Your Car Service</th>
          <th>Time</th>
          <th>Cost Range</th>
        </tr>
      </thead>
      <tbody className={classes['body']}>
        <tr>
          <td>Alternator Repair</td>
          <td>1 hour</td>
          <td>$63.00 - $72.00</td>
        </tr>
        <tr>
          <td>Brake Light Switch Replacement</td>
          <td>1 hour</td>
          <td>$92.00 - $105.00</td>
        </tr>
        <tr>
          <td>Crankshaft Position Sensor Replacement</td>
          <td>1 hour</td>
          <td>$98.00 - $112.00</td>
        </tr>
        <tr>
          <td>Car Door Lock Actuator Replacement</td>
          <td>1 hour</td>
          <td>$186.00 - $211.00</td>
        </tr>
        <tr>
          <td>Exterior Car Door Handle Replacement</td>
          <td>1 hour</td>
          <td>$192.00 - $215.00</td>
        </tr>
        <tr>
          <td>Intake Manifold Gaskets Replacement</td>
          <td>1 hour</td>
          <td>$83.00 - $91.00</td>
        </tr>
        <tr>
          <td>Car AC Repair</td>
          <td>1 hour</td>
          <td>$231.00 - $248.00</td>
        </tr>
        <tr>
          <td>Car Battery Terminal Ends Replacement</td>
          <td>1 hour</td>
          <td>$379.00 - $390.00</td>
        </tr>
        <tr>
          <td>Variable Valve Timing (VVT) Solenoid Replacement</td>
          <td>3 hour</td>
          <td>$540.00 - $573.00</td>
        </tr>
        <tr>
          <td>Brake System Flush</td>
          <td>2 hour</td>
          <td>$226.00 - $250.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VTableView;
