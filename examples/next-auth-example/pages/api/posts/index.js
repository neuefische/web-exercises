import connect from '@/db/connect.js';
import User from '@/db/models/User.js';
import Post from '@/db/models/Post.js';
import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default async function handler(request, response) {
  await connect();
  if (request.method === 'GET') {
    const posts = await Post.find().populate('author').exec();
    response.status(200).json(posts);
    return;
  }

  if (request.method === 'POST') {
    const session = await getServerSession(request, response, authOptions);
    if (!session) {
      response.status(401).json({ message: 'You must be logged in.' });
      return;
    }
    try {
      const post = await Post.create({ ...request.body, author: session.id });
      response.status(201).json(post);
    } catch (error) {
      console.log('POST /api/posts', error);
      response.status(500).json({ message: 'Error creating post' });
    }
    return;
  }

  response.status(405).json({ message: 'Method not allowed' });
}
