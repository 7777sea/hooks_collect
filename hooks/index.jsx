import useClippy from 'use-clippy'; //https://github.com/CharlesStover/use-clippy
import { useWindowSize } from '@react-hook/window-size'; //https://github.com/jaredLunde/react-hook/tree/master/packages/window-size
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query'; https://github.com/jaredLunde/react-hook/tree/master/packages/media-query
import { useAsync } from '@react-hook/async'; //https://github.com/jaredLunde/react-hook/tree/master/packages/async
import useBrowserContextCommunication from 'react-window-communication-hook'; //https://github.com/AvraamMavridis/react-window-communication-hook
import useScript from 'react-script-hook';  //https://github.com/hupe1980/react-script-hook
import { useLocalStorage, writeStorage } from '@rehooks/local-storage'; //https://github.com/rehooks/local-storage
import { useIdb } from 'react-use-idb';  //https://github.com/kigiri/react-use-idb
import useMouseAction from 'use-mouse-action'; //https://github.com/dimitrinicolas/use-mouse-action
import { useDebounce, useDebounceCallback } from '@react-hook/debounce'; //https://github.com/jaredLunde/react-hook/tree/master/packages/debounce
import { useThrottle, useThrottleCallback } from '@react-hook/throttle'; //https://github.com/jaredLunde/react-hook/tree/master/packages/throttle
import useOnlineStatus from '@rehooks/online-status';  //https://github.com/rehooks/online-status
import useDocumentTitle from '@rehooks/document-title';  //https://github.com/rehooks/document-title
import useNetworkStatus from '@rehooks/network-status';  //https://github.com/rehooks/network-status/
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';  //https://www.npmjs.com/package/react-speech-kit

export default {
    useClippy,
    useWindowSize,
    useMediaQuery, 
    useMediaQueries,
    useAsync,
    useBrowserContextCommunication,
    useScript,
    useLocalStorage,
    writeStorage,
    useIdb,
    useMouseAction,
    useDebounce,
    useDebounceCallback,
    useThrottle,
    useThrottleCallback,
    useOnlineStatus,
    useDocumentTitle,
    useNetworkStatus,
    useSpeechSynthesis,
    useSpeechRecognition
}