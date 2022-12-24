# 主题

### 自定义主题

得益于 CSS 变量强大而灵活的能力，自定义一套 WeUI 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接覆盖 CSS 变量就可以了：

```css
.wx-root,body {
    --weui-BTN-DEFAULT-BG: #bb0f0f;
}
```

> 注：WeUI 中的主题变量不是在 :root 下声明的，由于优先级的问题，通过 .wx-root,body 显式地让你所写内容的优先级更高一些，从而确保主题变量的成功覆盖。

如果你只是希望对局部的主题进行调整，也可以把上面的 CSS 变量覆盖逻辑加在任何一个你想调整的节点上，例如：

```css
.purple-theme {
    --weui-BTN-DEFAULT-BG: #a062d4;
}
```

## 黑暗模式

### DarkMode 黑暗模式

WeUI ` v2.2.0` 增加了对黑暗模式对支持。黑暗模式默认跟随系统，

可在 `body` 添加属性 `data-weui-theme` 来控制，值为`light`/`dark`。


#### 强制使用 light 亮色模式

```html
<body data-weui-theme="light">
    ...
</body>
```

#### 使用 WeUI 变量来开发黑暗模式

```css
.body {
    background-color: var(--weui-BG-0);
}
```

## 护眼模式

### 模式

> 在 WeUI 的代码中，可以看到有四种主题色配置，但是文档中没有任何说明。看单词 CareColor 是"护眼色"的意思，大概就明白了。上面的黑暗模式其实应该叫 "黑暗主题"，是基于主题实现的，护眼模式这才是真正的 mode - "模式"。

配置方式如下：

```html
<body data-weui-theme="light" data-weui-mode='care'>
    ...
</body>
```

## 主题变量

### 基础变量

以下是 WeUI 目前提供的全局性 CSS 主题变量，具体说明请参阅 [CSS 变量](./css-variables) 章节：

```css
.wx-root, body {
    --weui-BG-0: #ededed;
    --weui-BG-1: #f7f7f7;
    --weui-BG-2: #fff;
    --weui-BG-3: #f7f7f7;
    --weui-BG-4: #4c4c4c;
    --weui-BG-5: #fff;
    --weui-FG-0: rgba(0, 0, 0, 0.9);
    --weui-FG-HALF: rgba(0, 0, 0, 0.9);
    --weui-FG-1: rgba(0, 0, 0, 0.5);
    --weui-FG-2: rgba(0, 0, 0, 0.3);
    --weui-FG-3: rgba(0, 0, 0, 0.1);
    --weui-FG-4: rgba(0, 0, 0, 0.15);
    --weui-RED: #fa5151;
    --weui-ORANGE: #fa9d3b;
    --weui-YELLOW: #ffc300;
    --weui-GREEN: #91d300;
    --weui-LIGHTGREEN: #95ec69;
    --weui-BRAND: #07c160;
    --weui-BLUE: #10aeff;
    --weui-INDIGO: #1485ee;
    --weui-PURPLE: #6467f0;
    --weui-WHITE: #fff;
    --weui-LINK: #576b95;
    --weui-TEXTGREEN: #06ae56;
    --weui-FG: #000;
    --weui-BG: #fff;
    --weui-TAG-TEXT-ORANGE: #fa9d3b;
    --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
    --weui-TAG-TEXT-GREEN: #06ae56;
    --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
    --weui-TAG-TEXT-BLUE: #10aeff;
    --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
    --weui-TAG-TEXT-BLACK: rgba(0, 0, 0, 0.5);
    --weui-TAG-BACKGROUND-BLACK: rgba(0, 0, 0, 0.05);
}
```

### 组件变量

此外，每个组件也有自己对应的 CSS 全局变量，你可以在它们的文档页面中找到。
