import { NextApiRequest, NextApiResponse } from 'next';

let posts = [
  { id: '1', title: 'First Post', content: 'This is the first post' },
  { id: '2', title: 'Second Post', content: 'This is the second post' },
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    const post = posts.find((p) => p.id === id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } else if (req.method === 'PUT') {
    const { title, content } = req.body;
    posts = posts.map((p) => (p.id === id ? { ...p, title, content } : p));
    res.status(200).json({ id, title, content });
  } else if (req.method === 'DELETE') {
    posts = posts.filter((p) => p.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
};

export default handler;
