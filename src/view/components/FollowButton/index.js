import React          from 'react'
import { withStyles } from 'UI/styles'
import Auth           from 'Data/Auth'
import Button         from 'UI/Button'
import SmallSpinner   from 'Components/SmallSpinner'
import styles         from './styles'


function FollowButton({
  classes: {
    follow,
    following,
    followImage,
    label,
    visibility
  },
  handle,
  userId
}) {

  const PrivacyButton = ({ auth, requestTogglePrivacy }) => {
    const privacyLabel = auth.requestingTogglePrivacy
      ? <SmallSpinner />
      : `Make Account ${ auth.data.isPrivate ? 'Public' : 'Private' }`

    return (
      <Button
        className={visibility}
        onClick={requestTogglePrivacy}
        size='small'
        variant='raised'
      >
        { privacyLabel }
      </Button>
    )
  }

  const LoggedOutFollow = () => (
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
        alt='twitter logo'
        className={followImage}
        height='25'
        width='25'
        src='/images/twitter/Twitter_Logo_Blue.svg'
      />
      Follow
    </Button>
  )

  const LoggedInFollow = (props) => {
    if (props.auth.data.handle === handle) {
      return <PrivacyButton {...props} />
    }

    if (props.auth.data.following.find(id => id === userId))
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

    return <LoggedOutFollow />
  }

  return (
    <Auth
      renderLoggedIn={(props) => <LoggedInFollow {...props} />}
      renderLoggedOut={() => <LoggedOutFollow />}
    />
  )
}

export default withStyles(styles)(FollowButton)
