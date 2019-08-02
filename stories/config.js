import ThreeColumnLayout from '@pages/container/ThreeColumnLayout';
import scrollbar from '@pages/container/Scrollbar';
import ModalDemo from '@pages/container/Modal';
import Introduce from '@pages/base/Introduce';
import IconDemo from '@pages/currency/Icon';
import Image from '@pages/container/Image';

export default [
  /***** 基本 *****/  
  {
    title: '介绍',
    module: '基本',
    component: Introduce
  },
  /***** 通用 *****/
  {
    title: '图标',
    module: '通用',
    component: IconDemo
  },
  /***** 容器 *****/
  {
    title: '滚动条',
    module: '容器',
    component: scrollbar
  },
  {
    title: '弹窗',
    module: '容器',
    component: ModalDemo
  },
  {
    title: '三栏布局',
    module: '容器',
    component: ThreeColumnLayout
  },
  {
    title: '图片',
    module: '容器',
    component: Image
  }
];
