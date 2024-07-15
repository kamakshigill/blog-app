import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EditPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  const updatePost = async () => {
    await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    router.push('/');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl my-4">Edit Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 mb-4 w-full h-64"
      />
      <button onClick={updatePost} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
    </div>
  );
};

export default EditPage;