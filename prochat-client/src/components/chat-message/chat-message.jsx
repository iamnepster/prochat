import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import './chat-message.scss'

export function ChatMessage({ fullname, content, isOwn }) {
  return (
    <div className={`chat-message ${isOwn ? 'self' : 'other'}`}>
      <Grid container spacing={2}>
        <Grid item xs="5">
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <div className="chat-message-avatar">
                <Avatar>{fullname ? fullname.substr(0, 2) : 'error'}</Avatar>
              </div>
            </Grid>
            <Grid item>
              <span className="chat-message__username">
                {fullname.length > 14 ? fullname.substr(0, 14) + "..." : fullname.substr(0, 14)}
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="7">
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <span className="chat-message__text">
                {content}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}