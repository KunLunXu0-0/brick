import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect, useMemo, useState } from 'react';

import { Resize } from '..';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'width',
  'style',
  'height',
  'error',
  'loading',
  'bodyStyle',
  'className',
  'bodyClassName',
]

// 默认 props
const defaultProps = {
  error: null,
  loading: null,
  width: '100%',
  height: '100%',
};

// props 类型校验
const propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  error: PropTypes.node,
  style: PropTypes.object,
  loading: PropTypes.node,
  bodyStyle: PropTypes.object,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
};

const useStateHook = (props) => {
  const [src, setSrc] = useState(null);
  const [img, setImg] = useState('loading');    // 三种值: img.src(正常)、loading(加载中)、error(加载错误)
  const [size, setSize] = useState(null);

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // 重置 size 值
  const resetSize = () => {
    // 1. 获取图片的原始尺寸
    const naturalWidth = imgRef.current.naturalWidth;
    const naturalHeight = imgRef.current.naturalHeight;
    const {
      width: containerWidth,
      height: containerHeight,
    } = containerRef.current.getBoundingClientRect();
    const scale = naturalWidth / naturalHeight;
    const reset = { width: 'auto', height: 'auto' };
    const changeKey = containerHeight * scale < containerWidth ? 'width' : 'height';
    reset[changeKey] = '100%';
    !_.isEqual(reset, size) &&  setSize({ ...reset });
  };

  // 读取 src
  useEffect(() => {
    if (props.src && props.src.constructor === File){
      // 支持传入 file 对象
      if (!/image/.test(props.src)){
        setSrc(null);
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(props.src);
        reader.onload = () => {
          setSrc(reader.result);
        }
      }
    } else {
      setSrc(props.src);
    }
  }, [props.src]);

  useEffect(() => {
    setImg('loading');
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImg(src);
    }
    image.onerror = () => {
      setImg('error');
    }
  }, [src]);

  return { imgRef, containerRef, size, img, resetSize };
};

const ImageContainer =  (props) => {
  const state = useStateHook(props);
  return (
    <Resize
      {...omit(props, filterPropKeys)}
      ref={state.containerRef}
      onResize={state.resetSize}
      className={classNames('qyrc-image', props.className)}
      style={{ width: props.width, height: props.height, ...props.style}}>
      {state.img === 'loading' ? props.loading : null}
      {state.img === 'error' ? props.error : null}
      {!['loading', 'error'].includes(state.img)
        ? <img onLoad={state.resetSize} src={state.img} ref={state.imgRef} style={{ ...state.size }}/>
        : null
      }
      <div
        style={props.bodyStyle}
        className={classNames('qyrc-image-body', props.bodyClassName)} >
        {props.children}
      </div>
    </Resize>
  );
};

ImageContainer.defaultProps = defaultProps;
ImageContainer.propTypes = propTypes;
export default ImageContainer;
