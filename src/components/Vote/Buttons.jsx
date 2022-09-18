import React, { Component } from 'react'


export default function Buttons({leaveVote}) {
    return (
      <>
     <button type="button" onClick={() => leaveVote("good")}>Good</button>
      <button type="button" onClick={() => leaveVote("neutral")}>Neutral</button>
      <button type="button" onClick={() => leaveVote("bad")}>Bad</button>
  </>
    )
  }
  