import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import MainComponent from './MainComponent'

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)
