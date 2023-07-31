import { Price } from '@/types';

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // 本番環境では、これをあなたのサイトのURLに設定してください
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Vercel によって自動的に設定される
    'http://localhost:3000/';
  // localhost でない場合は、必ず `https://` を含めること
  url = url.includes('http') ? url : `https://${url}`;
  // 必ず末尾に `/` を付けてください
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export const postData = async ({
  url,
  data,
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log('posting,', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log('Error in postData', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix のエポック開始
  t.setSeconds(secs);
  return t;
};
