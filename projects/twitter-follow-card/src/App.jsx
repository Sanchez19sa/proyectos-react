import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Google',
    name: 'Google',
    isFollowing: true
  },
  {
    userName: 'duolingo',
    name: 'Duolingo',
    isFollowing: true
  },
  {
    userName: 'Bancolombia',
    name: 'Bancolombia',
    isFollowing: false
  },
  {
    userName: 'redbull',
    name: 'Red Bull',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

