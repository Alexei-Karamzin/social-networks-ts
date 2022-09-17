import React from "react";
import { Col, Row } from 'antd';
import s from ''

export function TestComponent() {
    return <>
        <Row>
            <Col span={24} className={s}></Col>
        </Row>
    </>
}