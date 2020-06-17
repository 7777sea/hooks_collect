`useClippy
useClippy 是一个用来读取或写入粘贴板的自定义 Hook，支持 TypeScript。

官方文档：https://github.com/CharlesStover/use-clippy

代码示例：

import useClippy from 'use-clippy';

export default () => {
  const [clipboard, setClipboard] = useClippy();

  return (
    <div>
      <button
        onClick={() => {
          alert(`粘贴板内容为: ${clipboard}`);
        }}
      >
        读取粘贴板
      </button>
      <button
        onClick={() => {
          setClipboard(`新内容: ${Math.random()}`);
        }}
      >
        写入粘贴板
      </button>
    </div>
  );
};
useWindowSize
useWindowSize 用于获取浏览器窗口大小，默认按 debounce 方式获取，当然也可以以 throttled 方式获取。

官方文档：https://github.com/jaredLunde/react-hook/tree/master/packages/window-size

代码示例：

import { useWindowSize } from '@react-hook/window-size';
// import { useWindowSize } from '@react-hook/window-size/throttled';

export default (props) => {
  const [width, height] = useWindowSize();

  return (
    <div>
      width: {width}, height: {height}
    </div>
  );
};
useMediaQuery
useMediaQuery通过在组件中使用 CSS3 Media Query 来控制组件。

官方文档：https://github.com/jaredLunde/react-hook/tree/master/packages/media-query

代码示例：

import React from 'react';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query';

// Using a single media query
// export default () => {
//   const matches = useMediaQuery('only screen and (min-width: 400px)');
//   return `Matches? ${matches ? 'Matched!' : 'Nope'}`;
// };

// Using multiple media queries
export default () => {
  const { matches, matchesAny, matchesAll } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 400px)',
  });

  return (
    <ul>
      <li>Screen matched? {matches.screen ? 'Yes' : 'No'}</li>
      <li>Width matched? {matches.width ? 'Yes' : 'No'}</li>
      <li>All matched? {matchesAll ? 'Yes' : 'No'}</li>
      <li>Any matched? {matchesAny ? 'Yes' : 'No'}</li>
    </ul>
  );
};
useAsync
useAsync 用于优雅地解决、取消和处理异步函数或 Promise，并且当组件卸载时还可以自动清除它们。

官方文档：https://github.com/jaredLunde/react-hook/tree/master/packages/async

代码示例：

import { useAsync } from '@react-hook/async';

export default () => {
  const [{ status, cancel, error, value }, call] = useAsync(() => {
    return new Promise((resolve) => setTimeout(() => resolve('Loaded'), 3000));
  });

  switch (status) {
    case 'loading':
      return (
        <div>
          <button onClick={cancel}>Cancel</button>
          Loading...
        </div>
      );
    case 'cancelled':
      return (
        <div>
          Cancelled.
          <button onClick={call}>Try again</button>
        </div>
      );
    case 'error':
      return `Error: ${error}`;
    case 'success':
      return value || 'Success!';
    default:
      return <button onClick={call}>Load me</button>;
  }
};
useBrowserContextCommunication
useBrowserContextCommunication 使用 Broadcast Channel API  为不同浏览器上下文（选项卡，iframe，窗口）之间的通信提供简单的解决方案。

官方文档：https://github.com/AvraamMavridis/react-window-communication-hook

代码示例：

import useBrowserContextCommunication from 'react-window-communication-hook';

export default () => {
  // communicationState 是一个 {lastMessage, messages} 对象，用于从其它的浏览器上下文接收数据
  const [communicationState, postMessage] = useBrowserContextCommunication(
    'channel'
  );

  const [status, setStatus] = useState('login');

  function logout() {
    setStatus('logout');
    postMessage('logout');
  }

  const isLogout = [communicationState.lastMessage, status].includes('logout');

  return (
    <div>
      <h1>状态：{isLogout ? '已退出' : '已登录'}</h1>
      <button onClick={logout}>退出</button>
    </div>
  );
};
可以在浏览器里打开两个 Tab，然后在其中一个页面点击「退出」按钮，会发现两个 Tab 的页面都发生了变化。

useScript
useScript 用于动态加载外部脚本，并提供了 onLoad 回调用于得到脚本加载完成的时间。

官方文档：https://github.com/hupe1980/react-script-hook

代码示例：

import { StripeProvider } from 'react-stripe-elements';
import useScript from 'react-script-hook';

export default () => {
  const [loading, error] = useScript({ src: 'https://js.stripe.com/v3/' });

  if (loading) return <h3>Loading Stripe API...</h3>;
  if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;

  return (
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
      <div>Hello</div>
    </StripeProvider>
  );
};
当然也可以以回调函数的形式使用：

useScript({ 
  src: 'https://js.stripe.com/v3/',
  onload: () => console.log('Script loaded!') 
})
useLocalStorage
useLocalStorage 用于通过 localStorage API  进行数据存取。

官方文档：https://github.com/rehooks/local-storage

代码示例：

import { useLocalStorage, writeStorage } from '@rehooks/local-storage';

let counter = 0;

export default () => {
  const [counterData] = useLocalStorage('counter');

  return (
    <>
      {counter}
      <button onClick={() => writeStorage('counter', ++counter)}>Write</button>
      <button onClick={() => alert(counterData)}>Read</button>
    </>
  );
};
useIdb
useIdb 使用浏览器中的 IndexedDB 来存储数据，跟 useLocalStorage 类似。

官方文档：https://github.com/kigiri/react-use-idb

代码示例：

import { useIdb } from 'react-use-idb';

export default () => {
  const [value, setValue] = useIdb('my-key', 'foo');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
    </div>
  );
};
use-mouse-action
use-mouse-action 用于监听点击事件时鼠标（也可能是触摸板）按下或弹起。

官方文档：https://github.com/dimitrinicolas/use-mouse-action

代码示例：

import useMouseAction from 'use-mouse-action';

export default () => {
  const props = useMouseAction({
    onAction: () => console.log('You clicked or mouse downed me!'),
    down: true,
  });

  return (
    <button type="button" {...props}>
      Click me fast!
    </button>
  );
};
useDebounce
useDebounce 用于延迟 setState 或者其它回调函数的执行。

官方文档：https://github.com/jaredLunde/react-hook/tree/master/packages/debounce

代码示例：

import {useDebounce, useDebounceCallback} from '@react-hook/debounce'

const Component = (props) => {
  // at a basic level, used just like useState
  const [value, setValue] = useDebounce('initialValue')
}

const useMyCallback = (initialState, wait, leading) => {
  // this is the same code useDebounce() uses to debounce setState
  const [state, setState] = useState(initialState)
  return [state, useDebounceCallback(setState, wait, leading)]
}
useThrottle
useThrottle 用于稀释 setState 或者其它回调函数的执行频率。

官方文档：https://github.com/jaredLunde/react-hook/tree/master/packages/throttle

代码示例：

import {useThrottle, useThrottleCallback} from '@react-hook/throttle'

const Component = (props) => {
  // at a basic level, used just like useState
  const [value, setValue] = useThrottle('initialValue')
}

const useMyCallback = (initialState, fps, leading) => {
  // this is the same code useThrottle() uses to throttle setState
  const [state, setState] = useState(initialState)
  return [state, useThrottleCallback(setState, fps, leading)]
}
useOnlineStatus
useOnlineStatus 用于获取当前的网络状态，内部通过监听 online 及 offline 事件实现。

官方文档：https://github.com/rehooks/online-status

代码示例：

import useOnlineStatus from '@rehooks/online-status';

export default () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <h1>You are {onlineStatus ? 'Online' : 'Offline'}</h1>
    </div>
  );
};
useDocumentTitle
useDocumentTitle 用于更新页面标题。

官方文档：https://github.com/rehooks/document-title

代码示例：

import useDocumentTitle from '@rehooks/document-title';

export default () => {
  useDocumentTitle('Page Title');
  return <div />;
};
useNetworkStatus
useNetworkStatus 暴露了navigator.connection 对象，用于实时获取网络状态。

官方文档：https://github.com/rehooks/network-status/

代码示例：

import useNetworkStatus from '@rehooks/network-status';

export default () => {
  let connection = useNetworkStatus();
  return (
    <div>
      <div>downlink: {connection.downlink}</div>
      <div>effectiveType: {connection.effectiveType}</div>
      <div>rtt: {connection.rtt}</div>
      <div>saveData: {connection.saveData ? 'yes' : 'no'}</div>
    </div>
  );
};
useSpeechSynthesis
useSpeechSynthesis 通过使用 Web Speech API 提供了语音识别及文字转语音的能力，还可以识别中英文。

官方文档：https://www.npmjs.com/package/react-speech-kit

在线示例：https://mikeyparton.github.io/react-speech-kit/

代码示例：

import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';

export default () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br />
      <button onMouseDown={listen} onMouseUp={stop}>
        Listen
      </button>
      <button onClick={() => speak({ text: value })}>Speak</button>

      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
};`