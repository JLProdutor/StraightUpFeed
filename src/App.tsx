import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './globalStyles.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JLProdutor.png',
      profileName: 'JL',
      title: 'Web Developeer'
    },
    content: [
      { type: 'paragraph', content: 'Opa! Me chamo João Lucas, sou desenvolvedor web e estou aqui para aprender e compartilhar conhecimentos.' },
      { type: 'paragraph', content: 'Este é um projeto de um feed, simulando uma rede social.' },
      { type: 'paragraph', content: 'O projeto possui duas versôes (React JS & React TS) e atualmente está "estático".' },
      { type: 'paragraph', content: 'Outras funcionalidades podem ser integradas futuramente como a customização do perfil, criação de posts, relação entre os posts e seu criador, fixação de comentários ao recarregar páginas, atualização de data, dentre outros.' },
      { type: 'paragraph', content: 'Esse projeto foi feito a partir do curso Ignite da Rocketseat, com o educador Diego Fernandes.' },
      { type: 'link', content: '#hashtagsaqui' },
      { type: 'link', content: '#react' },
      { type: 'link', content: '#typescript' }
    ],
    publishedAt: new Date('2024-12-10 11:30:00'),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              post={post}
            />
            )
          })}
        </main>

      </div>
    </div>
  )
}
