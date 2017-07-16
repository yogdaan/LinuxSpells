#!/usr/bin/env node

"use strict";

/*
	The below code is taken from : https://github.com/yamboy1/terminal-utilities
*/

class Terminal {

  constructor () {
    if (process.stdout.isTTY && process.stderr.isTTY && process.stdin.isTTY) {
      this.stdin = process.stdin
      this.stdout = process.stdout
      this.stderr = process.stderr
    } else {
      throw Error('Error')
    }
  }

  setCursor (cols, rows) {
    this.stdout.cursorTo(cols, rows)
  }

  clear () {
    for (var i = 0; i < this.stdout.rows; i++) {
      this.setCursor(0, i)
      this.write(' '.repeat(this.stdout.columns))
    }
    this.setCursor(0, 0)
  }

  clearLine (line) {
    if (!line && line !== 0) {
      throw Error('The clearLine method takes exactly one argument')
    }
    this.setCursor(0, line)
    this.write(' '.repeat(this.stdout.columns))
  }

  writeLine (text) {
    this.write(text + '\n')
  }

  write (text) {
    if (text === undefined) {
      this.stdout.write('')
    } else {
      if (Buffer.isBuffer(text)) {
        this.stdout.write(text)
      }
      this.stdout.write(text.toString())
    }
  }

  readLine (question) {
    return readlineSync.question(question)
  }

  error (message) {
    if (message) {
      this.writeLine('ERR: ' + message)
    } else {
      throw Error('The error method takes exactly one argument')
    }
  }
}

/*
	Class ends here!
*/


var term = new Terminal();
term.clear();