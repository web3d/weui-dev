export default {
  name: 'weui',
  build: {
    srcDir: 'src',
    tagPrefix: 'weui-',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'yarn',
    extensions: {
      esm: '.mjs',
    },
    site: {
      publicPath: '/weui/',
    },
    vetur: {
      tagPrefix: 'weui-',
    },
    css: {
      base: 'style/base.less',
      preprocessor: 'less',
      removeSourceFile: true,
    },
  },
  site: {
    title: 'WeUI',
    subtitle: '相关文档资料收集（非官方）',
    description: 'WeUI',
    logo: '/weui/images/WeChat_App_Icon_200528.png',
    simulator: {
      url: '/weui/weui/example/index.html',
    },
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'layers',
            title: '页面层级',
          },
          {
            path: 'theming',
            title: '主题',
          },
          {
            path: 'css-variables',
            title: 'CSS 变量',
          },
          {
            path: 'resources',
            title: '设计资源',
          },
        ],
      },
      {
        title: '表单',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'form',
            title: 'Form 表单',
          },
          {
            path: 'list',
            title: 'List 列表',
          },
          {
            path: 'input',
            title: 'Input 输入框',
          },
          {
            path: 'checkbox',
            title: 'Checkbox 复选框',
          },
          {
            path: 'radio',
            title: 'Radio 单选框',
          },
          {
            path: 'switch',
            title: 'Switch 开关',
          },
          {
            path: 'slider',
            title: 'Slider 滑块',
          },
          {
            path: 'textarea',
            title: 'Textarea 文本域',
          },
          {
            path: 'uploader',
            title: 'Uploader 文件上传',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'article',
            title: 'Article 文章',
          },
          {
            path: 'badge',
            title: 'Badge 徽章',
          },
          {
            path: 'flex',
            title: 'Flex 布局',
          },
          {
            path: 'footer',
            title: 'Footer 页脚',
          },
          {
            path: 'gallery',
            title: 'Gallery 相册',
          },
          {
            path: 'grid',
            title: 'Grid 九宫格',
          },
          {
            path: 'icon',
            title: 'Icon 图标',
          },
          {
            path: 'loading',
            title: 'Loading 加载中',
          },
          {
            path: 'loadmore',
            title: 'Loadmore 加载更多',
          },
          {
            path: 'panel',
            title: 'Panel 面板',
          },
          {
            path: 'preview',
            title: 'Preview 表单预览',
          },
          {
            path: 'progress',
            title: 'Progress 进度条',
          },
          {
            path: 'steps',
            title: 'Steps 步骤条',
          },
        ],
      },
      {
        title: '操作反馈',
        items: [
          {
            path: 'actionsheet',
            title: 'ActionSheet 弹出式菜单',
          },
          {
            path: 'dialog',
            title: 'Dialog 对话框',
          },
          {
            path: 'half-screen-dialog',
            title: 'Half-screen Dialog 半屏组件',
          },
          {
            path: 'msg',
            title: 'Msg 提示页',
          },
          {
            path: 'picker',
            title: 'Picker 多列选择器',
          },
          {
            path: 'toast',
            title: 'Toast 弹出式提示',
          },
          {
            path: 'top-tips',
            title: 'TopTips 顶部提示条',
          },
        ],
      },
      {
        title: '导航相关',
        items: [
          {
            path: 'navbar',
            title: 'Navbar 导航栏',
          },
          {
            path: 'tabbar',
            title: 'Tabbar 标签栏',
          },
        ],
      },
      {
        title: '搜索相关',
        items: [
          {
            path: 'searchbar',
            title: 'SearchBar 搜索栏',
          },
        ],
      },
    ],
  },
};
