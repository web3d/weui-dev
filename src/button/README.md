# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Button } from 'weui';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`warn` 三种类型，默认为 `default`。

```html
<weui-button type="primary">主要操作</weui-button>
<weui-button type="default">次要操作</weui-button>
<weui-button type="warn">警示操作</weui-button>
```

### 行按钮

通过 `cell` 属性将按钮设置为行按钮，将按钮的元素类型设置为块级元素。

```html
<weui-button cell type="default">普通行按钮</weui-button>
<weui-button cell type="primary">强调行按钮</weui-button>
<weui-button cell type="warn">警示行按钮</weui-button>
```


### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<weui-button disabled type="primary">主要操作</weui-button>
<weui-button disabled type="default">次要操作</weui-button>
<weui-button disabled type="warn">警示操作</weui-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下同时显示按钮文字。

```html
<weui-button loading type="primary">主要操作</weui-button>
<weui-button loading type="default">次要操作</weui-button>
<weui-button loading type="warn">警示操作</weui-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
<weui-button icon="info" type="default" />
<weui-button icon="success" type="primary">按钮</weui-button>
<weui-button
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="warn"
>
  按钮
</weui-button>
```

### 按钮尺寸

支持 `normal`、`mini`、`xmini` 三种尺寸，默认为 `normal`。

```html
<weui-button type="primary" size="normal">普通按钮</weui-button>
<weui-button type="primary" size="mini">小型按钮</weui-button>
<weui-button type="primary" size="xmini">迷你按钮</weui-button>
```

## API

### Props

| 参数            | 说明                                                        | 类型 | 默认值       |
|---------------|-----------------------------------------------------------| --- |-----------|
| type          | 类型，可选值为 `primary` `warning`                               | _string_ | `default` |
| size          | 尺寸，可选值为 `mini` `xmini`                                    | _string_ | `normal`  |
| text          | 按钮文字                                                      | _string_ | -         |
| icon          | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props)    | _string_ | -         |
| native-type   | 原生 button 标签的 type 属性                                     | _string_ | `button`  |
| cell          | 是否为行按钮                                                    | _boolean_ | `false`   |
| disabled      | 是否禁用按钮                                                    | _boolean_ | `false`   |
| loading       | 是否显示为加载状态                                                 | _boolean_ | `false`   |
| loading-color | 可选值为 `brand` `transparent`                                  | _string_ | -         |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: MouseEvent_ |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称          | 说明           |
| ------------- | -------------- |
| default       | 按钮内容       |
| icon | 自定义图标     |
| loading       | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonNativeType,
} from 'weui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。



| 名称                              | 默认值                                                                                                  | 描述 |
| --------------------------------- |------------------------------------------------------------------------------------------------------| ---- |
|   --weui-BTN-DISABLED-FONT-COLOR  | _rgba(0, 0, 0, 0.2)_                                                                                 |    -   |
|   --weui-BTN-DEFAULT-BG  | _#f2f2f2_                                                                                              |    -   |
|   --weui-BTN-DEFAULT-COLOR  | _#06ae56_                                                                                              |    -   |
|   --weui-BTN-DEFAULT-ACTIVE-BG  | _overlay(rgba(0, 0, 0, 0.05), #f2f2f2), overlay(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.08))_ |    -   |
|   --weui-BTN-ACTIVE-MASK  | _rgba(0, 0, 0, 0.1)_                                                                                   |    -   |
|   --weui-BTN-DEFAULT-COLOR  | _#018942_                                                                                              |    -   |
