import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '../components/Box'

export function MyPlaylists() {
  return (
    <div className="myPlaylists">
      <section className="boxContainer">
        <article className="createArticle">
          <Link to="/create">Create a Playlist</Link>
        </article>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </section>
    </div>
  )
}
