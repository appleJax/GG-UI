import React          from 'react'
import { withStyles } from 'UI/styles'
import Auth           from 'Data/Auth'
import Button         from 'UI/Button'


const styles = (theme) => ({
  follow: {
    background: '#fff',
    height: '20px',
    margin: '8px 0',
    padding: '0',
    '&:hover': {
      background: theme.palette.primary.light,
    }
  },
  following: {
    alignItems: 'center',
    background: '#fff',
    borderRadius: '1px',
    display: 'flex',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    margin: '8px 0',
    padding: '5px 10px 5px 8px',
    width: 'fit-content'
  },
  followImage: {
    background: theme.palette.secondary.main,
    borderRadius: '50%',
    marginRight: '3px'
  },
  label: {
    color: theme.palette.primary.main,
    padding: '5px 12px 5px 5px',
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
})

function FollowButton({
  classes: {
    follow,
    following,
    followImage,
    label
  },
  handle,
  userId
}) {

  const loggedOutFollow = () => (
    <Button
      classes={{label}}
      color='secondary'
      className={follow}
      href={`https://twitter.com/intent/follow?screen_name=${handle}`}
      rel='noopener'
      target='_blank'
      size='small'
      variant='raised'
    >
      <img
        alt={`Follow @${handle}`}
        className={followImage}
        height='25'
        width='25'
        src='/images/twitter/Twitter_Logo_Blue.svg'
      />
      Follow
    </Button>
  )

  const loggedInFollow = (auth) => {
    if (auth.data.handle === handle)
      return null

    if (auth.data.following.find(id => id === userId))
      return (
        <div className={following}>
          <img
            alt={`Following @${handle}`}
            className={followImage}
            height='25'
            width='25'
            src='/images/twitter/Twitter_Logo_Blue.svg'
          />
          Following
        </div>
      )

    return loggedOutFollow(handle)
  }

  return (
    <Auth
      renderLoggedIn={({ auth }) => loggedInFollow(auth)}
      renderLoggedOut={() => loggedOutFollow()}
    />
  )
}

export default withStyles(styles)(FollowButton)
