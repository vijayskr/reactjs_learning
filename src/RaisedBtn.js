import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedBtn = () => (
  <div>
    <RaisedButton label="Retrieve" primary={true} style={style} />
  </div>
);

export default RaisedBtn;
