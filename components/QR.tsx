import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeComponent = ({ data }) => {
  return (
    <div>
      <QRCode value={data} />
    </div>
  );
};

export default QRCodeComponent;
