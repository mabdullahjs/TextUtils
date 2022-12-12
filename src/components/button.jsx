import React from 'react';
import { Button, Space } from 'antd';
const App = (props) => (
  <Space wrap>
    <Button style={{marginTop: "1rem"}} type="primary">{props.name}</Button>
  </Space> 
);
export default App;