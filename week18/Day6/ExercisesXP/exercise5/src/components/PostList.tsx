import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Interface para a estrutura de um post
interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  // Estado para armazenar os posts
  const [posts, setPosts] = useState<Post[]>([]);
  // Estado para controlar o carregamento eu acho sim sim
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Função para buscar os posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('error:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Array de dependências vazio, executa apenas na montagem do componente

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Posts lists</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

// Notas para mim :) :
// Interface para a estrutura de um post
// Define a forma dos objetos que esperamos receber da API

// Estado para armazenar os posts
// Inicializado como um array vazio de Post

// Estado para controlar o carregamento
// Inicializado como true, pois começamos carregando

// useEffect para buscar os posts quando o componente monta
// A função fetchPosts é assíncrona para lidar com a promessa retornada pelo axios

// Se ainda estiver carregando, mostra uma mensagem de carregamento

// Renderiza a lista de posts
// Usa map para criar um item de lista para cada post
