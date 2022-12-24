# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/adweuiced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Icon } from 'weui';

const app = createApp();
app.use(Icon);
```

## 代码演示

### 基础用法

通过 `name` 属性来指定需要使用的图标，WeUI 内置了一套图标库（见右侧示例），可以直接传入对应的名称来使用。

```html
<weui-icon name="circle" />
```

### 使用图片 URL

你也可以直接在 `name` 属性中传入一个图片 URL 来作为图标。

```html
<weui-icon name="https://fastly.jsdelivr.net/npm/@weui/assets/icon-demo.png" />
```

### 徽标提示

设置 `badge` 属性后，会在图标右上角展示相应的徽标；设置 `dot` 属性后，会在图标右上角展示一个小红点（是 `badge` 的一种类型）。

```html
<weui-icon name="circle" dot />
<weui-icon name="circle" badge="9" />
<weui-icon name="circle" badge="99+" />
```

### 图标颜色

通过 `color` 属性来设置图标的颜色。

```html
<weui-icon name="delete" color="#1989fa" />
<weui-icon name="cancel" color="#ee0a24" />
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小，可以指定任意 CSS 单位。

```html
<!-- 不指定单位，默认使用 px -->
<weui-icon name="circle" size="40" />
<!-- 指定使用 rem 单位 -->
<weui-icon name="circle" size="3rem" />
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<weui-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props `v3.2.8` | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](#/zh-CN/badge#props) | _BadgeProps_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `inherit` |
| class-prefix | 类名前缀，用于使用自定义图标 | _string_ | `weui-icon` |
| tag | 根节点对应的 HTML 标签名 | _string_ | `i` |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击图标时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { IconProps } from 'weui';
```
