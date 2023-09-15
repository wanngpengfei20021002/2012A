import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { connect } from 'dva'
export default connect(state => {
    return {
        loading: !!state.loading.effects[""]
    }
})(List3)

function List3(props) {


    return (
        <div></div>
    );
};

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { connect } from 'dva'
export default connect(state => {
    return {
        loading: !!state.loading.effects[""]
    }
})(List2)

function List2(props) {


    return (
        <div></div>
    );
};

