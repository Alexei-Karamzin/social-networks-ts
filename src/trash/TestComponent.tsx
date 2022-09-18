import React from "react";
import {Col, Divider, Row} from 'antd';
import s from './test.module.css'
import 'antd/dist/antd.css'

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

export function TestComponent() {
    return <>
        <Divider orientation="left">Responsive</Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
        </Row>
    </>
}