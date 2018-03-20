import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
    render() {
        return (
            <div className="Detail">
                <ul className="info-list">
                    <li className="info-item">
                        <h3>声明式</h3>
                        <p>React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。</p>
                        <p>以声明式编写UI，可以让你的代码更加可靠，且方便调试。</p>
                    </li>
                    <li className="info-item">
                        <h3>组件化</h3>
                        <p>React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。</p>
                        <p>以声明式编写UI，可以让你的代码更加可靠，且方便调试。</p>
                    </li>
                    <li className="info-item">
                        <h3>声明式</h3>
                        <p>React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。</p>
                        <p>以声明式编写UI，可以让你的代码更加可靠，且方便调试。</p>
                    </li>
                </ul>
            </div>
        );
    }
}

module.exports = Detail;