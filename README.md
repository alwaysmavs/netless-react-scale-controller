# netless-scale-controller

> a whiteboard scale controller

[![NPM](https://img.shields.io/npm/v/@netless/react-scale-controller".svg)](https://www.npmjs.com/package/@netless/react-scale-controller") [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 1. 说明

本项目技术选型为：`React` `Typescript`
打包工具为： `rollup`  


## 2. 安装

```bash
npm install --save @netless/react-scale-controller"

或者

yarn add @netless/react-scale-controller"
```
## 3. 接口说明

| 参数                       | 说明               | 类型                                         | 默认值 |
| :------------------------- | :----------------- | :------------------------------------------- | :----: |
| zoomScale       | 缩放比例 | number                            |        |
| zoomChange   | 缩放变换回调 | (scale: number) => void |        |
| style? | 样式 | (React.CSSProperties |        |

## 4. 使用概览

```tsx
import * as React from "react";
import ScaleController from "@netless/react-scale-controller";

export default class ScaleControllerExample extends React.Component<{}, {}> 
  render () {
    return (
        <ScaleController
            zoomScale={room.state.zoomScale}
            zoomChange={this.zoomChange}/>
    )
  }
}
```

## 5. 启动项目

1. 获取源码

    ```bash
    git clone git@github.com:netless-io/netless-react-agora.git
    ```

2. 进入项目并安装库文件依赖

    ```bash
    cd netless-react-agora
    yarn
    ```

3. 启动库文件项目

    ```bash
        yarn start
    ```

4. 进入项目并安装 `example` 文件依赖

    ```bash
        cd example
        yarn
    ```

5. 启动 `example` 项目

    ```bash
        yarn start
    ```

## 5. 项目截图

![scale-1-2-3](https://ohuuyffq2.qnssl.com/scale-1-2-3.png)

## License

MIT © [alwaysmavs](https://github.com/alwaysmavs)
