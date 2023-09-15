import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { connect } from 'dva'
export default connect(state => {
  return {
    loading: !!state.loading.effects["add/uploadFun"]
  }
})(UploadFun)
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
function UploadFun(props) {
  const { dispatch, value, onChange,loading } = props
  const [imageUrl, setImageUrl] = useState();
  const beforeUpload = async (file) => {
    const isJpgOrPng = file.type === 'image/jpeg';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024  < 100;
    if (!isLt2M) {
      message.error('Image must smaller than 100KB!');
      return isJpgOrPng && isLt2M;
    }
    const formData = new FormData()
    formData.append("file", file)
    const url = await dispatch({ type: "add/uploadFun", payload: formData })
    onChange(url)
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      listType="picture-card"
      className="avatar-uploader"
      maxCount={2}
      beforeUpload={beforeUpload}
    >
      {value ? (
        <img
          src={value}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

