import React from 'react';
import { Form, Input, Typography, Row, Col, Space, Card } from 'antd';
import './Planner.css'; 

const { Title, Text } = Typography;

const CoverPage = () => {
  return (
    <div className="cover-page">
      <div className="circle">
        <div className="circle-content">
          <Title level={1} className="title">
            2025
          </Title>
          <Text className="subtitle">Planner</Text>
        </div>
      </div>
      <div>
        <Title level={6}>BELONGS TO</Title>
        <Form layout="vertical" className="belongs-to">
          <Form.Item label="">
            <Input placeholder="Please enter your name" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const VisionBoard = () => {
  return (
    <div className="vision-board">
      <Title level={3} className="vision-title">
        VISION BOARD
      </Title>
      <div className="vision-make-it-happen">
        <Space direction="horizontal">
          <Text strong>MAKE IT HAPPEN</Text>
        </Space>
      </div>
      <Row gutter={[16, 16]} style={{ marginTop: "25px" }}>
        {["WEALTH", "PASSION", "HEALTH", "LOVE", "FAMILY", "CAREER"].map(
          (item) => (
            <Col xs={24} md={12} key={item}>
              <Card className="vision-item" bordered="true">
                <h3>{item}</h3>
                <p>Progression :</p>
                <div className="progression-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

const Planner = () => {
  return (

    <div>
    <Row gutter={16}>
    <Card >
        <Card style={{marginBottom: "15px"}}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <CoverPage />
            </Col>
          </Row>
        </Card>
        <Card>

          <Row>
            <Col xs={24} md={12}>
              <VisionBoard />
            </Col>
          </Row>
        </Card>
      </Card>
    </Row>
    </div>
  );
};

export default Planner;
