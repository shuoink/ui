import classNames from 'classnames';
import type {FC, VFC} from 'react';
import {useLayoutEffect, useRef, useEffect, useState} from 'react';

export type TextDescriptor = {
  id: number | string;
  from: 'me' | 'them';
  text: string;
};

const Tail: VFC<JSX.IntrinsicElements['svg']> = props => (
  <svg {...props} width="16px" height="16px" viewBox="0 0 3.6563103 2.9231234">
    <g transform="translate(-147.8887,-89.681437)">
      <path
        style={{
          fill: 'currentcolor',
          stroke: 'currentcolor',
          strokeWidth: '0.26458333',
          strokeLinecap: 'round',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
          fillOpacity: 1,
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        d="m 150.00392,90.419826 c 0.054,0.368075 0.18387,0.72485 0.37912,1.041511 0.26506,0.429881 0.65135,0.784105 1.10253,1.011008 m 0,2e-6 c -0.77376,-0.02658 -1.54364,-0.163481 -2.27913,-0.405275 -0.19174,-0.06304 -0.38218,-0.133627 -0.55747,-0.233696 -0.17528,-0.100069 -0.33581,-0.231191 -0.44918,-0.398185 -0.16089,-0.236999 -0.21731,-0.5423 -0.15176,-0.821149 0.0656,-0.278849 0.25209,-0.527034 0.50172,-0.667526 0.24963,-0.140493 0.55858,-0.171171 0.83097,-0.08251 0.27239,0.08866 0.50409,0.295311 0.6232,0.555824"
      />
    </g>
  </svg>
);

export const TextMessage: FC<{from: 'me' | 'them'}> = ({from, children}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const div = ref.current;
    if (!div) {
      return;
    }
    div.animate(
      [
        {opacity: 0, transform: 'translateY(100px)'},
        {opacity: 1, transform: 'translateY(0)'},
      ],
      {iterations: 1, duration: 100, fill: 'forwards'},
    );
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        'relative max-w-[75%] opacity-0 translate-y-[100px]',
        {
          'self-end': from === 'me',
          'selft-start': from === 'them',
        },
      )}
    >
      <Tail
        className={classNames('absolute bottom-0', {
          'text-[#248bf5] right-[-6px]': from === 'me',
          'text-[#e5e5ea] left-[-6px] scale-x-[-1]': from === 'them',
        })}
      />
      <p
        className={classNames(
          'rounded-2xl leading-tight py-2 px-3 break-words',
          'before:bottom-[-0.1rem] before:h-4 before:absolute',
          'after:bottom-[-0.1rem] after:h-4 after:absolute',
          {
            'bg-[#248bf5] text-white': from === 'me',
            'bg-[#e5e5ea] text-black': from === 'them',
          },
        )}
      >
        {children}
      </p>
    </div>
  );
};

export const TextConversation: VFC<{
  texts: Array<TextDescriptor>;
  onComplete?: () => void;
}> = ({texts: messages, onComplete}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId: number | null = null;
    const go = (index: number) => {
      const msg = messages[index];
      const delay = Math.max(msg.text.length * 25, 1000);
      timeoutId = window.setTimeout(() => {
        setCount(index + 1);
        if (index + 1 < messages.length) {
          go(index + 1);
        } else {
          timeoutId = window.setTimeout(() => {
            onComplete?.();
          }, 3000);
        }
      }, delay);
    };
    timeoutId = window.setTimeout(() => {
      go(0);
    }, 500);
    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [messages, onComplete]);

  useLayoutEffect(() => {
    const div = ref.current;
    if (!div) {
      return;
    }
    div.scrollTo({top: div.scrollHeight - div.clientHeight});
  }, [count]);

  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col text-lg mw-[600px] py-4 px-6 gap-4 overflow-hidden"
    >
      {messages.slice(0, count).map(message => (
        <TextMessage key={message.id} from={message.from}>
          {message.text}
        </TextMessage>
      ))}
    </div>
  );
};
