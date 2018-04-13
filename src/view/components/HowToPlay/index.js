import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'UI'
import Typography from 'UI/Typography'
import Error from 'Icons/Error'
import Info from 'Icons/Info'
import styles from './styles'

const { FOLLOW_URL, TWITTER_ACCOUNT } = process.env

const HowToPlay = ({
  classes: {
    container,
    heading,
    icon,
    link,
    list,
    nowrap,
    pageHeader,
    quote,
    text,
    title,
    welcomeMessage
  },
  history
}) => (
  <div>
    <div className={pageHeader}>
      <Typography className={title} variant='display1'>
        How to Play
      </Typography>
    </div>
    <div className={container}>
      <Typography className={classNames(heading, welcomeMessage)} variant='title'>
        Welcome to GameGogakuen, the Game Language Learning Academy!
      </Typography>
      <Typography className={text} variant='subheading'>
        This is a language quiz game that asks you to fill in the blanks in Japanese text taken from video games.
        The quiz questions are tweeted every 6 hours from <a className={link} target='_blank' href={`//twitter.com/${TWITTER_ACCOUNT}`}>@devtest222</a> (for the beta), so be sure to <a className={link} target='_blank' href={FOLLOW_URL}>follow</a> the bot or bookmark the <a className={link} onClick={() => history.push('/')}><span className={nowrap}>Live Questions</span></a> page on this site to see the latest questions as soon as they become available.
      </Typography>
      <Typography className={heading} variant='headline'>
        Clues 
      </Typography>
      <Typography className={text} variant='subheading'>
        To help you guess the answers, there are 3 or 4 pieces of information provided as clues:
        <ul className={list}>
          <li>
            images and text for context
          </li>
          <li>
            the number of characters in the answer
          </li>
          <li>
            the rough equivalent meaning in English
          </li>
          <li>
            (when necessary) hints ruling out what characters are NOT part of the answer
          </li>
        </ul>
        Here's a quick example...
        <br/>
        <blockquote className={quote}>
        Question: What 4 character answer means "at last"?
        <br/>
        Hint: [_] [_] [≠や] [≠う]
        </blockquote>
        <p>
          This means the first and second characters of the answer could be anything, but the third character is not や, and the fourth character is not う.
        </p>
        <p>
          Thus, the answer cannot be ようやく nor とうとう, both of which can also mean "at last".
        </p>
        <p>
          This leaves fewer possible answers, helping you home in on the correct one.
        </p>
        <p>
          If both a single kanji or a single kana are possible for a particular character within the answer (e.g. くっつく or くっ付く), I've added additional acceptable answers that allow you to get the answer correct no matter if you use the kanji or kana version, as long as the character count is the same.
        </p>
        <p>
          For verbs, be sure to make good use of the context images when conjugating them.
        </p>
      </Typography>
      <Typography className={heading} variant='headline'>
        Answer Submission 
      </Typography>
      <Typography className={text} variant='subheading'>
        <p>
          To answer a question, click the "Submit Answer" link in the question tweet or on the <a className={link} onClick={() => history.push('/')}><span className={nowrap}>Live Questions</span></a> page here at the GameGogakuen site.
        </p>
        <p>
          If you are logged in to Twitter, this will populate a direct message (DM) to the bot with the question's ID (QID...) followed by a space, leaving you to simply type your answer and hit Send.
        </p>
        <p>
          You can also compose a guess manually by sending a DM to the bot with the question's ID (include "QID" before the number), a space, and then your answer.
        </p>
        <blockquote className={quote}>
          <Info className={icon} /> Note that answering in romaji is not supported, so you will need a Japanese keyboard installed on your phone or PC in order to answer successfully.
        </blockquote>
      </Typography>
      <Typography className={text} variant='subheading'>
        <p>
          Questions are active for 24 hours from their time of posting before their answer is tweeted and points are assigned to those who correctly guessed the answer.
        </p>
        <p>
          Your first guess via DM will be counted as your answer for a particular question ID, and any subsequent DMs from your account for that QID will be ignored.
        </p>
        <p>
          Any DMs received for a QID after that question's answer has been tweeted will also be ignored.
        </p>
        <p>
          Since tweet replies will not be counted as answers, feel free to use a question's reply thread to discuss it before making your official guess via DM.
        </p>
      </Typography>
      <Typography className={heading} variant='headline'>
        Scoring 
      </Typography>
      <Typography className={text} variant='subheading'>
        <p>
          Once a question's answer is tweeted, anywhere from 1 to 24 points will be given for correct guesses depending on how quickly the guess was received.
        </p>
        <p>
          If you guess an answer correctly within the first hour after a question is posted, you will be given the maximum of 24 points.
        </p>
        <p>
          For each hour that passes after a question is tweeted, the number of points given for answering correctly will decrease by one until the answer is tweeted at the 24-hour mark.
        </p>
        <p>
          Points are not distributed until a question's answer is tweeted, so there is no way to know during a question's active period whether or not you guessed correctly.
        </p>
      </Typography>
      <Typography className={heading} variant='headline'>
        Stats / Ranking 
      </Typography>
      <Typography className={text} variant='subheading'>
        <p>
          To view your weekly, monthly, and overall stats, click on the <a className={link} onClick={() => history.push('/stats')}>Leaderboard</a> link in this site's navigation menu.
        </p>
        <p>
          Players are ranked by points, but if multiple players have the same number of points, those players will be ranked from lowest to highest average answer time.
        </p>
        <p>
          Questions left unanswered will not affect your average answer time, but both correct and incorrect answers will contribute to your average answer time.
        </p>
      </Typography>
      <Typography className={heading} variant='headline'>
        Disclaimer
      </Typography>
      <Typography className={text} variant='subheading'>
        <blockquote className={quote}>
        
        <p>
          <Error className={icon} /> While I do my best to leave only one possible correct answer, you may think of a word that is also possible given the criteria, yet is not the word that appears in the game.
        </p>
        <p>          
          In such a case, please let me know which possibilities I overlooked by replying to the relevant answer tweet, and I'll add additional hints to that card in the database.
        </p>
        <p>
          Even though the opportunity to answer the question correctly will have passed, your feedback will help improve the cards, and it will benefit those studying the Anki flashcard decks that will eventually be available for download.
        </p>
        <p>
          Please understand that in such cases, points will not be assigned manually after the fact.
        </p>
        <p>
          Just make your best guess, and have fun! There is no prize or money at stake.
        </p>
        </blockquote>
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(HowToPlay)