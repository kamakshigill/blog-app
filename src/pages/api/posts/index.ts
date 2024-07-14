import { NextApiRequest, NextApiResponse } from 'next';

let posts = [
  { id: '1', title: 'First Post', content: 'This is the first post' },
  { id: '2', title: 'Second Post', content: 'This is the second post' },
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newPost = { id: `${Date.now()}`, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(405).end();
  }
};

export default handler;
