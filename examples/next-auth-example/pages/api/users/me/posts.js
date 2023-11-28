import connect from '@/db/connect.js';
import User from '@/db/models/User.js';
import Post from '@/db/models/Post.js';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default async function handler(request, response) {
  await connect();
  if (request.method === 'GET') {
    const session = await getServerSession(request, response, authOptions);
    if (!session) {
      response.status(401).json({ message: 'You must be logged in.' });
      return;
    }
    const posts = await Post.find({ author: session.id })
      .populate('author')
      .exec();
    response.status(200).json(posts);
    return;
  }
  response.status(405).json({ message: 'Method not allowed' });
}
