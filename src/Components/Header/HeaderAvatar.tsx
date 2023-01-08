import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

type HeaderAvatarPropsType = {
    goHomePage: () => void
}

export const HeaderAvatar = ({goHomePage}: HeaderAvatarPropsType) => {

    return <Avatar onClick={goHomePage}
                    size={32}
                    icon={<UserOutlined />}
            />
};

