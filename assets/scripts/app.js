'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  // User Docs
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePw)

  // Game Docs/Events
  $('#new-game').hide()
  $('#game-stats').hide()
  $('#game-board').hide()
  $('#game-title').hide()
  $('.tile').on('click', authEvents.onGamesUpdate)
  $('#new-game').on('submit', authEvents.onGamesCreate)
  $('#stats').hide()
  $('#stats').on('submit', authEvents.onGetGameStats)
})
