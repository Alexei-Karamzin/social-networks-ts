import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

type HeaderAvatarPropsType = {
    goHomePage: () => void
}

export const HeaderAvatar = ({goHomePage}: HeaderAvatarPropsType) => {

    const onClickAvatarHandler = () => goHomePage

    return <Avatar onClick={onClickAvatarHandler}
                    size={32}
                    icon={<UserOutlined />}
            />
};

