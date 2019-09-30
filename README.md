# OK Gamers Graph

✨ Ok Gamers graph frontend and visualization component for Twitch extension that increase interaction with streamer voice control for polling for viewers

![Ok Gamers Banner](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/000/854/194/datas/medium.png)

## Getting Started

### Installing the project

```
npm install
```

### Running the project

```
npm run dev
```

## Inspiration

We wanted to address **Data_Dave**'s challenge to allow community input to affect the content of the stream.

A Twitch stream's chat is the primary means for a streamer to interact with their community, so we decided to focus on improving this interaction.

As viewers, we are familiar with scenarios where streamers ask their viewers what they should do next - whether they're playing a horror game and asking which way to go (left or right?), or playing an RPG and letting viewers influence their play-through.

Most commonly, when streamers ask these questions they just watch chat and try to decide what seems more popular - although this makes for an entertaining chat, many viewers voices aren't heard as chats are so large.

Inspired by this common interaction between streamer and viewer, we created Ok Gamers!

## What it does

Ok Gamers is a Twitch Extension which adds a visual element for streamers to actually __ see __ what their viewers want (rather than guessing off a fast-moving chat).

Using speech recognition, Ok Gamers automagically detects when a streamer asks their viewers a question - all they have to say is "Ok gamers, <question>"

Ok Gamers then reads chat, tallies viewers responses, and shows them in a real-time pie chart through our extension!

This enables streamers to get the full picture of what their viewers want, while making viewers feel like their voice really counts - even in bigger streams.

## How we built it

The backend is in two parts, both written in Python:

1. Speech Recognition:
    - Continuously running Python script using Azure to obtain input from mic -> text
    - Using regex parses questions to extract options
    - Sends parsed question to our REST API via POST request
2. REST API:
    - Flask-based
    - Runs a Twitch Chatbot to read chat and tally votes
    - Poll endpoint for extension to get data

The frontend was designed with Figma, built with Parcel and Sass.

## Challenges we ran into
- Getting speech-to-text to play nicely in a way that we could build in 24 hours was particularly challenging. We elected to create a terminal based
- Connecting the Twitch Extension to our backend
